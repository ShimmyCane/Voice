// The Monkey and the Crocodile (monkey_crocodile) — English. Written for Voice. Same lines, in the same order, as the other languages of this story.
// Edit here, then run tools/make_kokoro.py monkey_crocodile to remake its audio.
window.VOICE_STORIES = window.VOICE_STORIES || [];
window.VOICE_STORIES.push({
  id: 'monkey_crocodile',
  group: 'monkey_crocodile',
  title: "The Monkey and the Crocodile",
  subtitle: "From the Panchatantra, India",
  lang: 'en',
  cover: '🐒',
  color: '#ffd9c2',
  version: 1,
  music: 'india',
  kokoroVoices: ["cast"],
  cast: {
      "narrator": {
          "name": "Narrator",
          "icon": "📖",
          "voice": "bm_fable"
      },
      "monkey": {
          "name": "Monkey",
          "icon": "🐒",
          "voice": "am_puck"
      },
      "crocodile": {
          "name": "Crocodile",
          "icon": "🐊",
          "voice": "am_onyx"
      },
      "wife": {
          "name": "Crocodile's wife",
          "icon": "🐊",
          "voice": "af_nicole"
      }
  },
  script: [
    {"who": "narrator", "text": "A clever monkey lived in a big jamun tree beside a river.", "notes": [{"kind": "sound", "text": "a river flowing", "sfx": "waves"}]},
    {"who": "narrator", "text": "One day, a crocodile came swimming by, hungry and tired."},
    {"who": "monkey", "speed": 1.0, "text": "Hello, friend! Would you like some sweet jamun fruits?", "notes": [{"kind": "motivation", "text": "Monkey: he loves to share"}, {"kind": "acting", "text": "friendly, tossing fruit down"}, {"kind": "sound", "text": "fruit falling in the water", "sfx": "splash"}]},
    {"who": "narrator", "text": "The crocodile loved them. Every day he came back, and the two became good friends."},
    {"who": "narrator", "text": "One day he took some fruit home to his wife."},
    {"who": "wife", "text": "If the monkey eats such sweet fruit all day, his heart must be the sweetest in the world! Bring me his heart!", "notes": [{"kind": "motivation", "text": "Wife: greedy and spoiled"}, {"kind": "acting", "text": "sharp, demanding"}]},
    {"who": "narrator", "text": "The crocodile was sad, but he loved his wife. So the next day he said:"},
    {"who": "crocodile", "speed": 0.9, "text": "Friend, come to my house for a feast. Climb on my back.", "notes": [{"kind": "acting", "text": "too friendly, a little nervous"}]},
    {"who": "narrator", "text": "Halfway across the river, the crocodile could not keep the secret any longer.", "notes": [{"kind": "sound", "text": "water all around", "sfx": "waves"}]},
    {"who": "crocodile", "speed": 0.88, "text": "My wife wants to eat your heart.", "notes": [{"kind": "acting", "text": "ashamed, almost a whisper"}]},
    {"who": "monkey", "speed": 0.95, "text": "Oh, my friend! Why did you not tell me? I left my heart up in the jamun tree! Take me back, and I will fetch it.", "notes": [{"kind": "motivation", "text": "Monkey: he thinks fast to stay alive"}, {"kind": "acting", "text": "calm voice, racing mind"}, {"kind": "thought", "text": "Monkey: Stay calm. Think."}]},
    {"who": "narrator", "text": "The foolish crocodile swam back. The monkey leaped up into the tree, as quick as a flash.", "notes": [{"kind": "sound", "text": "a leap and rustling leaves", "sfx": "splash"}]},
    {"who": "monkey", "speed": 1.0, "text": "Silly crocodile! Nobody leaves their heart in a tree! Never trust a friend who tricks you.", "notes": [{"kind": "acting", "text": "laughing from the high branch"}]},
    {"who": "narrator", "speed": 0.88, "text": "The crocodile swam away, ashamed. Quick wits are stronger than strength.", "notes": [{"kind": "motivation", "text": "Narrator: the reason the story is told"}, {"kind": "acting", "text": "slow and wise"}]}
  ]
});
