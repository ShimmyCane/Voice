// The Emperor's New Clothes (emperor_clothes_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (emperor_clothes.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py emperor_clothes_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'emperor_clothes_zh',
  group: 'emperor_clothes',
  notesFrom: 'emperor_clothes',
  title: "皇帝的新装",
  subtitle: "出自安徒生，1837年",
  lang: 'zh',
  cover: '👑',
  color: '#efe2ff',
  version: 1,
  music: 'netherlands',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zm_yunyang"
      },
      "emperor": {
          "name": "皇帝",
          "icon": "👑",
          "voice": "zm_yunjian"
      },
      "swindler": {
          "name": "骗子",
          "icon": "🎭",
          "voice": "zm_yunxi"
      },
      "child": {
          "name": "小孩",
          "icon": "👧",
          "voice": "zf_xiaobei"
      }
  },
  script: [
    {"who": "narrator", "text": "很久以前，有一位皇帝，他最爱的就是新衣服。他把所有的钱都花在了衣服上。"},
    {"who": "narrator", "text": "有一天，两个骗子来到了城里。"},
    {"who": "swindler", "speed": 0.86, "text": "我们能织出世界上最美丽的布！可是只有聪明人才看得见，傻瓜是看不见的。"},
    {"who": "emperor", "speed": 0.86, "text": "太好了！这样我就能知道谁聪明，谁是傻瓜了！"},
    {"who": "narrator", "text": "骗子们假装在空的织布机上织布。皇帝派老大臣去看。大臣什么都没看见，一点儿也没有！"},
    {"who": "narrator", "text": "可是他不想显得愚蠢，就说：“真漂亮！”"},
    {"who": "narrator", "text": "皇帝也什么都没看见。“难道我是傻瓜吗？”他想，“我必须说它很漂亮！”"},
    {"who": "swindler", "speed": 0.86, "text": "陛下，现在请穿上您的新衣服吧。"},
    {"who": "narrator", "text": "于是，皇帝光着身子，走在盛大的游行队伍里。"},
    {"who": "narrator", "text": "人们高声喊道：“他的新衣服多漂亮啊！”谁也不想显得愚蠢。"},
    {"who": "child", "speed": 0.96, "text": "可是他什么也没穿呀！"},
    {"who": "narrator", "text": "人们开始窃窃私语，接着大家都笑了起来：“他什么也没穿！”"},
    {"who": "narrator", "speed": 0.86, "text": "皇帝打了个冷战。他知道他们是对的。可是他仍然昂着头，继续往前走。"},
    {"who": "narrator", "speed": 0.84, "text": "要说真话，即使别人都不肯说。"}
  ]
});
