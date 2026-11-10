# Voice 🎙️

A shelf of family stories for the kids on the iPad, narrated by [Kokoro](https://github.com/hexgrad/kokoro), a free open voice model.

- **Thirteen stories** from folk tales around the world (Aesop, Japan, Korea, India, the Netherlands, France, Italy, Denmark and more), each in **English, 中文 and a third language** from its part of the world, with a soft synthesized tune. See `story_list.md`.
- **Read along** with the spoken word highlighted, or **speed read** (one word at a time, red focus letter, drag the speed).
- **🎬 Director's notes** open from ⚙️: why each character speaks, how to act it, sounds, moves and thoughts. Sound effects play on cue.
- **Voices:** made ahead of time (works offline), **live in the browser** (English), or the iPad's own voice.

**Current version: 0.5.0.** To check which version a device is running, open ⚙️ and read the bottom line.

## Run it

Serve the folder (for example `python3 -m http.server`) and open `index.html`. The live voice needs http(s), not a file. On GitHub Pages, use the repo's Pages link.

## Where things are

`schematic.md` (design) · `convo/` (questions and answers) · `notes/` (current state and lessons) · `todo.md` · `story_list.md` (ten more stories planned) · `stories/` and `audio/` · `tools/make_kokoro.py` (makes the audio). Working notes for Claude are in `CLAUDE.md`.

Kokoro-82M and kokoro-js are Apache 2.0 (licence in `lib/`). Stories are retellings of public-domain tales.
