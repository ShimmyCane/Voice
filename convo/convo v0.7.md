# Voice — Convo v0.7

**Round:** 7 (2026-11-10). The audio stutter.

## Jimmy (from the chat)

- "I've noticed that the audio has a stagger or seizure... how to fix/avoid?"
- After listening to four old/new samples: syllables are drawn out ("seeee, moooorning", "neeeet, waaaaaves", "whhhhy work so hard, ant?"), not at the same place each time. "Is it lag / ram / or some other thing?" The new one is slightly better with the pauses.
- After the raw WAV, a WAV converted from the MP3, and 48 kHz versions: still heard in all of them, at random places. Not on the iPad (even the original). Heard on Windows in Edge and VLC.
- Decision: "Just leave it; merge if necessary. Have a note in the version log that audio is expected to be problematic."

## What Claude found

- The old recordings were made by speaking every comma-sized piece separately, which sounds halting (40% of the pieces were three words or fewer; a paragraph took 14 seconds against 9 when spoken whole). That is a real rhythm fault, but it is not the stutter.
- The same files are clean on the iPad and glitch at random places in three formats on Windows, in two different players. The files are identical on every play. So the cause is almost certainly the Windows audio output (Bluetooth, driver, sound-enhancement settings). Not proven.
- No dropouts or sudden jumps in the files. A "held sound" detector was unreliable and its result was set aside.

## What was done

- Nothing was changed in the recordings. The audio-maker v2 and the two re-made stories stay on the unmerged branch `claude/smoother-voice`.
- 0.5.1: small page tidy-ups, a version log (`CHANGELOG.md`) that says the audio is expected to be problematic, and a hint under "Story voice speed" to leave it on Normal.

## Open questions (round 7)

1. On the Windows PC, does any other audio (a song, a video) stutter too? Does it still happen with wired headphones or the built-in speakers, or with "Audio enhancements" and "Spatial sound" turned off?
2. If a family member listens on a PC rather than the iPad, should Voice show a one-line tip about this?
