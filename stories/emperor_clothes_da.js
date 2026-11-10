// The Emperor's New Clothes (emperor_clothes_da) — third language: da. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (emperor_clothes.js) through notesFrom.
// No Kokoro voice for this language: the page reads it with the iPad's own da voice.
// Edit here, then run tools/make_kokoro.py emperor_clothes_da to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'emperor_clothes_da',
  group: 'emperor_clothes',
  notesFrom: 'emperor_clothes',
  title: "Kejserens nye klæder",
  subtitle: "Af H.C. Andersen, 1837",
  lang: 'da',
  cover: '👑',
  color: '#efe2ff',
  version: 1,
  music: 'netherlands',
  kokoroVoices: [],
  cast: {
      "narrator": {
          "name": "Fortæller",
          "icon": "📖"
      },
      "emperor": {
          "name": "Kejseren",
          "icon": "👑"
      },
      "swindler": {
          "name": "Svindleren",
          "icon": "🎭"
      },
      "child": {
          "name": "Barnet",
          "icon": "👧"
      }
  },
  script: [
    {"who": "narrator", "text": "For mange år siden var der en kejser, som elskede nye klæder mere end alt andet. Han brugte alle sine penge på dem."},
    {"who": "narrator", "text": "En dag kom to svindlere til byen."},
    {"who": "swindler", "speed": 0.86, "text": "Vi væver det smukkeste stof i hele verden! Men kun kloge mennesker kan se det. Tåber kan ikke."},
    {"who": "emperor", "speed": 0.86, "text": "Vidunderligt! Så kan jeg se, hvem der er klog, og hvem der er en tåbe!"},
    {"who": "narrator", "text": "Svindlerne lod, som om de vævede på tomme væve. Kejseren sendte sin gamle minister for at se. Ministeren så ingenting, slet ingenting!"},
    {"who": "narrator", "text": "Men han ville ikke se dum ud, så han sagde: \"Det er smukt!\""},
    {"who": "narrator", "text": "Kejseren så heller ingenting. \"Er jeg en tåbe?\" tænkte han. \"Jeg må sige, at det er smukt!\""},
    {"who": "swindler", "speed": 0.86, "text": "Nu, Deres Majestæt, tag venligst de nye klæder på."},
    {"who": "narrator", "text": "Og så gik kejseren i den store optog uden et eneste klædningsstykke på."},
    {"who": "narrator", "text": "Og folk råbte: \"Hvor er hans nye klæder smukke!\" Ingen ville se dumme ud."},
    {"who": "child", "speed": 0.96, "text": "Men han har jo ikke noget på!"},
    {"who": "narrator", "text": "Folk begyndte at hviske, og så lo alle: \"Han har ikke noget på!\""},
    {"who": "narrator", "speed": 0.86, "text": "Kejseren fik kuldegysninger. Han vidste, at de havde ret. Men han løftede hovedet og gik videre."},
    {"who": "narrator", "speed": 0.84, "text": "Sig det, der er sandt, også når alle andre lader være."}
  ]
});
