// The Boy and the Dike (dike_boy_nl) — third language: nl. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (dike_boy.js) through notesFrom.
// No Kokoro voice for this language: the page reads it with the iPad's own nl voice.
// Edit here, then run tools/make_kokoro.py dike_boy_nl to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'dike_boy_nl',
  group: 'dike_boy',
  notesFrom: 'dike_boy',
  title: "De jongen en de dijk",
  subtitle: "Een verhaal uit Nederland",
  lang: 'nl',
  cover: '🌷',
  color: '#cdeee0',
  version: 1,
  music: 'netherlands',
  kokoroVoices: [],
  cast: {
      "narrator": {
          "name": "Verteller",
          "icon": "📖"
      },
      "peter": {
          "name": "Peter",
          "icon": "👦"
      },
      "mother": {
          "name": "Moeder",
          "icon": "👩"
      }
  },
  script: [
    {"who": "narrator", "text": "Lang geleden, in Nederland, lag een stadje veilig achter een hoge aarden wal, de dijk. De dijk hield de zee buiten."},
    {"who": "mother", "speed": 0.86, "text": "Peter, breng deze taart naar de oude man aan de overkant van de dijk. En kom voor donker meteen naar huis."},
    {"who": "narrator", "text": "Peter liep fluitend over de dijk. De zon ging onder."},
    {"who": "narrator", "text": "Op de terugweg hoorde hij een klein geluidje: druppel, druppel, druppel. Er zat een gaatje in de dijk, en er sijpelde water doorheen!"},
    {"who": "peter", "text": "Als het gat groter wordt, overstroomt de zee het hele stadje!"},
    {"who": "narrator", "text": "Hij keek om zich heen. Er was niemand. Daarom stak Peter zijn vinger in het gat."},
    {"who": "narrator", "text": "Het sijpelen hield op. Peter glimlachte. Maar toen werd het donker en koud, en de wind stak op."},
    {"who": "peter", "text": "Help! Is daar iemand? Help!"},
    {"who": "narrator", "speed": 0.84, "text": "De uren gingen voorbij. Zijn vinger deed pijn. Zijn arm trilde. Maar Peter bewoog niet."},
    {"who": "narrator", "text": "Bij het ochtendgloren hoorde een man een stem en kwam aanrennen."},
    {"who": "narrator", "text": "Al snel kwamen er veel mannen om de dijk te herstellen. Het hele stadje juichte: \"Peter heeft ons gered!\""},
    {"who": "narrator", "speed": 0.84, "text": "Eén klein, moedig kind had het hele stadje gered. Kleine moed kan grote dingen doen."}
  ]
});
