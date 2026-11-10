// The Tortoise and the Hare (tortoise_hare_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (tortoise_hare.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py tortoise_hare_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'tortoise_hare_zh',
  group: 'tortoise_hare',
  notesFrom: 'tortoise_hare',
  title: "龟兔赛跑",
  subtitle: "伊索寓言",
  lang: 'zh',
  cover: '🐢',
  color: '#d7efc3',
  version: 1,
  music: 'australia',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zf_xiaoxiao"
      },
      "hare": {
          "name": "兔子",
          "icon": "🐇",
          "voice": "zm_yunxia"
      },
      "tortoise": {
          "name": "乌龟",
          "icon": "🐢",
          "voice": "zm_yunjian"
      },
      "owl": {
          "name": "猫头鹰",
          "icon": "🦉",
          "voice": "zf_xiaoyi"
      }
  },
  script: [
    {"who": "narrator", "text": "从前，有一只兔子和一只乌龟，住在同一条长长的路边。"},
    {"who": "hare", "text": "我是整个森林里跑得最快的！谁也比不过我！"},
    {"who": "tortoise", "speed": 0.82, "text": "我走得慢，可是我从不停下来。我们来比赛好不好？"},
    {"who": "hare", "text": "和你比赛？哈哈哈！这是最容易的比赛了！"},
    {"who": "owl", "text": "各就各位，预备，跑！"},
    {"who": "narrator", "text": "他们出发了！兔子飞快地跑走，身后扬起一片尘土。"},
    {"who": "narrator", "text": "很快，兔子遥遥领先，连乌龟的影子都看不见了。“时间多得很，”他想，“我先睡一小觉。”"},
    {"who": "narrator", "text": "他躺在一棵树下，很快就呼呼大睡了。"},
    {"who": "narrator", "speed": 0.82, "text": "乌龟一步一步地往前走。他不看左边，不看右边，也不停下来。"},
    {"who": "narrator", "text": "太阳快要下山了，兔子才醒来。他跳起来，拼命地跑。可是已经来不及了！"},
    {"who": "narrator", "text": "乌龟已经跑过了终点线，所有的动物都在欢呼。"},
    {"who": "hare", "text": "你怎么能赢我呢？"},
    {"who": "tortoise", "speed": 0.82, "text": "慢慢地、稳稳地走，才能赢得比赛。"},
    {"who": "narrator", "text": "从那天起，兔子再也不吹牛了。"}
  ]
});
