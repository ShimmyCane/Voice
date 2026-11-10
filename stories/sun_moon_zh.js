// The Sun and the Moon (sun_moon_zh) — Chinese. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (sun_moon.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py sun_moon_zh to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'sun_moon_zh',
  group: 'sun_moon',
  notesFrom: 'sun_moon',
  title: "太阳和月亮",
  subtitle: "韩国民间故事",
  lang: 'zh',
  cover: '🌙',
  color: '#ffe3a3',
  version: 1,
  music: 'korea',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "讲故事的人",
          "icon": "📖",
          "voice": "zf_xiaobei"
      },
      "mother": {
          "name": "妈妈",
          "icon": "👩",
          "voice": "zf_xiaoni"
      },
      "sister": {
          "name": "姐姐",
          "icon": "👧",
          "voice": "zf_xiaoyi"
      },
      "tiger": {
          "name": "老虎",
          "icon": "🐯",
          "voice": "zm_yunjian"
      }
  },
  script: [
    {"who": "narrator", "text": "从前，在山里的小房子里，住着一位妈妈和她的两个孩子，姐姐和弟弟。"},
    {"who": "mother", "speed": 0.86, "text": "我今晚会很晚回来。不管是谁，都不要开门。要乖乖的！"},
    {"who": "narrator", "text": "回家的路上，一只饥饿的老虎拦住了她。"},
    {"who": "narrator", "text": "老虎骗了她，然后穿上她的衣服，走到了小房子前。"},
    {"who": "tiger", "speed": 0.84, "text": "孩子们，开门啊。妈妈回来了！"},
    {"who": "sister", "text": "这不是妈妈的声音！把手伸出来给我们看看。"},
    {"who": "narrator", "text": "老虎把爪子伸进门缝。又大又毛茸茸的！“妈妈的手是软软的！”姐姐叫道。可是老虎在爪子上抹了面粉，孩子们就开了门。"},
    {"who": "narrator", "text": "夜里，姐姐看见了老虎的尾巴，她明白了。她和弟弟悄悄溜出去，爬上了井边一棵高高的大树。"},
    {"who": "tiger", "text": "你们是怎么爬上去的？"},
    {"who": "sister", "text": "我们在手上抹了油！这样就很容易啦。"},
    {"who": "narrator", "text": "老虎试了又滑，滑了又试。后来姐姐说：“向天空祈祷，求一根结实的绳子吧。”一根结实的绳子就垂了下来。"},
    {"who": "narrator", "text": "孩子们祈祷，一根结实的绳子垂了下来。他们往上爬啊爬，一直爬到了天上。老虎也祈祷，可是他的绳子是烂的，啪的一声断了！"},
    {"who": "narrator", "speed": 0.84, "text": "姐姐变成了月亮，弟弟变成了太阳。他们从天上日日夜夜守护着我们。"}
  ]
});
