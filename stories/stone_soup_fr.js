// Stone Soup (stone_soup_fr) — third language: fr. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (stone_soup.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py stone_soup_fr to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'stone_soup_fr',
  group: 'stone_soup',
  notesFrom: 'stone_soup',
  title: "La soupe au caillou",
  subtitle: "Un conte populaire",
  lang: 'fr',
  cover: '🍲',
  color: '#ffd9c2',
  version: 1,
  music: 'france',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Le conteur",
          "icon": "📖",
          "voice": "ff_siwis"
      },
      "traveller": {
          "name": "Le voyageur",
          "icon": "🧳",
          "voice": "ff_siwis"
      },
      "villager": {
          "name": "La villageoise",
          "icon": "🧑‍🌾",
          "voice": "ff_siwis"
      }
  },
  script: [
    {"who": "narrator", "text": "Un soir d'hiver, un voyageur affamé arriva dans un village. Il frappa à beaucoup de portes, mais personne n'avait de quoi partager."},
    {"who": "traveller", "text": "Ce n'est pas grave ! Je vais faire une soupe au caillou."},
    {"who": "narrator", "text": "Il posa une grande marmite sur le feu, la remplit d'eau et y laissa tomber un caillou rond et lisse."},
    {"who": "villager", "text": "De la soupe au caillou ? Qu'est-ce que c'est ?"},
    {"who": "traveller", "text": "C'est délicieux ! Il faut juste un peu de sel. Vous en avez ?"},
    {"who": "narrator", "text": "La villageoise courut chercher du sel. Puis une autre apporta des carottes, une autre des pommes de terre, une autre un oignon."},
    {"who": "traveller", "text": "Mmm ! Il ne manque plus qu'un peu d'orge, et peut-être un os."},
    {"who": "narrator", "text": "Bientôt, la marmite fut pleine de la plus merveilleuse des soupes, et son parfum se répandit dans toute la rue."},
    {"who": "narrator", "text": "Tout le monde s'assit ensemble. On mangea, on rit, et on chanta des chansons près du feu."},
    {"who": "villager", "text": "Votre caillou fait la meilleure soupe du monde !"},
    {"who": "traveller", "speed": 0.84, "text": "Ce n'est pas le caillou. C'est nous tous, qui partageons."},
    {"who": "narrator", "speed": 0.84, "text": "Il laissa le caillou en cadeau. Et le village n'oublia jamais que partager fait un festin avec presque rien."}
  ]
});
