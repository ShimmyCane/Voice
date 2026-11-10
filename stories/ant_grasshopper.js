// The Ant and the Grasshopper (ant_grasshopper) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py ant_grasshopper to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'ant_grasshopper',
  group: 'ant_grasshopper',
  title: "The Ant and the Grasshopper",
  subtitle: "Aesop's fable",
  lang: 'en',
  cover: '🐜',
  color: '#d8e8c8',
  version: 1,
  music: 'spain',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "af_heart"
      },
      "ant": {
          "name": "Ant",
          "icon": "🐜",
          "voice": "af_sarah"
      },
      "grasshopper": {
          "name": "Grasshopper",
          "icon": "🦗",
          "voice": "am_liam"
      }
  },
  script: [
    {"who": "narrator", "text": "All summer long, a little ant worked hard in the field, carrying grains of wheat to her nest.", "notes": [{"kind": "sound", "text": "a warm summer day", "sfx": "birds"}]},
    {"who": "narrator", "text": "A grasshopper sat nearby in the sun, playing his fiddle and singing happy songs.", "notes": [{"kind": "sound", "text": "a fiddle tune", "sfx": "fiddle"}]},
    {"who": "grasshopper", "text": "Why work so hard, Ant? Come and sing with me! It is a beautiful day.", "notes": [{"kind": "motivation", "text": "Grasshopper: he wants company, not trouble"}, {"kind": "acting", "text": "easy-going, laughing"}]},
    {"who": "ant", "speed": 0.95, "text": "I am storing food for the winter. You should too.", "notes": [{"kind": "motivation", "text": "Ant: she is thinking ahead"}, {"kind": "acting", "text": "busy, not unkind"}]},
    {"who": "grasshopper", "text": "Winter is far away! Let us play!", "notes": [{"kind": "acting", "text": "laughs, plays one more tune"}]},
    {"who": "narrator", "text": "But summer ended. The leaves fell, the cold wind blew, and snow began to cover the fields.", "notes": [{"kind": "sound", "text": "cold wind", "sfx": "wind"}]},
    {"who": "narrator", "text": "The ant sat warm in her nest, with plenty of food. The grasshopper had no food, and no house.", "notes": [{"kind": "sound", "text": "snow crunching underfoot", "sfx": "crunch"}]},
    {"who": "grasshopper", "speed": 0.9, "text": "Please, Ant, I am so cold and so hungry. Can you help me?", "notes": [{"kind": "acting", "text": "small, shivering, a little ashamed"}]},
    {"who": "ant", "speed": 0.88, "text": "You played all summer. Now it is winter...", "notes": [{"kind": "motivation", "text": "Ant: she is cross, but not hard-hearted"}, {"kind": "acting", "text": "a long pause, then a sigh"}]},
    {"who": "ant", "speed": 0.9, "text": "But come in. There is room by the fire. Next summer, we will work together.", "notes": [{"kind": "acting", "text": "the voice softens, kind"}, {"kind": "thought", "text": "Ant: Nobody should be cold on a night like this."}]},
    {"who": "narrator", "text": "The grasshopper ate hot soup and played his fiddle for the ant by the fire. Both were happy.", "notes": [{"kind": "sound", "text": "a quiet fiddle tune", "sfx": "fiddle"}]},
    {"who": "narrator", "speed": 0.88, "text": "Work now, rest later, and always share with those in need.", "notes": [{"kind": "motivation", "text": "Narrator: the reason the story is told"}, {"kind": "acting", "text": "slow and wise"}]}
  ]
});
