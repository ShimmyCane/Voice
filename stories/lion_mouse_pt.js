// The Lion and the Mouse (lion_mouse_pt) — third language: pt. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (lion_mouse.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py lion_mouse_pt to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'lion_mouse_pt',
  group: 'lion_mouse',
  notesFrom: 'lion_mouse',
  title: "O leão e o ratinho",
  subtitle: "Fábula de Esopo",
  lang: 'pt',
  cover: '🦁',
  color: '#ffe3a3',
  version: 1,
  music: 'brazil',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "A narradora",
          "icon": "📖",
          "voice": "pf_dora"
      },
      "lion": {
          "name": "O leão",
          "icon": "🦁",
          "voice": "pm_alex"
      },
      "mouse": {
          "name": "O ratinho",
          "icon": "🐭",
          "voice": "pf_dora"
      }
  },
  script: [
    {"who": "narrator", "text": "Um grande leão dormia ao sol quente, debaixo de uma árvore na floresta."},
    {"who": "narrator", "text": "Um ratinho muito pequeno correu pelo nariz dele e o acordou!"},
    {"who": "lion", "speed": 0.82, "text": "Quem ousa acordar o rei da floresta?"},
    {"who": "mouse", "speed": 0.96, "text": "Por favor, me perdoe, grande leão! Me deixe ir. Um dia eu vou ajudar você."},
    {"who": "lion", "speed": 0.84, "text": "Você? Me ajudar? Ha ha ha! Você é tão pequeno! Mas pode ir. Estou de bom humor."},
    {"who": "narrator", "text": "Pouco depois, uns caçadores chegaram e prenderam o leão numa rede forte."},
    {"who": "lion", "speed": 0.86, "text": "Rooar! Socorro! Eu não consigo sair!"},
    {"who": "narrator", "text": "O ratinho ouviu o rugido e veio correndo o mais rápido que suas perninhas conseguiam."},
    {"who": "mouse", "speed": 0.96, "text": "Não tenha medo, grande leão. Eu vou ajudar você!"},
    {"who": "narrator", "text": "Nhac, nhac, nhac. O ratinho roeu as cordas, uma por uma, até a rede se abrir."},
    {"who": "lion", "speed": 0.82, "text": "Pequeno amigo, você tinha razão. Obrigado."},
    {"who": "mouse", "speed": 0.91, "text": "Agora você vê: até o menor amigo pode ajudar."},
    {"who": "narrator", "speed": 0.84, "text": "Nenhuma bondade é desperdiçada."}
  ]
});
