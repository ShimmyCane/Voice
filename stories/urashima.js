// Urashima Tarō and the Turtle (urashima) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py urashima to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'urashima',
  group: 'urashima',
  title: "Urashima Tarō and the Turtle",
  subtitle: "A Japanese folk tale",
  lang: 'en',
  cover: '🌊',
  color: '#cfe3ff',
  version: 1,
  music: 'japan',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "bm_daniel"
      },
      "taro": {
          "name": "Tarō",
          "icon": "👦",
          "voice": "am_adam"
      },
      "turtle": {
          "name": "Turtle",
          "icon": "🐢",
          "voice": "bm_george"
      },
      "princess": {
          "name": "Princess Otohime",
          "icon": "👸",
          "voice": "bf_lily"
      }
  },
  script: [
    {"who": "narrator", "text": "Long ago, in a fishing village by the sea, there lived a kind young man named Urashima Tarō.", "notes": [{"kind": "sound", "text": "waves on the sand", "sfx": "waves"}]},
    {"who": "narrator", "text": "One day, he saw some children poking a turtle on the beach."},
    {"who": "taro", "text": "Stop! Please be kind. Let the turtle go back to the sea.", "notes": [{"kind": "motivation", "text": "Tarō: he cannot walk past someone in trouble"}, {"kind": "acting", "text": "firm but kind, not angry"}]},
    {"who": "narrator", "text": "The children ran away, and Tarō carried the turtle gently into the water.", "notes": [{"kind": "sound", "text": "a small splash", "sfx": "splash"}]},
    {"who": "turtle", "speed": 0.85, "text": "Thank you for saving me. Would you like to see the Dragon Palace under the sea? Climb on my back.", "notes": [{"kind": "motivation", "text": "Turtle: wants to repay a kindness"}, {"kind": "acting", "text": "slow, old and grateful"}]},
    {"who": "narrator", "text": "Tarō climbed on the turtle, and down they went, deep under the waves.", "notes": [{"kind": "sound", "text": "bubbles rising", "sfx": "bubbles"}]},
    {"who": "narrator", "text": "In the Dragon Palace he met the beautiful Princess Otohime."},
    {"who": "princess", "text": "Welcome, Tarō. Please stay with us as long as you like.", "notes": [{"kind": "acting", "text": "soft and kind, like a bell"}]},
    {"who": "narrator", "text": "He ate wonderful food and watched fish dance. Three happy days went by."},
    {"who": "taro", "text": "I miss my home and my mother. I must go back.", "notes": [{"kind": "motivation", "text": "Tarō: homesick"}, {"kind": "acting", "text": "quiet, a little sad"}]},
    {"who": "princess", "text": "Then take this box. But never, ever open it.", "notes": [{"kind": "sound", "text": "a gentle chime", "sfx": "bell"}, {"kind": "acting", "text": "serious, a warning in the voice"}]},
    {"who": "narrator", "text": "Tarō rode the turtle home. But the village had changed. Nobody knew him. Three hundred years had passed!", "notes": [{"kind": "acting", "text": "Narrator: slow, a shiver of surprise"}]},
    {"who": "narrator", "text": "Sad and alone, he sat on the beach and opened the box. White smoke rose up, and Tarō became an old, old man.", "notes": [{"kind": "sound", "text": "white smoke", "sfx": "magic"}]},
    {"who": "narrator", "speed": 0.85, "text": "Time is precious. Be glad of the home you have today.", "notes": [{"kind": "motivation", "text": "Narrator: the reason the story is told"}, {"kind": "acting", "text": "slow and wise"}]}
  ]
});
