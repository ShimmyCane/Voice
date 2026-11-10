// The Tortoise and the Hare (tortoise_hare) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py tortoise_hare to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'tortoise_hare',
  group: 'tortoise_hare',
  title: "The Tortoise and the Hare",
  subtitle: "Aesop's fable",
  lang: 'en',
  cover: '🐢',
  color: '#d7efc3',
  version: 1,
  music: 'australia',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "bf_emma"
      },
      "hare": {
          "name": "Hare",
          "icon": "🐇",
          "voice": "am_puck"
      },
      "tortoise": {
          "name": "Tortoise",
          "icon": "🐢",
          "voice": "bm_lewis"
      },
      "owl": {
          "name": "Owl",
          "icon": "🦉",
          "voice": "bf_alice"
      }
  },
  script: [
    {"who": "narrator", "text": "Once upon a time, a hare and a tortoise lived beside the same long road.", "notes": [{"kind": "sound", "text": "birds in the morning", "sfx": "birds"}]},
    {"who": "hare", "text": "I am the fastest animal in the whole forest! Nobody can beat me!", "notes": [{"kind": "motivation", "text": "Hare: he loves being admired"}, {"kind": "acting", "text": "loud, boastful, chest out"}]},
    {"who": "tortoise", "speed": 0.85, "text": "I am slow, but I never stop. Shall we have a race?", "notes": [{"kind": "motivation", "text": "Tortoise: calm and sure of himself"}, {"kind": "acting", "text": "slow and warm, a little smile"}]},
    {"who": "hare", "text": "A race? With you? Ha ha ha! This will be the easiest race ever!", "notes": [{"kind": "acting", "text": "laughs out loud, wipes his eyes"}]},
    {"who": "owl", "text": "On your marks. Get set. Go!", "notes": [{"kind": "sound", "text": "a starting whistle", "sfx": "whistle"}]},
    {"who": "narrator", "text": "Off they went! The hare zoomed away so fast that the dust flew up behind him.", "notes": [{"kind": "sound", "text": "quick feet", "sfx": "steps"}, {"kind": "acting", "text": "Narrator: fast and bright"}]},
    {"who": "narrator", "text": "Soon the hare was so far ahead that he could not even see the tortoise. \"I have plenty of time,\" he thought. \"I will have a little nap.\"", "notes": [{"kind": "thought", "text": "Hare: I could win this with my eyes shut."}]},
    {"who": "narrator", "text": "He lay down under a tree, and soon he was fast asleep.", "notes": [{"kind": "sound", "text": "snoring", "sfx": "snore"}]},
    {"who": "narrator", "speed": 0.85, "text": "Step by step, the tortoise kept walking. He did not look left. He did not look right. He did not stop.", "notes": [{"kind": "sound", "text": "slow steady steps", "sfx": "steps"}, {"kind": "acting", "text": "Narrator: slow, each sentence one step"}]},
    {"who": "narrator", "text": "The sun was low when the hare woke up. He jumped up and ran as fast as he could. But it was too late!", "notes": [{"kind": "acting", "text": "Narrator: sudden and breathless"}]},
    {"who": "narrator", "text": "The tortoise was already crossing the finish line, and all the animals were cheering.", "notes": [{"kind": "sound", "text": "a happy crowd", "sfx": "cheer"}]},
    {"who": "hare", "text": "How did you beat me?", "notes": [{"kind": "acting", "text": "out of breath, shocked"}]},
    {"who": "tortoise", "speed": 0.85, "text": "Slow and steady wins the race.", "notes": [{"kind": "motivation", "text": "Tortoise: no pride, just kindness"}, {"kind": "acting", "text": "gentle, like a lesson shared"}]},
    {"who": "narrator", "text": "From that day on, the hare never boasted again.", "notes": [{"kind": "acting", "text": "Narrator: warm, the story closes"}]}
  ]
});
