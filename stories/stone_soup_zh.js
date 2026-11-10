// Stone Soup (stone_soup_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (stone_soup.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py stone_soup_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'stone_soup_zh',
  group: 'stone_soup',
  notesFrom: 'stone_soup',
  title: "石头汤",
  subtitle: "欧洲民间故事",
  lang: 'zh',
  cover: '🍲',
  color: '#ffd9c2',
  version: 1,
  music: 'france',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zm_yunyang"
      },
      "traveller": {
          "name": "旅行者",
          "icon": "🧳",
          "voice": "zm_yunxi"
      },
      "villager": {
          "name": "村民",
          "icon": "🧑‍🌾",
          "voice": "zf_xiaoni"
      }
  },
  script: [
    {"who": "narrator", "text": "一个寒冷的傍晚，一位饥饿的旅行者来到一个村子。他敲了很多户人家的门，可是没有人愿意分给他食物。"},
    {"who": "traveller", "text": "没关系！我来煮石头汤。"},
    {"who": "narrator", "text": "他在火上架起一口大锅，倒满水，放进一块光滑圆圆的石头。"},
    {"who": "villager", "text": "石头汤？那是什么？"},
    {"who": "traveller", "text": "好喝极了！只需要放一点点盐。你有盐吗？"},
    {"who": "narrator", "text": "村民跑去拿来了盐。接着又有人送来胡萝卜，有人送来土豆，还有人送来洋葱。"},
    {"who": "traveller", "text": "嗯！现在只差一点大麦，也许再加一根骨头。"},
    {"who": "narrator", "text": "不一会儿，锅里装满了最香的汤，香味飘遍了整条街。"},
    {"who": "narrator", "text": "大家坐在一起。他们吃着，笑着，围着火堆唱起歌来。"},
    {"who": "villager", "text": "你的石头煮出了世界上最好喝的汤！"},
    {"who": "traveller", "speed": 0.84, "text": "不是石头的功劳，是我们大家分享的功劳。"},
    {"who": "narrator", "speed": 0.84, "text": "他把石头留作礼物。村子里的人从此记住了：分享能让空空的锅变成一桌盛宴。"}
  ]
});
