// The Tortoise and the Hare (tortoise_hare_au) — third language: au. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (tortoise_hare.js) through notesFrom.
// No Kokoro voice for this language: the page reads it with the iPad's own au voice.
// Edit here, then run tools/make_kokoro.py tortoise_hare_au to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'tortoise_hare_au',
  group: 'tortoise_hare',
  notesFrom: 'tortoise_hare',
  title: "The Tortoise and the Hare, Aussie style",
  subtitle: "Aesop's fable, told in the outback",
  lang: 'au',
  cover: '🐢',
  color: '#d7efc3',
  version: 1,
  music: 'australia',
  kokoroVoices: [],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖"
      },
      "hare": {
          "name": "Hare",
          "icon": "🐇"
      },
      "tortoise": {
          "name": "Tortoise",
          "icon": "🐢"
      },
      "owl": {
          "name": "Kookaburra",
          "icon": "🦉"
      }
  },
  script: [
    {"who": "narrator", "text": "Once upon a time, out in the bush, a hare and a tortoise lived beside the same long red dirt road."},
    {"who": "hare", "text": "I'm the fastest critter in the whole bush, mate! Nobody can beat me!"},
    {"who": "tortoise", "speed": 0.82, "text": "I'm slow, mate, but I never stop. Fancy a race?"},
    {"who": "hare", "text": "A race? With you? Ha ha ha! This'll be the easiest race ever, no worries!"},
    {"who": "owl", "text": "On your marks. Get set. Go!"},
    {"who": "narrator", "text": "Off they went! The hare zoomed away so fast that red dust flew up behind him."},
    {"who": "narrator", "text": "Soon the hare was so far ahead he couldn't even see the tortoise. \"Plenty of time,\" he thought. \"I'll have a little nap this arvo.\""},
    {"who": "narrator", "text": "He lay down under a gum tree, and soon he was fast asleep."},
    {"who": "narrator", "speed": 0.82, "text": "Step by step, the tortoise kept walking. He didn't look left. He didn't look right. He didn't stop."},
    {"who": "narrator", "text": "The sun was low when the hare woke up. He leapt up and ran as fast as he could. But it was too late!"},
    {"who": "narrator", "text": "The tortoise was already crossing the finish line, and all the animals were cheering."},
    {"who": "hare", "text": "How did you beat me, mate?"},
    {"who": "tortoise", "speed": 0.82, "text": "Slow and steady wins the race."},
    {"who": "narrator", "text": "From that day on, the hare never boasted again."}
  ]
});
