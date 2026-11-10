// Pinocchio and the Talking Cricket (pinocchio_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (pinocchio.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py pinocchio_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'pinocchio_zh',
  group: 'pinocchio',
  notesFrom: 'pinocchio',
  title: "匹诺曹和会说话的蟋蟀",
  subtitle: "出自科洛迪，1883年",
  lang: 'zh',
  cover: '🪵',
  color: '#ffe9a8',
  version: 1,
  music: 'italy',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zm_yunyang"
      },
      "geppetto": {
          "name": "杰佩托",
          "icon": "👴",
          "voice": "zm_yunjian"
      },
      "pinocchio": {
          "name": "匹诺曹",
          "icon": "🪵",
          "voice": "zm_yunxia"
      },
      "cricket": {
          "name": "蟋蟀",
          "icon": "🦗",
          "voice": "zf_xiaobei"
      }
  },
  script: [
    {"who": "narrator", "text": "穷苦的老木匠杰佩托用一块木头雕了一个小木偶，给他起名叫匹诺曹。"},
    {"who": "narrator", "text": "忽然，凭着魔法，木偶睁开了眼睛。他动起来了，还会说话了！"},
    {"who": "geppetto", "speed": 0.86, "text": "匹诺曹，我的孩子，你要去上学，好好学习。"},
    {"who": "pinocchio", "speed": 0.96, "text": "上学？不要！我想整天玩，整天开心！"},
    {"who": "narrator", "text": "这时，一个非常小的声音说话了。那是一只会说话的小蟋蟀。"},
    {"who": "cricket", "speed": 0.86, "text": "匹诺曹，听我说。不听好劝告的孩子，总会惹上麻烦。"},
    {"who": "pinocchio", "speed": 0.96, "text": "我才不要蟋蟀的劝告！我想做什么就做什么！"},
    {"who": "narrator", "text": "匹诺曹跑去玩了。很快他迷了路，还说了一个谎想逃脱麻烦。"},
    {"who": "narrator", "text": "他的木头鼻子开始变长，越来越长，越来越长！"},
    {"who": "pinocchio", "speed": 0.91, "text": "哎呀！我的鼻子！要是我听了蟋蟀的话就好了。"},
    {"who": "cricket", "speed": 0.86, "text": "我在这里，匹诺曹。说实话，听劝告，你就会变成真正的男孩。"},
    {"who": "narrator", "speed": 0.84, "text": "匹诺曹说了对不起，从那天起，他听从那个告诉他真话的声音。"}
  ]
});
