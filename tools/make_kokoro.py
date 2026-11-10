#!/usr/bin/env python3
"""Make Kokoro narration (MP3 + word timings) for Voice stories.

Kokoro-82M is an open voice model (Apache 2.0). It runs on this computer:
no account, no key, nothing is sent anywhere.

Script stories (story.script + story.cast): the voice 'cast' reads each line in its
speaker's voice at the line's speed; any other voice reads every line itself.

Output, per story and voice:
  audio/<id>.<voice>.mp3          the narration
  stories/<id>.audio.js           word timings for every voice of that story
                                  (window.VOICE_AUDIO[id][trackKey] = {...})

How it is made (v2, 2026-11-10): each paragraph or dialogue line is spoken in ONE
request, so the voice keeps its natural rhythm and tone across commas and
sentences (v1 spoke every comma-sized piece separately, which sounded halting).
Only the gaps between paragraphs are added by this script, and every piece gets a
short fade so nothing clicks or is cut off hard.

Word timings are estimated: words share the paragraph's length by how many sounds
they have, plus extra for the pause after a comma or a full stop. The long pauses
in the real recording are found and the words after a comma or a full stop are
snapped to them, so the highlight stays with the voice.

Setup (once, outside the repo; the model files are not committed):
  python3 -m venv venv && . venv/bin/activate
  pip install kokoro-onnx "misaki[zh]" "misaki[ja]" soundfile
  npm pack kokoro-q8-shards kokoro-js      # model weights + voices from npm
  cat kokoro-q8.part{0..5}.bin > model_q8.onnx
  (voices.npz is built from kokoro-js/voices/*.bin, see build_voices())
Run:
  python3 -I tools/make_kokoro.py --model <dir with model_q8.onnx> [story ids]
"""
import argparse, glob, json, os, re, subprocess, sys, datetime
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SR = 24000
GAP = 0.55            # silence between paragraphs or dialogue lines, seconds
FADE_IN, FADE_OUT = 0.006, 0.03
HEADROOM = 0.85       # loudest allowed sample before encoding (1.0 is the limit)
SENT_END = '.!?。！？।'
PHRASE_END = SENT_END + ',;:，；：、'
CLOSERS = '"\'”’」』»）)'
OPENERS = '"“‘「『«（('
CJK = '[\u3040-\u30ff\u4e00-\u9fff]'
ESPEAK = {'fr': 'fr-fr', 'es': 'es', 'it': 'it', 'pt': 'pt-br', 'hi': 'hi'}
ZH_PUNCT = {'「': '"', '」': '"', '『': '"', '』': '"', '«': '"', '»': '"', '，': ',', '。': '.', '！': '!', '？': '?', '；': ';', '：': ':', '、': ',',
            '“': '"', '”': '"', '‘': "'", '’': "'", '（': '(', '）': ')'}


def load_stories():
    """Read stories/*.js with node (they are plain scripts that push to window.VOICE_STORIES)."""
    files = sorted(f for f in glob.glob(os.path.join(ROOT, 'stories', '*.js')) if not f.endswith('.audio.js'))
    js = ("const fs=require('fs');global.window={};for(const f of JSON.parse(process.argv[1])){"
          "eval(fs.readFileSync(f,'utf8'));}process.stdout.write(JSON.stringify(window.VOICE_STORIES));")
    out = subprocess.run(['node', '-e', js, json.dumps(files)], capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def tokenize(par, lang):
    """Split a paragraph into display tokens. The page shows exactly these tokens."""
    if lang not in ('zh', 'ja'):
        return par.split()
    if lang == 'ja':
        # fugashi words, with particles, verb endings and suffixes joined to the word before them
        import fugashi
        raw, prefix = [], ''
        for w in fugashi.Tagger()(par):
            pos, surf = w.feature.pos1, w.surface
            if pos == '補助記号' and all(c in OPENERS for c in surf):
                prefix += surf
            elif pos == '接頭辞':
                prefix += surf
            elif raw and not prefix and pos in ('助詞', '助動詞', '接尾辞', '補助記号'):
                raw[-1] += surf
            else:
                raw.append(prefix + surf)
                prefix = ''
        if prefix:
            raw.append(prefix)
        return raw
    else:
        import jieba
        raw = [w for w in jieba.cut(par) if w.strip()]
    toks, carry = [], ''
    for w in raw:
        if all(c in OPENERS for c in w):
            carry += w
        elif all(not c.isalnum() for c in w) and toks:
            toks[-1] += w
        else:
            toks.append(carry + w)
            carry = ''
    if carry:
        toks.append(carry)
    return toks


def ends(tok, chars):
    t = tok.rstrip(CLOSERS)
    return bool(t) and t[-1] in chars


def trim(a, thr=0.003, lead=0.03, tail=0.09):
    """Cut silence off both ends, but keep a soft tail so a final s or t is not chopped."""
    idx = np.where(np.abs(a) > thr)[0]
    if len(idx) == 0:
        return a
    s = max(0, idx[0] - int(lead * SR))
    e = min(len(a), idx[-1] + int(tail * SR))
    return a[s:e]


def fade(a, fin=FADE_IN, fout=FADE_OUT):
    a = a.copy()
    n_in, n_out = min(len(a), int(fin * SR)), min(len(a), int(fout * SR))
    if n_in: a[:n_in] *= np.linspace(0.0, 1.0, n_in, dtype=np.float32)
    if n_out: a[-n_out:] *= np.linspace(1.0, 0.0, n_out, dtype=np.float32)
    return a


def silent_runs(a, min_len=0.11):
    """Long pauses in a recording: (start, length) in seconds."""
    fr = int(0.01 * SR)
    n = len(a) // fr
    if n < 5:
        return []
    rms = np.sqrt(np.mean(a[:n * fr].reshape(n, fr) ** 2, axis=1))
    voiced = rms[rms > 0.25 * np.median(rms[rms > 0])]
    thr = 0.15 * (np.median(voiced) if len(voiced) else 1.0)
    runs, i = [], 0
    while i < n:
        if rms[i] < thr:
            j = i
            while j < n and rms[j] < thr:
                j += 1
            if (j - i) * 0.01 >= min_len:
                runs.append((i * 0.01, (j - i) * 0.01))
            i = j
        else:
            i += 1
    return runs


def word_times(toks, a, lang):
    """[start, end] seconds for each token inside the recording a (already trimmed)."""
    total = len(a) / SR
    cjk = lang in ('zh', 'ja')
    w = []
    for t in toks:
        n = len(re.findall(CJK, t)) if cjk else len(re.sub(r'[\W\d_]', '', t)) + 1
        w.append(max(1, n))
    pc, ps = (1.2, 2.5) if cjk else (3.0, 5.0)
    pause = [ps if ends(t, SENT_END) else pc if ends(t, PHRASE_END) else 0.0 for t in toks]
    wt = [x + p for x, p in zip(w, pause)]
    tot = float(sum(wt)) or 1.0
    start, acc = [], 0.0
    for x in wt:
        start.append(total * acc / tot)
        acc += x
    # expected centre of each pause (after the word's own sounds), then snap to a real long pause
    runs = silent_runs(a)
    anchors, last_c = [], -1.0
    for i, t in enumerate(toks[:-1]):
        if pause[i] == 0:
            continue
        exp_c = total * (sum(wt[:i]) + w[i] + pause[i] / 2) / tot
        best = None
        for (rs, rl) in runs:
            c = rs + rl / 2
            if c > last_c and abs(c - exp_c) <= 0.7 and (best is None or abs(c - exp_c) < abs(best[0] - exp_c)):
                best = (c, rs + rl)
        if best:
            anchors.append((start[i + 1], best[1]))      # (where the plan put the next word, where it really starts)
            last_c = best[0]
    if anchors:
        xs = [0.0] + [x for x, _ in anchors] + [total]
        ys = [0.0] + [y for _, y in anchors] + [total]
        for k in range(1, len(xs)):                       # keep it in order
            ys[k] = max(ys[k], ys[k - 1])
        start = [float(np.interp(x, xs, ys)) for x in start]
    ends_ = start[1:] + [total]
    return [[round(s_, 3), round(e_, 3)] for s_, e_ in zip(start, ends_)]


def build_voices(js_voice_dir, out):
    v = {os.path.basename(f)[:-4]: np.fromfile(f, dtype=np.float32).reshape(-1, 1, 256)
         for f in glob.glob(os.path.join(js_voice_dir, '*.bin'))}
    np.savez(out, **v)


def line_voice(story, p, voice):
    """Voice and speed for paragraph p. voice 'cast' = each script line in its speaker's voice."""
    line = (story.get('script') or [{}] * len(story['paragraphs']))[p]
    if voice == 'cast':
        return story['cast'][line['who']]['voice'], line.get('speed', 0.92)
    return voice, (0.9 if story['lang'] in ('zh', 'ja') else 0.92)


def synth(kokoro, lang, text, v, speed, g2p):
    if lang in ('zh', 'ja'):
        pho = g2p[lang](text)
        pho = pho[0] if isinstance(pho, tuple) else pho
        pho = ''.join(ZH_PUNCT.get(c, c) for c in pho)
        audio, _ = kokoro.create(pho, voice=v, is_phonemes=True, speed=speed)
    elif lang in ESPEAK:
        audio, _ = kokoro.create(text, voice=v, speed=speed, lang=ESPEAK[lang])
    else:
        audio, _ = kokoro.create(text, voice=v, speed=speed, lang='en-us' if v[0] == 'a' else 'en-gb')
    return np.asarray(audio, dtype=np.float32)


def make(story, voice, kokoro, g2p):
    lang = story['lang']
    words_out, chunks, t = [], [], 0.0
    gap = np.zeros(int(GAP * SR), dtype=np.float32)
    n_par = len(story['paragraphs'])
    for p, par in enumerate(story['paragraphs']):
        v, speed = line_voice(story, p, voice)
        toks = tokenize(par, lang)
        text = (''.join if lang in ('zh', 'ja') else ' '.join)(toks)
        audio = fade(trim(synth(kokoro, lang, text, v, speed, g2p)))
        times = word_times(toks, audio, lang)
        words_out.append([[w, round(t + a, 3), round(t + b, 3)] for w, (a, b) in zip(toks, times)])
        chunks.append(audio)
        t += len(audio) / SR
        if p < n_par - 1:
            chunks.append(gap)
            t += GAP
    out = np.concatenate(chunks)
    peak = float(np.abs(out).max()) if len(out) else 0.0
    if peak > HEADROOM:                       # leave room for the MP3 encoder so no sample goes over 1.0
        out = out * (HEADROOM / peak)
    return out, words_out, round(t, 2)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--model', required=True, help='folder with model_q8.onnx and voices.npz')
    ap.add_argument('ids', nargs='*')
    a = ap.parse_args()
    from kokoro_onnx import Kokoro
    import soundfile as sf
    kokoro = Kokoro(os.path.join(a.model, 'model_q8.onnx'), os.path.join(a.model, 'voices.npz'))
    g2p = {}
    for story in load_stories():
        if story.get('script'):
            story['paragraphs'] = [line['text'] for line in story['script']]
        if a.ids and story['id'] not in a.ids:
            continue
        if story['lang'] == 'zh' and 'zh' not in g2p:
            from misaki import zh
            g2p['zh'] = zh.ZHG2P()
        if story['lang'] == 'ja' and 'ja' not in g2p:
            from misaki import ja
            g2p['ja'] = ja.JAG2P()
        tracks = {}
        for voice in story.get('kokoroVoices', []):
            audio, words, dur = make(story, voice, kokoro, g2p)
            wav = os.path.join(a.model, f"{story['id']}.{voice}.wav")
            mp3 = f"audio/{story['id']}.{voice}.mp3"
            sf.write(wav, audio, SR)
            subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-ac', '1', '-c:a', 'libmp3lame',
                            '-b:a', '64k', os.path.join(ROOT, mp3)], check=True)
            tracks['kokoro:' + voice] = {
                'service': 'Kokoro', 'voice': voice,
                'cast': {k: c['voice'] for k, c in story.get('cast', {}).items()} if voice == 'cast' else None, 'src': mp3, 'duration': dur,
                'made': datetime.date.today().isoformat(), 'timing': 'estimated per phrase',
                'source': story['paragraphs'], 'words': words}
            print(f"{story['id']} {voice}: {dur}s -> {mp3}")
        path = os.path.join(ROOT, 'stories', f"{story['id']}.audio.js")
        with open(path, 'w', encoding='utf-8') as f:
            f.write('// Made by tools/make_kokoro.py. Do not edit by hand.\n')
            f.write('window.VOICE_AUDIO = window.VOICE_AUDIO || {};\n')
            f.write(f"window.VOICE_AUDIO[{json.dumps(story['id'])}] = ")
            f.write(json.dumps(tracks, ensure_ascii=False, separators=(',', ':')))
            f.write(';\n')


if __name__ == '__main__':
    main()
