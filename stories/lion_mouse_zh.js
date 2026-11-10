// The Lion and the Mouse (lion_mouse_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (lion_mouse.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py lion_mouse_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'lion_mouse_zh',
  group: 'lion_mouse',
  notesFrom: 'lion_mouse',
  title: "狮子和老鼠",
  subtitle: "伊索寓言",
  lang: 'zh',
  cover: '🦁',
  color: '#ffe3a3',
  version: 1,
  music: 'brazil',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zf_xiaoxiao"
      },
      "lion": {
          "name": "狮子",
          "icon": "🦁",
          "voice": "zm_yunjian"
      },
      "mouse": {
          "name": "老鼠",
          "icon": "🐭",
          "voice": "zf_xiaobei"
      }
  },
  script: [
    {"who": "narrator", "text": "一头大狮子在丛林里的一棵树下，晒着热辣辣的太阳睡觉。"},
    {"who": "narrator", "text": "一只小老鼠从他的鼻子上跑过去，把他吵醒了！"},
    {"who": "lion", "speed": 0.82, "text": "谁敢吵醒森林之王？"},
    {"who": "mouse", "speed": 0.96, "text": "请原谅我，伟大的狮子！放了我吧。有一天，我会帮助你的。"},
    {"who": "lion", "speed": 0.84, "text": "你？帮我？哈哈哈！你这么小！不过，走吧，我今天心情好。"},
    {"who": "narrator", "text": "不久以后，一些猎人来了，用一张结实的网捉住了狮子。"},
    {"who": "lion", "speed": 0.86, "text": "吼！救命！我出不来了！"},
    {"who": "narrator", "text": "小老鼠听见了吼声，用他的小短腿拼命地跑了过来。"},
    {"who": "mouse", "speed": 0.96, "text": "别怕，伟大的狮子。我来帮你！"},
    {"who": "narrator", "text": "咬啊，咬啊，咬啊。小老鼠一根一根地咬断绳子，直到网松开了。"},
    {"who": "lion", "speed": 0.82, "text": "小朋友，你说得对。谢谢你。"},
    {"who": "mouse", "speed": 0.91, "text": "现在你明白了吧：再小的朋友，也能帮上忙。"},
    {"who": "narrator", "speed": 0.84, "text": "没有一份善意是白费的。"}
  ]
});
