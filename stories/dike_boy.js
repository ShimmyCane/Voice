// The Boy and the Dike (dike_boy) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py dike_boy to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'dike_boy',
  group: 'dike_boy',
  title: "The Boy and the Dike",
  subtitle: "A story from the Netherlands",
  lang: 'en',
  cover: '🌷',
  color: '#cdeee0',
  version: 1,
  music: 'netherlands',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "bm_lewis"
      },
      "peter": {
          "name": "Peter",
          "icon": "👦",
          "voice": "am_eric"
      },
      "mother": {
          "name": "Mother",
          "icon": "👩",
          "voice": "af_nicole"
      }
  },
  script: [
    {"who": "narrator", "text": "Long ago in the Netherlands, a little town lived safely behind a great wall of earth called a dike. The dike kept the sea out.", "notes": [{"kind": "sound", "text": "sea wind", "sfx": "wind"}]},
    {"who": "mother", "speed": 0.9, "text": "Peter, take this cake to the old man across the dike. And come straight home before dark.", "notes": [{"kind": "motivation", "text": "Mother: she trusts him with a grown-up job"}, {"kind": "acting", "text": "warm, a small worried look"}]},
    {"who": "narrator", "text": "Peter walked along the dike, whistling. The sun was setting.", "notes": [{"kind": "sound", "text": "footsteps and wind", "sfx": "steps"}]},
    {"who": "narrator", "text": "On the way home he heard a tiny sound: drip, drip, drip. There was a small hole in the dike, and water was trickling through!", "notes": [{"kind": "sound", "text": "a drip", "sfx": "drip"}, {"kind": "acting", "text": "Narrator: very quiet, then very worried"}]},
    {"who": "peter", "text": "If the hole grows, the sea will flood the whole town!", "notes": [{"kind": "motivation", "text": "Peter: he sees what will happen"}, {"kind": "acting", "text": "fast, scared, thinking hard"}]},
    {"who": "narrator", "text": "He looked around. Nobody was there. So Peter pushed his finger into the hole."},
    {"who": "narrator", "text": "The trickle stopped. Peter smiled. But then it got dark, and cold, and the wind began to blow.", "notes": [{"kind": "sound", "text": "wind rising", "sfx": "wind"}]},
    {"who": "peter", "text": "Help! Is anybody there? Help!", "notes": [{"kind": "acting", "text": "a small, tired voice, but he does not give up"}]},
    {"who": "narrator", "speed": 0.88, "text": "Hours went by. His finger hurt. His arm shook. But Peter did not move.", "notes": [{"kind": "acting", "text": "Narrator: slow, each sentence heavier"}]},
    {"who": "narrator", "text": "At dawn, a man walking by heard a voice, and came running.", "notes": [{"kind": "sound", "text": "a church bell", "sfx": "bell"}]},
    {"who": "narrator", "text": "Soon many men came to mend the dike. The whole town cheered, \"Peter saved us!\"", "notes": [{"kind": "sound", "text": "a happy crowd", "sfx": "cheer"}]},
    {"who": "narrator", "speed": 0.88, "text": "One small, brave child had saved the whole town. Small courage can do big things.", "notes": [{"kind": "motivation", "text": "Narrator: the reason the story is told"}, {"kind": "acting", "text": "slow and wise"}]}
  ]
});
