# Voice — Version log

## Known issue: the audio is expected to be problematic

Some devices stutter or draw out syllables ("seee", "neeet", "whhhy"), at random places, on the same recording. Heard on 2026-11-10 on a Windows PC in Edge and in VLC. Not heard on the iPad, which is the device Voice is for.

What was checked, and what it means:
- The same stutter was heard in every test file: the recordings as MP3, the raw recording as WAV (never an MP3), the MP3 converted to WAV, and 48 kHz versions of both. It moved to different places on each play.
- The same files play cleanly on the iPad. The recordings are the same bytes every time, so a fault that moves around between plays is not in the files.
- Analysis of the files (dropouts, sudden jumps, spectrogram of the first sentence) found nothing wrong. The first "held sound" detector was not reliable (it failed its own test on deliberately slowed speech), so listening on the device is the real test.
- Most likely the cause is the Windows audio output (Bluetooth, driver, sound-enhancement settings), not Voice. Not proven.

Decision (Jimmy, 2026-11-10): leave the recordings as they are. Do not spend time re-making them for this.

Not adopted, kept on the unmerged branch `claude/smoother-voice`: an audio maker v2 that speaks each whole line in one request (v1 speaks comma-sized pieces, which sounds more halting and runs 40 to 60% longer), with fades, peak headroom and highlight times snapped to the real pauses, with the fisherman and Ant and the Grasshopper re-made. Jimmy found the new pauses slightly better. Re-making all 38 recordings would take about an hour and add about 34 MB to the repo history.

Tip: ⚙️ "Story voice speed" is best left on Normal. Slow, Calm and Quick stretch the recorded sound, which can make it wobble.

## 0.5.1 — 2026-11-10
- Page: the highlight and smooth scroll update only when the word changes (not every frame); the time text updates only when it changes; the audio link carries the version, so a new version never plays an old cached file. Note under "Story voice speed".
- This version log and the known-issue note above.

## 0.5.0 — 2026-11-10
- Ten more stories (13 in all), each in English, 中文 and a third language, with a cast, director's notes and a tune: Tortoise and the Hare, Urashima Tarō, The Sun and the Moon, Stone Soup, The Boy and the Dike, Pinocchio and the Cricket, The Ant and the Grasshopper, The Monkey and the Crocodile, The Lion and the Mouse, The Emperor's New Clothes.
- 26 new Kokoro narrations. Korean, Dutch, Danish and Aussie English use the iPad voice.
- 11 new sound effects, tunes for India and Brazil, Danish, whole-letter focus in speed read (Hindi, French), the Hindi full stop.

## 0.4.1 — 2026-11-10
- Moved out of the Index nursery into this repo. Version tags on every script and the stylesheet, standalone `CLAUDE.md`, notes in `notes/`, README.

## 0.4.0 — 2026-11-09
- English, 中文 and a third language for every story, tunes from each culture, 🎬 director's notes with sound effects, `story_list.md`.

## 0.3.0 — 2026-11-09
- Little Red Riding Hood as a script story (cast of five voices, hidden notes). Kokoro live in the browser (English).

## 0.2.0 — 2026-11-09
- Listening test: The Fisherman and the Goldfish and 狼来了, each with two Kokoro voices next to the iPad voice.

## 0.1.0 — 2026-11-09
- The page: story shelf, read along with the spoken word highlighted, speed read, ⚙️ with notes for improvement.
