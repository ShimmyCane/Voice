# Voice — Claude Code guide

A shelf of family stories for the kids on the iPad, narrated by Kokoro, a free open voice model. Audio is made ahead of time (or live in the browser, English only). Every story comes in English, 中文 and a third language from its part of the world, with a synthesized tune. Read along with the spoken word highlighted, speed read (red focus letter, drag speed slider), and 🎬 director's notes with sound effects.

This project grew up in the Index nursery (`ShimmyCane/Index`, `03 Projects/Voice/`) and moved here on 2026-11-10. **This repo is public:** treat every commit as published.

## Where things are

- Design and increments: `schematic.md`
- Questions and answers with Jimmy: `convo/convo v0.X.md`. Never compact or rewrite an old one; start a new version.
- Claude's notes: `notes/brief.md` (current state, verified vs. unverified) and `notes/lessons.md`. Update both after meaningful work.
- Backlog: `todo.md`. Planned stories: `story_list.md`.
- Page: `index.html`, `css/style.css`, `js/app.js` (app), `js/sound.js` (effects and tunes), `js/live.js` + `js/live_worker.js` + `lib/kokoro.web.js` (live Kokoro, vendored kokoro-js 1.2.1, Apache 2.0, licence in `lib/`).
- Stories: `stories/<id>.js` (text, edited by hand) and `stories/<id>.audio.js` (made by the script). Audio: `audio/<id>.<voice>.mp3`.
- Audio maker: `tools/make_kokoro.py` (setup in its header; the model files stay outside the repo).

## Conventions

- Track A, family play: pastel, bold 3px borders, offset shadows, big touch targets, few words, everything secondary in the ⚙️ drawer (lower right), errors only at the bottom behind "Show errors". Plain HTML/CSS/JS, no build step.
- One story = a `group` of files: `<id>.js`, `<id>_zh.js`, `<id>_<third>.js`. Translations set `notesFrom` to the English id and keep the same lines (script stories) or paragraphs (`paraNotes`).
- Script stories: `script` + `cast` (see the header of `stories/red_hood.js`). Director's note kinds: motivation, acting, sound (+ `sfx`), blocking, gesture, thought.
- After changing a story's text, remake its audio: `python3 -I tools/make_kokoro.py --model <dir with model_q8.onnx and voices.npz> <ids>`. The page marks stale audio and falls back to the iPad voice.
- Adding a story: add its script tags to `index.html`.
- **Bump the version when the page changes:** `VERSION` in `js/app.js`, the info line and every `?v=` tag in `index.html`, so iPads don't keep old cached scripts.
- Before saying it works: a headless Chromium check at 390, 768 and 1180 px wide (zero JS errors, no horizontal scroll, play, language switch, notes, speed read).

## Privacy (public repo)

- Never commit family data, real names beyond a first name, school or location details, health details, credentials or private documents.
- No AI or voice-service key anywhere in the repo or the browser code. A future server step (an Edge Function) would hold a key as a secret.
- Audio of a real family member's voice is never committed.
- Database (planned, 0.5): Family Supabase project, tables prefixed `voice_`, publishable key only, SQL pasted by hand.
- If unsure whether something is private, ask Jimmy before committing.

## Jimmy's preferences that matter here

- Ask before building when unclear; he wants to see a result, then decide. Merge when he asks.
- Show the limits with the result: say what was not tested (real iPad, listening).
- Offline-first is valued: bundled stories and audio work with no network.
- Historical sources only for stories and art (public-domain tales).
