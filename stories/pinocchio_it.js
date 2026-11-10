// Pinocchio and the Talking Cricket (pinocchio_it) — third language: it. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (pinocchio.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py pinocchio_it to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'pinocchio_it',
  group: 'pinocchio',
  notesFrom: 'pinocchio',
  title: "Pinocchio e il Grillo Parlante",
  subtitle: "Da Collodi, 1883",
  lang: 'it',
  cover: '🪵',
  color: '#ffe9a8',
  version: 1,
  music: 'italy',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Il narratore",
          "icon": "📖",
          "voice": "if_sara"
      },
      "geppetto": {
          "name": "Geppetto",
          "icon": "👴",
          "voice": "im_nicola"
      },
      "pinocchio": {
          "name": "Pinocchio",
          "icon": "🪵",
          "voice": "im_nicola"
      },
      "cricket": {
          "name": "Il Grillo",
          "icon": "🦗",
          "voice": "if_sara"
      }
  },
  script: [
    {"who": "narrator", "text": "Geppetto, un povero vecchio falegname, intagliò un burattino da un pezzo di legno e lo chiamò Pinocchio."},
    {"who": "narrator", "text": "E poi, per magia, il burattino aprì gli occhi. Cominciò a muoversi e a parlare!"},
    {"who": "geppetto", "speed": 0.86, "text": "Pinocchio, figlio mio, devi andare a scuola e imparare."},
    {"who": "pinocchio", "speed": 0.96, "text": "La scuola? No! Io voglio giocare e divertirmi tutto il giorno!"},
    {"who": "narrator", "text": "Allora una vocina molto piccola parlò. Era un piccolo grillo parlante."},
    {"who": "cricket", "speed": 0.86, "text": "Pinocchio, ascoltami. I bambini che non ascoltano i buoni consigli si cacciano sempre nei guai."},
    {"who": "pinocchio", "speed": 0.96, "text": "Non voglio i consigli di un grillo! Farò quello che mi pare!"},
    {"who": "narrator", "text": "E Pinocchio corse via a giocare. Presto si perse, e disse una bugia per uscire dai guai."},
    {"who": "narrator", "text": "E il suo naso di legno cominciò a crescere, sempre più lungo, sempre più lungo!"},
    {"who": "pinocchio", "speed": 0.91, "text": "Oh no! Il mio naso! Magari avessi ascoltato il grillo."},
    {"who": "cricket", "speed": 0.86, "text": "Sono qui, Pinocchio. Di' la verità, ascolta, e diventerai un bambino vero."},
    {"who": "narrator", "speed": 0.84, "text": "Pinocchio chiese scusa, e da quel giorno ascoltò la voce che gli diceva la verità."}
  ]
});
