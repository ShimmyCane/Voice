// The Emperor's New Clothes (emperor_clothes) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py emperor_clothes to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'emperor_clothes',
  group: 'emperor_clothes',
  title: "The Emperor's New Clothes",
  subtitle: "From Hans Christian Andersen, 1837",
  lang: 'en',
  cover: '👑',
  color: '#efe2ff',
  version: 1,
  music: 'netherlands',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "bm_daniel"
      },
      "emperor": {
          "name": "Emperor",
          "icon": "👑",
          "voice": "bm_george"
      },
      "swindler": {
          "name": "Swindler",
          "icon": "🎭",
          "voice": "am_michael"
      },
      "child": {
          "name": "Child",
          "icon": "👧",
          "voice": "af_sky"
      }
  },
  script: [
    {"who": "narrator", "text": "Long ago, there was an emperor who loved new clothes more than anything. He spent all his money on them.", "notes": [{"kind": "sound", "text": "a trumpet fanfare", "sfx": "trumpet"}]},
    {"who": "narrator", "text": "One day, two swindlers came to the city."},
    {"who": "swindler", "speed": 0.9, "text": "We weave the most beautiful cloth in the world! But only clever people can see it. Fools cannot.", "notes": [{"kind": "motivation", "text": "Swindler: he knows vanity is easy to trick"}, {"kind": "acting", "text": "smooth, shiny, polite"}]},
    {"who": "emperor", "speed": 0.9, "text": "Wonderful! I will know who is clever, and who is a fool!", "notes": [{"kind": "motivation", "text": "Emperor: he loves to be admired"}, {"kind": "acting", "text": "pleased and a little pompous"}]},
    {"who": "narrator", "text": "The swindlers pretended to weave on empty looms. The emperor sent his old minister to look. The minister saw nothing, nothing at all!", "notes": [{"kind": "acting", "text": "Narrator: playful, a wink"}]},
    {"who": "narrator", "text": "But he did not want to look foolish, so he said, \"It is beautiful!\"", "notes": [{"kind": "thought", "text": "Minister: Am I a fool? I must not say so."}]},
    {"who": "narrator", "text": "The emperor saw nothing, too. \"Am I a fool?\" he thought. \"I must say it is beautiful!\""},
    {"who": "swindler", "speed": 0.9, "text": "Now, Your Majesty, please put on your new clothes.", "notes": [{"kind": "sound", "text": "a trumpet fanfare", "sfx": "trumpet"}, {"kind": "acting", "text": "bows low, hiding a smile"}]},
    {"who": "narrator", "text": "And so the emperor walked in the great parade, wearing nothing at all.", "notes": [{"kind": "sound", "text": "a murmuring crowd", "sfx": "cheer"}]},
    {"who": "narrator", "text": "And the people cried, \"How beautiful his new clothes are!\" Nobody wanted to look foolish."},
    {"who": "child", "speed": 1.0, "text": "But he has nothing on!", "notes": [{"kind": "motivation", "text": "Child: she only says what she sees"}, {"kind": "acting", "text": "clear, light, a little surprised"}]},
    {"who": "narrator", "text": "The people began to whisper, and then everyone laughed: \"He has nothing on!\"", "notes": [{"kind": "sound", "text": "laughter spreading", "sfx": "cheer"}]},
    {"who": "narrator", "speed": 0.9, "text": "The emperor shivered. He knew they were right. But he held his head high, and walked on.", "notes": [{"kind": "acting", "text": "Narrator: slow and comic"}]},
    {"who": "narrator", "speed": 0.88, "text": "Say what is true, even when everyone else will not.", "notes": [{"kind": "motivation", "text": "Narrator: the reason the story is told"}, {"kind": "acting", "text": "slow and wise"}]}
  ]
});
