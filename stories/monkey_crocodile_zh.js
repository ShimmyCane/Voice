// The Monkey and the Crocodile (monkey_crocodile_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (monkey_crocodile.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py monkey_crocodile_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'monkey_crocodile_zh',
  group: 'monkey_crocodile',
  notesFrom: 'monkey_crocodile',
  title: "猴子和鳄鱼",
  subtitle: "出自印度《五卷书》",
  lang: 'zh',
  cover: '🐒',
  color: '#ffd9c2',
  version: 1,
  music: 'india',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zm_yunyang"
      },
      "monkey": {
          "name": "猴子",
          "icon": "🐒",
          "voice": "zm_yunxia"
      },
      "crocodile": {
          "name": "鳄鱼",
          "icon": "🐊",
          "voice": "zm_yunjian"
      },
      "wife": {
          "name": "鳄鱼太太",
          "icon": "🐊",
          "voice": "zf_xiaoyi"
      }
  },
  script: [
    {"who": "narrator", "text": "河边一棵大蒲桃树上，住着一只聪明的猴子。"},
    {"who": "narrator", "text": "有一天，一条又饿又累的鳄鱼游了过来。"},
    {"who": "monkey", "speed": 0.96, "text": "你好，朋友！你想吃甜甜的蒲桃吗？"},
    {"who": "narrator", "text": "鳄鱼觉得好吃极了。他每天都来，他们成了好朋友。"},
    {"who": "narrator", "text": "有一天，他带了一些果子回家给太太。"},
    {"who": "wife", "text": "如果猴子整天吃这么甜的果子，他的心一定是世界上最甜的！把他的心带给我！"},
    {"who": "narrator", "text": "鳄鱼很难过，可是他爱他的太太。第二天，他说："},
    {"who": "crocodile", "speed": 0.86, "text": "朋友，到我家来吃一顿大餐吧。爬到我背上来。"},
    {"who": "narrator", "text": "游到河中间，鳄鱼再也守不住这个秘密了。"},
    {"who": "crocodile", "speed": 0.84, "text": "我太太想吃你的心。"},
    {"who": "monkey", "speed": 0.91, "text": "哎呀，我的朋友！你为什么不早说呢？我把心留在蒲桃树上了！带我回去，我去把它拿来。"},
    {"who": "narrator", "text": "傻鳄鱼游了回去。猴子像闪电一样，一下子跳上了树。"},
    {"who": "monkey", "speed": 0.96, "text": "傻鳄鱼！谁会把心留在树上呢！永远不要相信欺骗你的朋友。"},
    {"who": "narrator", "speed": 0.84, "text": "鳄鱼羞愧地游走了。聪明的头脑，比力气更强大。"}
  ]
});
