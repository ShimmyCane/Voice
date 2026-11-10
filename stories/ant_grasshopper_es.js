// The Ant and the Grasshopper (ant_grasshopper_es) — third language: es. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (ant_grasshopper.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py ant_grasshopper_es to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'ant_grasshopper_es',
  group: 'ant_grasshopper',
  notesFrom: 'ant_grasshopper',
  title: "La hormiga y la cigarra",
  subtitle: "Fábula de Esopo",
  lang: 'es',
  cover: '🐜',
  color: '#d8e8c8',
  version: 1,
  music: 'spain',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "La narradora",
          "icon": "📖",
          "voice": "ef_dora"
      },
      "ant": {
          "name": "La hormiga",
          "icon": "🐜",
          "voice": "ef_dora"
      },
      "grasshopper": {
          "name": "La cigarra",
          "icon": "🦗",
          "voice": "em_alex"
      }
  },
  script: [
    {"who": "narrator", "text": "Todo el verano, una hormiguita trabajó duro en el campo, llevando granos de trigo a su hormiguero."},
    {"who": "narrator", "text": "Una cigarra estaba cerca, al sol, tocando el violín y cantando canciones alegres."},
    {"who": "grasshopper", "text": "¿Para qué trabajas tanto, hormiga? ¡Ven a cantar conmigo! Es un día precioso."},
    {"who": "ant", "speed": 0.91, "text": "Estoy guardando comida para el invierno. Tú también deberías."},
    {"who": "grasshopper", "text": "¡El invierno queda muy lejos! ¡Vamos a jugar!"},
    {"who": "narrator", "text": "Pero el verano terminó. Las hojas cayeron, sopló el viento frío y la nieve empezó a cubrir los campos."},
    {"who": "narrator", "text": "La hormiga estaba calentita en su hormiguero, con mucha comida. La cigarra no tenía comida ni casa."},
    {"who": "grasshopper", "speed": 0.86, "text": "Por favor, hormiga, tengo mucho frío y mucha hambre. ¿Puedes ayudarme?"},
    {"who": "ant", "speed": 0.84, "text": "Tú jugaste todo el verano. Ahora es invierno..."},
    {"who": "ant", "speed": 0.86, "text": "Pero pasa. Hay sitio junto al fuego. El próximo verano, trabajaremos juntos."},
    {"who": "narrator", "text": "La cigarra tomó sopa caliente y tocó el violín para la hormiga junto al fuego. Los dos estaban felices."},
    {"who": "narrator", "speed": 0.84, "text": "Trabaja ahora, descansa después, y comparte siempre con quien lo necesita."}
  ]
});
