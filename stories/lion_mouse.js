// The Lion and the Mouse (lion_mouse) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py lion_mouse to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'lion_mouse',
  group: 'lion_mouse',
  title: "The Lion and the Mouse",
  subtitle: "Aesop's fable",
  lang: 'en',
  cover: '🦁',
  color: '#ffe3a3',
  version: 1,
  music: 'brazil',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "bf_emma"
      },
      "lion": {
          "name": "Lion",
          "icon": "🦁",
          "voice": "am_onyx"
      },
      "mouse": {
          "name": "Mouse",
          "icon": "🐭",
          "voice": "af_sky"
      }
  },
  script: [
    {"who": "narrator", "text": "A big lion was sleeping in the hot sun, under a tree in the jungle.", "notes": [{"kind": "sound", "text": "jungle birds", "sfx": "birds"}]},
    {"who": "narrator", "text": "A tiny mouse ran across his nose, and woke him up!", "notes": [{"kind": "acting", "text": "Narrator: a quick, light touch"}]},
    {"who": "lion", "speed": 0.85, "text": "Who dares to wake the king of the jungle?", "notes": [{"kind": "sound", "text": "a big roar", "sfx": "roar"}, {"kind": "motivation", "text": "Lion: proud, and hungry"}, {"kind": "acting", "text": "deep, slow, thunder in the voice"}]},
    {"who": "mouse", "speed": 1.0, "text": "Please forgive me, great Lion! Let me go. One day, I will help you.", "notes": [{"kind": "motivation", "text": "Mouse: terrified, but honest"}, {"kind": "acting", "text": "high, fast, trembling"}]},
    {"who": "lion", "speed": 0.88, "text": "You? Help me? Ha ha ha! You are so small! But go. I am in a good mood.", "notes": [{"kind": "acting", "text": "a big, rolling laugh"}]},
    {"who": "narrator", "text": "Soon after, some hunters came and caught the lion in a strong net.", "notes": [{"kind": "sound", "text": "a rope net closing", "sfx": "crunch"}]},
    {"who": "lion", "speed": 0.9, "text": "Roar! Help! I cannot get out!", "notes": [{"kind": "sound", "text": "a roar across the jungle", "sfx": "roar"}, {"kind": "acting", "text": "angry first, then scared"}]},
    {"who": "narrator", "text": "The little mouse heard the roar, and he came running as fast as his tiny legs could go.", "notes": [{"kind": "sound", "text": "tiny quick feet", "sfx": "steps"}]},
    {"who": "mouse", "speed": 1.0, "text": "Do not be afraid, great Lion. I will help you!", "notes": [{"kind": "motivation", "text": "Mouse: he keeps his promise"}, {"kind": "acting", "text": "brave, small but sure"}]},
    {"who": "narrator", "text": "Nibble, nibble, nibble. The mouse chewed through the ropes, one by one, until the net fell open.", "notes": [{"kind": "sound", "text": "nibbling", "sfx": "chirp"}]},
    {"who": "lion", "speed": 0.85, "text": "Little friend, you were right. Thank you.", "notes": [{"kind": "motivation", "text": "Lion: he understands at last"}, {"kind": "acting", "text": "soft, humble, the big voice gentle"}]},
    {"who": "mouse", "speed": 0.95, "text": "Now you see: even the smallest friend can help.", "notes": [{"kind": "acting", "text": "warm, a little proud"}]},
    {"who": "narrator", "speed": 0.88, "text": "No kindness is ever wasted.", "notes": [{"kind": "motivation", "text": "Narrator: the reason the story is told"}, {"kind": "acting", "text": "slow and wise"}]}
  ]
});
