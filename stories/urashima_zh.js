// Urashima Tarō and the Turtle (urashima_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (urashima.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py urashima_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'urashima_zh',
  group: 'urashima',
  notesFrom: 'urashima',
  title: "浦岛太郎",
  subtitle: "日本民间故事",
  lang: 'zh',
  cover: '🌊',
  color: '#cfe3ff',
  version: 1,
  music: 'japan',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zm_yunyang"
      },
      "taro": {
          "name": "太郎",
          "icon": "👦",
          "voice": "zm_yunxi"
      },
      "turtle": {
          "name": "海龟",
          "icon": "🐢",
          "voice": "zm_yunjian"
      },
      "princess": {
          "name": "乙姬公主",
          "icon": "👸",
          "voice": "zf_xiaoni"
      }
  },
  script: [
    {"who": "narrator", "text": "很久很久以前，在海边的渔村里，住着一个善良的年轻人，名叫浦岛太郎。"},
    {"who": "narrator", "text": "有一天，他看见几个孩子在沙滩上欺负一只海龟。"},
    {"who": "taro", "text": "住手！请对它好一点，让海龟回到海里去吧。"},
    {"who": "narrator", "text": "孩子们跑开了，太郎把海龟轻轻地送进了水里。"},
    {"who": "turtle", "speed": 0.82, "text": "谢谢你救了我。你想去看看海底的龙宫吗？爬到我的背上来吧。"},
    {"who": "narrator", "text": "太郎爬上海龟的背，他们潜入深深的海底。"},
    {"who": "narrator", "text": "在龙宫里，他见到了美丽的乙姬公主。"},
    {"who": "princess", "text": "欢迎你，太郎。请你想住多久就住多久。"},
    {"who": "narrator", "text": "他吃了美味的食物，看鱼儿跳舞。快乐的三天过去了。"},
    {"who": "taro", "text": "我想念我的家和我的母亲。我该回去了。"},
    {"who": "princess", "text": "那么，请带上这个盒子。但是，千万千万不要打开它。"},
    {"who": "narrator", "text": "太郎骑着海龟回家。可是村子变了，没有人认识他。三百年过去了！"},
    {"who": "narrator", "text": "太郎又伤心又孤单，坐在沙滩上，打开了盒子。一团白烟升起，太郎变成了一个白发苍苍的老人。"},
    {"who": "narrator", "speed": 0.82, "text": "时间很宝贵。要珍惜今天拥有的家。"}
  ]
});
