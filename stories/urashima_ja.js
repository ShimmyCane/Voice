// Urashima Tarō and the Turtle (urashima_ja) — third language: ja. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (urashima.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py urashima_ja to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'urashima_ja',
  group: 'urashima',
  notesFrom: 'urashima',
  title: "浦島太郎",
  subtitle: "日本のむかしばなし",
  lang: 'ja',
  cover: '🌊',
  color: '#cfe3ff',
  version: 1,
  music: 'japan',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "はなし手",
          "icon": "📖",
          "voice": "jf_alpha"
      },
      "taro": {
          "name": "太郎",
          "icon": "👦",
          "voice": "jm_kumo"
      },
      "turtle": {
          "name": "かめ",
          "icon": "🐢",
          "voice": "jf_nezumi"
      },
      "princess": {
          "name": "乙姫さま",
          "icon": "👸",
          "voice": "jf_tebukuro"
      }
  },
  script: [
    {"who": "narrator", "text": "むかしむかし、海辺の漁村に、浦島太郎という心のやさしい青年が住んでいました。"},
    {"who": "narrator", "text": "ある日、太郎は浜辺で、子どもたちがかめをいじめているのを見かけました。"},
    {"who": "taro", "text": "やめなさい！やさしくしてあげて。かめを海にかえしてやろう。"},
    {"who": "narrator", "text": "子どもたちは逃げていき、太郎はかめをそっと海に運びました。"},
    {"who": "turtle", "speed": 0.82, "text": "たすけてくれてありがとう。海の底の竜宮城を見たくはありませんか。わたしの背中に乗ってください。"},
    {"who": "narrator", "text": "太郎はかめの背中に乗り、ふたりは波の下、深い海の底へ沈んでいきました。"},
    {"who": "narrator", "text": "竜宮城では、美しい乙姫さまが待っていました。"},
    {"who": "princess", "text": "ようこそ、太郎さん。どうぞ、いつまでもゆっくりしていってください。"},
    {"who": "narrator", "text": "太郎はおいしいごちそうを食べ、魚たちの踊りを見て、楽しい三日間をすごしました。"},
    {"who": "taro", "text": "ふるさとと、おかあさんがこいしくなりました。もう帰らなければ。"},
    {"who": "princess", "text": "それでは、この玉手箱をおもちください。けれど、けっして、けっして、あけてはいけませんよ。"},
    {"who": "narrator", "text": "太郎はかめに乗って村へ帰りました。けれど、村はすっかり変わっていて、だれも太郎を知りません。三百年もの時が流れていたのです！"},
    {"who": "narrator", "text": "ひとりぼっちで悲しくなった太郎は、浜辺にすわって玉手箱をあけました。白いけむりがもくもくと立ちのぼり、太郎はおじいさんになってしまいました。"},
    {"who": "narrator", "speed": 0.82, "text": "時間は大切なもの。今あるおうちを、大切にしましょうね。"}
  ]
});
