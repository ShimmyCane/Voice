// Stone Soup (stone_soup) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py stone_soup to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'stone_soup',
  group: 'stone_soup',
  title: "Stone Soup",
  subtitle: "A European folk tale",
  lang: 'en',
  cover: '🍲',
  color: '#ffd9c2',
  version: 1,
  music: 'france',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "bm_fable"
      },
      "traveller": {
          "name": "Traveller",
          "icon": "🧳",
          "voice": "am_michael"
      },
      "villager": {
          "name": "Villager",
          "icon": "🧑‍🌾",
          "voice": "af_bella"
      }
  },
  script: [
    {"who": "narrator", "text": "One cold evening, a hungry traveller came to a village. He knocked on many doors, but nobody had food to share.", "notes": [{"kind": "sound", "text": "knock, knock", "sfx": "knock"}]},
    {"who": "traveller", "text": "No problem! I will make stone soup.", "notes": [{"kind": "motivation", "text": "Traveller: he does not beg, he invites"}, {"kind": "acting", "text": "cheerful, as if it is a great idea"}]},
    {"who": "narrator", "text": "He put a big pot over a fire, filled it with water, and dropped in a smooth, round stone.", "notes": [{"kind": "sound", "text": "a pot starting to bubble", "sfx": "bubbles"}]},
    {"who": "villager", "text": "Stone soup? What is that?", "notes": [{"kind": "motivation", "text": "Villager: curious, a little suspicious"}]},
    {"who": "traveller", "text": "It is delicious! It only needs a little salt. Do you have some?", "notes": [{"kind": "acting", "text": "friendly, just one small favour"}]},
    {"who": "narrator", "text": "The villager ran and brought some salt. Then another came with carrots, another with potatoes, another with an onion.", "notes": [{"kind": "sound", "text": "spoons clinking", "sfx": "clink"}]},
    {"who": "traveller", "text": "Mmm! Now it only needs a little barley, and maybe a bone.", "notes": [{"kind": "acting", "text": "tasting from a big spoon, eyes closed"}]},
    {"who": "narrator", "text": "Soon the pot was full of the most wonderful soup, and the smell floated all down the street."},
    {"who": "narrator", "text": "Everyone sat down together. They ate, they laughed, and they sang songs by the fire.", "notes": [{"kind": "acting", "text": "Narrator: warm, like a party"}]},
    {"who": "villager", "text": "Your stone makes the best soup in the world!", "notes": [{"kind": "acting", "text": "delighted, a little sleepy"}]},
    {"who": "traveller", "speed": 0.88, "text": "It is not the stone. It is all of us, sharing.", "notes": [{"kind": "motivation", "text": "Traveller: this is what he wanted to teach"}, {"kind": "acting", "text": "gentle, looking around the circle"}]},
    {"who": "narrator", "speed": 0.88, "text": "He left the stone as a gift. And the village never forgot that sharing makes a feast out of nothing.", "notes": [{"kind": "acting", "text": "Narrator: slow and fond"}]}
  ]
});
