// The Sun and the Moon (sun_moon_ko) — third language: ko. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (sun_moon.js) through notesFrom.
// No Kokoro voice for this language: the page reads it with the iPad's own ko voice.
// Edit here, then run tools/make_kokoro.py sun_moon_ko to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'sun_moon_ko',
  group: 'sun_moon',
  notesFrom: 'sun_moon',
  title: "해님 달님",
  subtitle: "한국 전래 동화",
  lang: 'ko',
  cover: '🌙',
  color: '#ffe3a3',
  version: 1,
  music: 'korea',
  kokoroVoices: [],
  cast: {
      "narrator": {
          "name": "이야기꾼",
          "icon": "📖"
      },
      "mother": {
          "name": "엄마",
          "icon": "👩"
      },
      "sister": {
          "name": "누나",
          "icon": "👧"
      },
      "tiger": {
          "name": "호랑이",
          "icon": "🐯"
      }
  },
  script: [
    {"who": "narrator", "text": "옛날 옛적에, 깊은 산속 작은 집에 엄마와 오누이가 살았어요."},
    {"who": "mother", "speed": 0.86, "text": "엄마는 오늘 늦게 올 거야. 누가 와도 절대 문을 열어 주면 안 돼. 알았지?"},
    {"who": "narrator", "text": "엄마가 돌아오는 길에, 배고픈 호랑이가 길을 막았어요."},
    {"who": "narrator", "text": "호랑이는 엄마를 속이고, 엄마 옷을 입고 오두막으로 갔어요."},
    {"who": "tiger", "speed": 0.84, "text": "얘들아, 문 열어라. 엄마 왔다!"},
    {"who": "sister", "text": "엄마 목소리가 아닌데! 손을 내밀어 보세요."},
    {"who": "narrator", "text": "호랑이가 문틈으로 손을 내밀었어요. 크고 털이 숭숭 났어요! “엄마 손은 보드라운데!” 하고 누나가 말했어요. 그러자 호랑이는 손에 밀가루를 묻혔고, 아이들은 문을 열어 주었지요."},
    {"who": "narrator", "text": "한밤중에 누나는 호랑이의 꼬리를 보고 알아챘어요. 누나와 동생은 살금살금 빠져나와 우물가의 높은 나무 위로 올라갔어요."},
    {"who": "tiger", "text": "너희들 어떻게 올라갔니?"},
    {"who": "sister", "text": "손에 참기름을 바르고 올라왔지요!"},
    {"who": "narrator", "text": "호랑이는 미끄러지고 또 미끄러졌어요. 그러다 누나가 “하늘에 빌어 보세요. 튼튼한 동아줄을 내려 달라고요.” 하고 말했어요."},
    {"who": "narrator", "text": "아이들이 빌자 튼튼한 동아줄이 내려왔어요. 오누이는 하늘까지 올라갔지요. 호랑이가 빌었더니 썩은 동아줄이 내려와서, 뚝 끊어지고 말았어요!"},
    {"who": "narrator", "speed": 0.84, "text": "누나는 달님이 되고, 동생은 해님이 되어, 밤낮으로 우리를 지켜 주고 있답니다."}
  ]
});
