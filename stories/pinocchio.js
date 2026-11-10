// Pinocchio and the Talking Cricket (pinocchio) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py pinocchio to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'pinocchio',
  group: 'pinocchio',
  title: "Pinocchio and the Talking Cricket",
  subtitle: "From Collodi, 1883",
  lang: 'en',
  cover: '🪵',
  color: '#ffe9a8',
  version: 1,
  music: 'italy',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "bm_george"
      },
      "geppetto": {
          "name": "Geppetto",
          "icon": "👴",
          "voice": "bm_daniel"
      },
      "pinocchio": {
          "name": "Pinocchio",
          "icon": "🪵",
          "voice": "am_puck"
      },
      "cricket": {
          "name": "Cricket",
          "icon": "🦗",
          "voice": "af_kore"
      }
  },
  script: [
    {"who": "narrator", "text": "Geppetto, a poor old woodcarver, carved a little puppet out of a piece of wood, and he called him Pinocchio.", "notes": [{"kind": "sound", "text": "carving wood, tap tap", "sfx": "knock"}]},
    {"who": "narrator", "text": "And then, by magic, the puppet opened his eyes. He began to move, and to talk!", "notes": [{"kind": "sound", "text": "a spark of magic", "sfx": "magic"}]},
    {"who": "geppetto", "speed": 0.9, "text": "Pinocchio, my boy, you must go to school and learn.", "notes": [{"kind": "motivation", "text": "Geppetto: he wants a better life for his boy"}, {"kind": "acting", "text": "tender, a little tired"}]},
    {"who": "pinocchio", "speed": 1.0, "text": "School? No! I want to play and have fun all day long!", "notes": [{"kind": "motivation", "text": "Pinocchio: everything is new and exciting"}, {"kind": "acting", "text": "bouncy, always moving"}]},
    {"who": "narrator", "text": "Then a very small voice spoke. It was a little talking cricket.", "notes": [{"kind": "sound", "text": "a cricket chirping", "sfx": "chirp"}]},
    {"who": "cricket", "speed": 0.9, "text": "Pinocchio, listen to me. Children who do not listen to good advice always get into trouble.", "notes": [{"kind": "motivation", "text": "Cricket: he truly wants to help"}, {"kind": "acting", "text": "tiny, wise, calm"}]},
    {"who": "pinocchio", "speed": 1.0, "text": "I do not want advice from a cricket! I will do whatever I like!", "notes": [{"kind": "acting", "text": "cross, stamps his foot"}]},
    {"who": "narrator", "text": "And Pinocchio ran off to play. Soon he was lost, and he told a lie to get out of trouble.", "notes": [{"kind": "acting", "text": "Narrator: a little teasing"}]},
    {"who": "narrator", "text": "And his wooden nose began to grow, longer and longer and longer!", "notes": [{"kind": "sound", "text": "magic growing", "sfx": "magic"}]},
    {"who": "pinocchio", "speed": 0.95, "text": "Oh no! My nose! I wish I had listened to the cricket.", "notes": [{"kind": "acting", "text": "fright, then shame"}]},
    {"who": "cricket", "speed": 0.9, "text": "I am here, Pinocchio. Tell the truth, and listen, and you will be a real boy.", "notes": [{"kind": "motivation", "text": "Cricket: he forgives at once"}, {"kind": "acting", "text": "kind, like a friend"}]},
    {"who": "narrator", "speed": 0.88, "text": "Pinocchio said sorry, and from that day he listened to the voice that told him the truth.", "notes": [{"kind": "motivation", "text": "Narrator: the reason the story is told"}, {"kind": "acting", "text": "slow and fond"}]}
  ]
});
