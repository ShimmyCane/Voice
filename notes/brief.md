# Voice — AI Brief

**Updated:** 2026-11-10 (moved from `ShimmyCane/Index`, `04 AI/Voice/brief.md`)
**Status:** MVP 0.5.0, not device-tested. Thirteen stories. Open questions in `convo/convo v0.6.md`, `v0.5.md`, `v0.4.md`.
**Track:** A. Family play.

## Goal
A story shelf for the kids on the iPad. Stories play in natural Kokoro voices, either made ahead of time or made live in the browser. Read along with word highlight, speed read (RSVP), and script stories with a cast and hidden stage notes.

## Architecture
- Plain HTML/CSS/JS, no build: `index.html`, `css/style.css`, `js/app.js`, `js/live.js`, `js/live_worker.js`, `lib/kokoro.web.js`.
- Story = `stories/<id>.js`. Plain stories use `paragraphs`; script stories use `script` (lines: who, text, tone, speed, notes) and `cast` (name, icon, Kokoro voice). Audio = `stories/<id>.audio.js` + `audio/<id>.<voice>.mp3`; the track key `kokoro:cast` means one voice per speaker.
- Baker `tools/make_kokoro.py` (kokoro-onnx, npm weights). It owns the tokens and stores `source` so stale audio is detected.
- Live: a module worker imports the vendored kokoro-js and loads the model from huggingface.co (q8 on WASM, fp32 on WebGPU). The page asks for one line at a time, makes three lines ahead, plays with Web Audio, and estimates the highlight per line. English only.
- Planned: 0.4 Family database, 0.5 make and save audio from the browser (no key).

## 0.4 additions
- Story groups (`group`), translations line by line with `notesFrom`, `paraNotes` for prose stories. Languages: en, zh, ja, fr, es now; the baker also knows it, pt, hi (espeak via kokoro-onnx) and ja (misaki[ja] + fugashi; particles, endings and closing quotes join the word before).
- Director's notes kinds: motivation, acting, sound (+sfx), blocking, gesture, thought; tone shows as Voice. Pop-open via grid-template-rows 0fr→1fr and staggered keyframes.
- `js/sound.js`: 13 synthesized effects, 8 culture tunes (lookahead scheduler, 120 ms tick). The music follows the play state through setPlayIcon; the effect plays when the highlight enters a new line.
- `story_list.md`: 3 on the shelf, 10 planned, with third language, tune and voice support.

## 0.5 additions
- Ten new script stories (`story_list.md`), each as `<id>.js` (EN), `<id>_zh.js`, `<id>_<code>.js`; generated from two data tables (not kept in the repo) so the notes, cast and line order match across languages. 26 new Kokoro narrations. Korean, Dutch, Danish and Aussie English versions have no audio file and use the iPad voice.
- `js/sound.js`: 24 effects and 10 tunes (added india, brazil).
- `js/app.js`: Danish, grapheme-aware focus letter (Hindi, French), danda sentence end, valid language tags (`en-AU` for Aussie).

## Verified vs. unverified
- Verified (headless Chromium, 2026-11-10): the shelf shows 13 cards at 390, 768 and 1180 px with no horizontal scroll and zero errors; all 39 story files load, show every line, speaker label and director's note; all 35 recorded versions match their text (none stale), play, and move the highlight; the speed-read focus letter is a whole letter in every language including Hindi; Kokoro live (0.3) was tested earlier with local copies of the HuggingFace files.
- Unverified: **nobody has listened to any of the 26 new narrations** (no listening possible here); the 11 new sound effects and 2 new tunes (synthesized, only checked for errors); the iPad voice for Korean, Dutch, Danish and Aussie English (headless has no voices); real iPad Safari; the 4 iPad-voice versions have no recorded audio at all.
- Known weak spots: Italian (two voices) and French (one voice) share voices between characters; Hindi and Portuguese untried by a native ear; the new stories are short (12 to 14 lines).

## Next steps
1. Jimmy listens to the new narrations and answers `convo/convo v0.6.md`, `v0.5.md` and `v0.4.md`.
2. Turn on GitHub Pages; give the fisherman a cast; 0.5 database.
