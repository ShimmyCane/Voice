// The Ant and the Grasshopper (ant_grasshopper_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (ant_grasshopper.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py ant_grasshopper_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'ant_grasshopper_zh',
  group: 'ant_grasshopper',
  notesFrom: 'ant_grasshopper',
  title: "蚂蚁和蚱蜢",
  subtitle: "伊索寓言",
  lang: 'zh',
  cover: '🐜',
  color: '#d8e8c8',
  version: 1,
  music: 'spain',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zf_xiaoxiao"
      },
      "ant": {
          "name": "蚂蚁",
          "icon": "🐜",
          "voice": "zf_xiaoni"
      },
      "grasshopper": {
          "name": "蚱蜢",
          "icon": "🦗",
          "voice": "zm_yunxi"
      }
  },
  script: [
    {"who": "narrator", "text": "整个夏天，一只小蚂蚁在田里辛勤地劳动，把麦粒搬回她的窝里。"},
    {"who": "narrator", "text": "一只蚱蜢坐在旁边的阳光里，拉着小提琴，唱着快乐的歌。"},
    {"who": "grasshopper", "text": "蚂蚁，你为什么这么辛苦？来和我一起唱歌吧！今天天气真好。"},
    {"who": "ant", "speed": 0.91, "text": "我在为冬天储存食物。你也应该这样做。"},
    {"who": "grasshopper", "text": "冬天还早着呢！我们玩吧！"},
    {"who": "narrator", "text": "可是夏天结束了。叶子落了，寒风吹起，雪开始盖满田野。"},
    {"who": "narrator", "text": "蚂蚁坐在温暖的窝里，有很多食物。蚱蜢既没有食物，也没有房子。"},
    {"who": "grasshopper", "speed": 0.86, "text": "蚂蚁，求求你，我又冷又饿。你能帮帮我吗？"},
    {"who": "ant", "speed": 0.84, "text": "你整个夏天都在玩。现在冬天到了……"},
    {"who": "ant", "speed": 0.86, "text": "不过，进来吧。火边还有位子。明年夏天，我们一起干活。"},
    {"who": "narrator", "text": "蚱蜢喝了热汤，在火边为蚂蚁拉起小提琴。他们都很开心。"},
    {"who": "narrator", "speed": 0.84, "text": "现在好好劳动，以后才能好好休息，还要时时帮助有需要的人。"}
  ]
});
