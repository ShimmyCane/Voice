// The Boy and the Dike (dike_boy_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (dike_boy.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py dike_boy_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'dike_boy_zh',
  group: 'dike_boy',
  notesFrom: 'dike_boy',
  title: "堵住堤坝的男孩",
  subtitle: "荷兰的故事",
  lang: 'zh',
  cover: '🌷',
  color: '#cdeee0',
  version: 1,
  music: 'netherlands',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zf_xiaoxiao"
      },
      "peter": {
          "name": "彼得",
          "icon": "👦",
          "voice": "zm_yunxia"
      },
      "mother": {
          "name": "妈妈",
          "icon": "👩",
          "voice": "zf_xiaoyi"
      }
  },
  script: [
    {"who": "narrator", "text": "很久以前，在荷兰，有一座小城镇安全地躲在一道巨大的泥土墙后面。这道墙叫做堤坝，它把大海挡在外面。"},
    {"who": "mother", "speed": 0.86, "text": "彼得，把这块蛋糕送给堤坝对面的老爷爷。天黑以前要直接回家。"},
    {"who": "narrator", "text": "彼得吹着口哨，沿着堤坝走。太阳正在落山。"},
    {"who": "narrator", "text": "回家的路上，他听见一个很小的声音：滴答、滴答、滴答。堤坝上有一个小洞，水正从洞里渗出来！"},
    {"who": "peter", "text": "如果这个洞变大，大海就会淹没整个小镇！"},
    {"who": "narrator", "text": "他看看四周，一个人也没有。于是彼得把手指伸进了那个洞里。"},
    {"who": "narrator", "text": "渗水停住了。彼得笑了。可是天渐渐黑了，变冷了，风也刮了起来。"},
    {"who": "peter", "text": "救命！有人吗？救命啊！"},
    {"who": "narrator", "speed": 0.84, "text": "一个又一个小时过去了。他的手指疼了，手臂发抖了。可是彼得一动也不动。"},
    {"who": "narrator", "text": "天亮的时候，一个路过的人听见有声音，跑了过来。"},
    {"who": "narrator", "text": "很快，许多人赶来修补堤坝。全镇的人欢呼：“彼得救了我们！”"},
    {"who": "narrator", "speed": 0.84, "text": "一个小小的勇敢孩子，救了整个小镇。小小的勇气，可以做成大大的事情。"}
  ]
});
