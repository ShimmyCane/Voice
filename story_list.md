# Voice — Story list

Old public-domain tales with a clear lesson, written as **script stories**: a cast of voices, and 🎬 director's notes (why, acting, sound, moves, thoughts) hidden until you open them. Every story has **English and 中文**, plus a **third language from the story's part of the world**, with a soft synthesized tune from there.

**Voices:** Kokoro (free, open) speaks English, Chinese, Japanese, French, Spanish, Italian, Portuguese and Hindi, so those versions have recorded audio. Korean, Dutch, Danish and Australian English have no Kokoro voice yet, so those versions are read by the **iPad's own voice** (download a Premium or Enhanced voice for the language in the iPad's Settings → Accessibility → Spoken Content → Voices).

## On the shelf (13)

| # | Story | Source | Lesson | Third language | Tune |
|---|---|---|---|---|---|
| 1 | 🐟 The Fisherman and the Goldfish | Russian folk tale | Greed loses everything; love is enough | 日本語 Japanese (Kokoro) | koto |
| 2 | 🐺 The Boy Who Cried Wolf | Aesop | A liar is not believed even when he tells the truth | Español Spanish (Kokoro) | Spanish guitar |
| 3 | 🧺 Little Red Riding Hood | Perrault, 1697 (the original) | Beware of sweet-talking strangers | Français French (Kokoro) | musette waltz |
| 4 | 🐢 The Tortoise and the Hare | Aesop | Slow and steady wins the race | Aussie English, told in the outback (iPad voice) | didgeridoo and clapsticks |
| 5 | 🌊 Urashima Tarō and the Turtle | Japanese folk tale | Time and home are precious | 日本語 Japanese (Kokoro) | koto |
| 6 | 🌙 The Sun and the Moon 해님 달님 | Korean folk tale | Quick wits and courage beat a trick | 한국어 Korean (iPad voice) | gayageum |
| 7 | 🍲 Stone Soup | European folk tale | Sharing makes a feast out of nothing | Français French (Kokoro) | musette waltz |
| 8 | 🌷 The Boy and the Dike | Dutch story (from *Hans Brinker*, 1865) | Small courage can save a whole town | Nederlands Dutch (iPad voice) | barrel organ |
| 9 | 🪵 Pinocchio and the Talking Cricket | Collodi, 1883 | Listen to the voice that tells you the truth | Italiano Italian (Kokoro) | mandolin |
| 10 | 🐜 The Ant and the Grasshopper | Aesop | Work now, rest later, share with those in need | Español Spanish (Kokoro) | Spanish guitar |
| 11 | 🐒 The Monkey and the Crocodile | Panchatantra, India | Quick wits beat strength | हिन्दी Hindi (Kokoro) | raga-style sitar pluck |
| 12 | 🦁 The Lion and the Mouse | Aesop | No kindness is wasted | Português Portuguese (Kokoro) | samba-style guitar |
| 13 | 👑 The Emperor's New Clothes | Andersen, 1837 | Say what is true, even when others won't | Dansk Danish (iPad voice) | barrel organ |

Numbers 4 to 13 were written on 2026-11-10. They are short (12 to 14 lines) and have a cast of two to four voices. Notes:
- **Italian and French:** Kokoro has only two Italian voices and one French voice, so some characters share a voice (the French version is read by one voice).
- **Chinese casts:** every Chinese version has its own cast of Kokoro voices.
- The first three stories are older and shaped differently (the fisherman and the wolf are plain paragraphs; Red Riding Hood is the only long script story).

## Ideas for next

| Story | Source | Lesson | Third language |
|---|---|---|---|
| 🐘 The Blind Men and the Elephant | India | Everyone sees a piece of the truth | हिन्दी Hindi |
| 🍑 Momotarō, the Peach Boy | Japan | Friends make a team | 日本語 Japanese |
| 🦊 The Fox and the Grapes | Aesop | Do not say a thing is bad just because you cannot have it | Italiano Italian |
| 🐸 The Frog Prince | Grimm, Germany | Keep your promises | Deutsch German (iPad voice) |
| 🐻 Anansi and the Pot of Wisdom | West Africa | Wisdom is for sharing | English with a Ghanaian touch |

## How a story is added

1. Write the English script with a cast and director's notes (`stories/<id>.js`, see `red_hood.js` or `tortoise_hare.js`).
2. Write the 中文 and third-language files line by line, with the same `group` and `notesFrom` pointing at the English one (`<id>_zh.js`, `<id>_<code>.js`).
3. Make the audio: `python3 -I tools/make_kokoro.py --model <dir> <ids>`. Languages Kokoro does not speak get no audio file and use the iPad voice.
4. Add the script tags to `index.html` and bump the version.
5. A new tune style goes into `js/sound.js` (`STYLES`); a new sound effect goes in `SFX`.
