// The Monkey and the Crocodile (monkey_crocodile_hi) — third language: hi. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Director's notes come from the English file (monkey_crocodile.js) through notesFrom.
// Edit here, then run tools/make_kokoro.py monkey_crocodile_hi to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'monkey_crocodile_hi',
  group: 'monkey_crocodile',
  notesFrom: 'monkey_crocodile',
  title: "बंदर और मगरमच्छ",
  subtitle: "पंचतंत्र की कहानी",
  lang: 'hi',
  cover: '🐒',
  color: '#ffd9c2',
  version: 1,
  music: 'india',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "कहानीकार",
          "icon": "📖",
          "voice": "hm_omega"
      },
      "monkey": {
          "name": "बंदर",
          "icon": "🐒",
          "voice": "hm_psi"
      },
      "crocodile": {
          "name": "मगरमच्छ",
          "icon": "🐊",
          "voice": "hm_omega"
      },
      "wife": {
          "name": "मगरमच्छ की पत्नी",
          "icon": "🐊",
          "voice": "hf_alpha"
      }
  },
  script: [
    {"who": "narrator", "text": "एक नदी के किनारे जामुन के बड़े पेड़ पर एक चतुर बंदर रहता था।"},
    {"who": "narrator", "text": "एक दिन एक मगरमच्छ तैरता हुआ आया। वह भूखा और थका हुआ था।"},
    {"who": "monkey", "speed": 0.96, "text": "नमस्ते दोस्त! क्या तुम मीठे जामुन खाओगे?"},
    {"who": "narrator", "text": "मगरमच्छ को जामुन बहुत पसंद आए। वह रोज़ आता और दोनों पक्के दोस्त बन गए।"},
    {"who": "narrator", "text": "एक दिन वह कुछ जामुन अपनी पत्नी के लिए ले गया।"},
    {"who": "wife", "text": "अगर बंदर दिन भर इतने मीठे जामुन खाता है, तो उसका दिल दुनिया में सबसे मीठा होगा! उसका दिल मेरे लिए ले आओ!"},
    {"who": "narrator", "text": "मगरमच्छ दुखी था, पर वह अपनी पत्नी से प्यार करता था। अगले दिन उसने कहा:"},
    {"who": "crocodile", "speed": 0.86, "text": "दोस्त, मेरे घर दावत पर चलो। मेरी पीठ पर बैठ जाओ।"},
    {"who": "narrator", "text": "नदी के बीच में पहुँचकर मगरमच्छ से रहा नहीं गया।"},
    {"who": "crocodile", "speed": 0.84, "text": "मेरी पत्नी तुम्हारा दिल खाना चाहती है।"},
    {"who": "monkey", "speed": 0.91, "text": "अरे दोस्त! तुमने पहले क्यों नहीं बताया? मैं तो अपना दिल पेड़ पर ही छोड़ आया हूँ! मुझे वापस ले चलो, मैं उसे ले आता हूँ।"},
    {"who": "narrator", "text": "बेवकूफ़ मगरमच्छ वापस तैर गया। बंदर बिजली की तरह उछलकर पेड़ पर चढ़ गया।"},
    {"who": "monkey", "speed": 0.96, "text": "बेवकूफ़ मगरमच्छ! कोई भी अपना दिल पेड़ पर नहीं छोड़ता! जो दोस्त धोखा दे, उस पर कभी भरोसा मत करो।"},
    {"who": "narrator", "speed": 0.84, "text": "मगरमच्छ शर्मिंदा होकर तैर गया। चतुराई, ताकत से बड़ी होती है।"}
  ]
});
