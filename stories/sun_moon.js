// The Sun and the Moon (sun_moon) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py sun_moon to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'sun_moon',
  group: 'sun_moon',
  title: "The Sun and the Moon",
  subtitle: "A Korean folk tale",
  lang: 'en',
  cover: '🌙',
  color: '#ffe3a3',
  version: 1,
  music: 'korea',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "af_heart"
      },
      "mother": {
          "name": "Mother",
          "icon": "👩",
          "voice": "af_sarah"
      },
      "sister": {
          "name": "Sister",
          "icon": "👧",
          "voice": "af_sky"
      },
      "tiger": {
          "name": "Tiger",
          "icon": "🐯",
          "voice": "am_onyx"
      }
  },
  script: [
    {"who": "narrator", "text": "Once upon a time, a mother lived in a little house in the mountains with her two children, a big sister and a little brother.", "notes": [{"kind": "sound", "text": "wind in the mountains", "sfx": "wind"}]},
    {"who": "mother", "speed": 0.9, "text": "I will be back late tonight. Do not open the door to anyone. Be good!", "notes": [{"kind": "motivation", "text": "Mother: she worries, she must work"}, {"kind": "acting", "text": "warm, a finger raised on \"anyone\""}]},
    {"who": "narrator", "text": "On the way home, a hungry tiger stopped her on the path.", "notes": [{"kind": "sound", "text": "a low growl", "sfx": "growl"}]},
    {"who": "narrator", "text": "The tiger tricked her, and then he put on her clothes and went to the little house."},
    {"who": "tiger", "speed": 0.88, "text": "Children, open the door. Mother is home!", "notes": [{"kind": "sound", "text": "knock, knock", "sfx": "knock"}, {"kind": "acting", "text": "too sweet, a high fake voice"}, {"kind": "thought", "text": "Tiger: Open the door, open the door."}]},
    {"who": "sister", "text": "That is not Mother's voice! Show us your hand.", "notes": [{"kind": "motivation", "text": "Sister: she protects her brother"}, {"kind": "acting", "text": "brave, clear, not afraid"}]},
    {"who": "narrator", "text": "The tiger put his paw through the door. It was big and hairy! \"Mother's hand is soft!\" cried the sister. But the tiger rubbed flour on his paw, and the children opened the door."},
    {"who": "narrator", "text": "In the night, the sister saw the tiger's tail and she knew. Quietly, she and her brother slipped out and climbed up a tall tree by the well.", "notes": [{"kind": "acting", "text": "Narrator: whisper-quiet, each word careful"}]},
    {"who": "tiger", "text": "How did you climb up there?", "notes": [{"kind": "acting", "text": "angry, trying to be sweet again"}]},
    {"who": "sister", "text": "We put oil on our hands! Then it is easy.", "notes": [{"kind": "motivation", "text": "Sister: she tricks the tiger back"}, {"kind": "acting", "text": "playful, a tiny smile"}]},
    {"who": "narrator", "text": "The tiger tried and slipped, and slipped again. Then the sister said, \"Pray to heaven for a strong rope,\" and a strong rope came down.", "notes": [{"kind": "sound", "text": "a shimmer of magic", "sfx": "magic"}]},
    {"who": "narrator", "text": "The children prayed, and a strong rope came down. They climbed up and up, all the way to heaven. When the tiger prayed, his rope was rotten, and it snapped!"},
    {"who": "narrator", "speed": 0.88, "text": "The sister became the Moon, and the little brother became the Sun. And they watch over us from the sky, day and night.", "notes": [{"kind": "acting", "text": "Narrator: warm and slow, the story settles"}]}
  ]
});
