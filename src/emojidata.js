const emojidata = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id: 4,
    emoji: "😍",
    name: "Smiling Face With Heart-Eyes",
    meaning:
      "You are completely smitten and infatuated with someone or something. Conveys passionate feelings of love, adoration, or gratitude."
  },
  {
    id: 5,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A face showing a thoughtful expression. Can be used to show thinking, wondering, or deep contemplation."
  },
  {
    id: 6,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A face with a single tear rolling down. Indicates sadness or grief."
  },
  {
    id: 7,
    emoji: "😎",
    name: "Smiling Face With Sunglasses",
    meaning:
      "A smiling face wearing dark sunglasses. Usually used to convey a sense of coolness."
  },
  {
    id: 8,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A face with a party hat and blowout. Used to express celebration or excitement."
  },
  {
    id: 9,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A face with closed eyes and a snoring bubble. Represents sleep or tiredness."
  },
  {
    id: 10,
    emoji: "🤯",
    name: "Exploding Head",
    meaning:
      "A face with the top of the head exploding. Used to show shock, awe, or surprise."
  },
  {
    id: 11,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "A face with open hands, as if giving a hug. Conveys affection and warmth."
  },
  {
    id: 12,
    emoji: "👍",
    name: "Thumbs Up",
    meaning:
      "A hand with the thumb raised. Indicates approval or agreement."
  },
  {
    id: 13,
    emoji: "👀",
    name: "Eyes",
    meaning:
      "A pair of eyes, looking to one side. Often used to indicate attention to something or to express curiosity."
  },
  {
    id: 14,
    emoji: "👏",
    name: "Clapping Hands",
    meaning:
      "Two hands clapping. Used to show applause or appreciation."
  },
  {
    id: 15,
    emoji: "💖",
    name: "Sparkling Heart",
    meaning:
      "A heart with sparkles around it. Conveys feelings of love and affection."
  },
  {
    id: 16,
    emoji: "🎉",
    name: "Party Popper",
    meaning:
      "A party popper, used to celebrate special occasions or achievements."
  },
  {
    id: 17,
    emoji: "🤮",
    name: "Face Vomiting",
    meaning:
      "A face vomiting green, indicating disgust or sickness."
  },
  {
    id: 18,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning:
      "A face with a halo above it, representing innocence or good behavior."
  },
  {
    id: 19,
    emoji: "😈",
    name: "Smiling Face with Horns",
    meaning:
      "A face with devil horns, typically used to convey mischievousness or naughtiness."
  },
  {
    id: 20,
    emoji: "🤡",
    name: "Clown Face",
    meaning:
      "A clown face, often used to convey silliness, foolishness, or humor."
  },
  {
    id: 21,
    emoji: "😜",
    name: "Winking Face with Tongue",
    meaning:
      "A playful face with a wink and a tongue sticking out. Conveys a sense of fun and humor."
  },
  {
    id: 22,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "A face with glasses and buck teeth. Often used to represent nerdiness or intelligence."
  },
  {
    id: 23,
    emoji: "😱",
    name: "Face Screaming in Fear",
    meaning:
      "A face with wide eyes and mouth open, screaming. Indicates extreme fear, shock, or horror."
  },
  {
    id: 24,
    emoji: "🙈",
    name: "See-No-Evil Monkey",
    meaning:
      "A monkey covering its eyes, used to convey embarrassment, surprise, or avoidance of something unpleasant."
  },
  {
    id: 25,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A red face with a frown and angry eyes. Represents strong anger or annoyance."
  },
  {
    id: 26,
    emoji: "😋",
    name: "Face Savoring Food",
    meaning:
      "A face with a tongue sticking out, licking its lips. Indicates delicious food or a good meal."
  },
  {
    id: 27,
    emoji: "😝",
    name: "Squinting Face with Tongue",
    meaning:
      "A face with tightly closed eyes and a tongue sticking out. Conveys a playful or joking mood."
  },
  {
    id: 28,
    emoji: "💀",
    name: "Skull",
    meaning:
      "A human skull. Often used to represent death, danger, or something frightening."
  },
  {
    id: 29,
    emoji: "👑",
    name: "Crown",
    meaning:
      "A golden crown. Used to represent royalty, luxury, or excellence."
  },
  {
    id: 30,
    emoji: "🔥",
    name: "Fire",
    meaning:
      "A flame, used to represent heat, passion, or something exciting."
  },
  {
    id: 31,
    emoji: "🌟",
    name: "Glowing Star",
    meaning:
      "A glowing star. Used to represent excellence, magic, or something special."
  },
  {
    id: 32,
    emoji: "💧",
    name: "Droplet",
    meaning:
      "A single droplet of water. Often used to represent water, rain, or sweat."
  },
  {
    id: 33,
    emoji: "⚡",
    name: "High Voltage",
    meaning:
      "A bolt of lightning. Represents electricity, power, or sudden events."
  },
  {
    id: 34,
    emoji: "🌈",
    name: "Rainbow",
    meaning:
      "A rainbow. Often used to represent happiness, diversity, or LGBTQ pride."
  },
  {
    id: 35,
    emoji: "❄️",
    name: "Snowflake",
    meaning:
      "A snowflake. Used to represent winter, cold, or something unique and delicate."
  },
  {
    id: 36,
    emoji: "🍕",
    name: "Pizza",
    meaning:
      "A slice of pizza. Often used to represent food, hunger, or something delicious."
  },
  {
    id: 37,
    emoji: "🚀",
    name: "Rocket",
    meaning:
      "A rocket. Used to represent space, speed, or something taking off."
  },
  {
    id: 38,
    emoji: "🏆",
    name: "Trophy",
    meaning:
      "A trophy. Represents victory, achievement, or success."
  },
  {
    id: 39,
    emoji: "🎸",
    name: "Guitar",
    meaning:
      "An electric guitar. Often used to represent music, rock and roll, or live performances."
  },
  {
    id: 40,
    emoji: "🎯",
    name: "Direct Hit",
    meaning:
      "A dart hitting the center of a dartboard. Represents precision, accuracy, or achieving a goal."
  },
  {
    id: 41,
    emoji: "🌺",
    name: "Hibiscus",
    meaning:
      "A bright pink hibiscus flower. Represents beauty, tropical regions, or a vacation destination."
  },
  {
    id: 42,
    emoji: "🌍",
    name: "Earth Globe Europe-Africa",
    meaning:
      "A globe showing Europe and Africa. Represents international affairs, travel, or global issues."
  },
  {
    id: 43,
    emoji: "🍔",
    name: "Hamburger",
    meaning:
      "A classic hamburger with lettuce and cheese on a sesame bun. Represents fast food, dining out, or hunger."
  },
  {
    id: 44,
    emoji: "🎭",
    name: "Performing Arts",
    meaning:
      "A mask often used in theater, representing performing arts or acting."
  },
  {
    id: 45,
    emoji: "🏖️",
    name: "Beach with Umbrella",
    meaning:
      "A beach scene with a beach umbrella. Represents vacations, relaxation, or summer holidays."
  },
  {
    id: 46,
    emoji: "⌚",
    name: "Watch",
    meaning:
      "A classic wristwatch with a leather strap. Represents time, punctuality, or style."
  },
  {
    id: 47,
    emoji: "🚲",
    name: "Bicycle",
    meaning:
      "A classic bicycle, often used to represent cycling, exercise, or eco-friendly transportation."
  },
  {
    id: 48,
    emoji: "📚",
    name: "Books",
    meaning:
      "A stack of books. Represents learning, studying, or knowledge."
  },
  {
    id: 49,
    emoji: "🎨",
    name: "Artist Palette",
    meaning:
      "A palette with multiple colors of paint and a paintbrush. Represents art, creativity, or painting."
  },
  {
    id: 50,
    emoji: "⚽",
    name: "Soccer Ball",
    meaning:
      "A soccer ball. Represents soccer, sports, or athletics."
  },
  {
    id: 51,
    emoji: "🎤",
    name: "Microphone",
    meaning:
      "A classic microphone. Represents singing, music, or public speaking."
  },
  {
    id: 52,
    emoji: "📱",
    name: "Mobile Phone",
    meaning:
      "A modern smartphone. Represents technology, communication, or staying connected."
  },
  {
    id: 53,
    emoji: "🎧",
    name: "Headphone",
    meaning:
      "A pair of headphones. Represents music, audio listening, or entertainment."
  },
  {
    id: 54,
    emoji: "🖥️",
    name: "Desktop Computer",
    meaning:
      "A desktop computer monitor with keyboard. Represents technology, work, or computing."
  },
  {
    id: 55,
    emoji: "🕶️",
    name: "Sunglasses",
    meaning:
      "A pair of sunglasses. Represents sun protection, coolness, or fashion."
  },
  {
    id: 56,
    emoji: "🎮",
    name: "Video Game",
    meaning:
      "A video game controller. Represents gaming, entertainment, or leisure activities."
  },
  {
    id: 57,
    emoji: "📷",
    name: "Camera",
    meaning:
      "A classic camera. Represents photography, capturing moments, or memories."
  },
  {
    id: 58,
    emoji: "✈️",
    name: "Airplane",
    meaning:
      "An airplane. Represents travel, aviation, or flying."
  },
  {
    id: 59,
    emoji: "🎥",
    name: "Movie Camera",
    meaning:
      "A movie camera. Represents filmmaking, movies, or cinema."
  },
  {
    id: 60,
    emoji: "🍦",
    name: "Ice Cream",
    meaning:
      "A swirl of soft-serve ice cream. Represents desserts, summer treats, or enjoyment."
  },
  {
    id: 61,
    emoji: "🍩",
    name: "Doughnut",
    meaning:
      "A chocolate-glazed doughnut with sprinkles. Represents sweet treats, indulgence, or snacking."
  },
  {
    id: 62,
    emoji: "🎈",
    name: "Balloon",
    meaning:
      "A colorful balloon. Represents celebrations, parties, or joyous occasions."
  },
  {
    id: 63,
    emoji: "🎁",
    name: "Wrapped Gift",
    meaning:
      "A present wrapped with a ribbon. Represents gifts, holidays, or special occasions."
  },
  {
    id: 64,
    emoji: "⛱️",
    name: "Umbrella on Ground",
    meaning:
      "An umbrella on the ground, often used to provide shade or protection from rain."
  },
  {
    id: 65,
    emoji: "🚢",
    name: "Ship",
    meaning:
      "A ship sailing on water. Represents maritime travel, transportation, or sailing."
  },
  {
    id: 66,
    emoji: "🌋",
    name: "Volcano",
    meaning:
      "A volcano erupting. Represents natural disasters, geology, or power."
  },
  {
    id: 67,
    emoji: "🦄",
    name: "Unicorn",
    meaning:
      "A mythical unicorn with a colorful mane and horn. Represents fantasy, imagination, or uniqueness."
  },
  {
    id: 68,
    emoji: "🌠",
    name: "Shooting Star",
    meaning:
      "A shooting star with a trailing tail. Represents wishes, dreams, or rare occurrences."
  },
  {
    id: 69,
    emoji: "🔑",
    name: "Key",
    meaning:
      "A key. Represents access, security, or unlocking something."
  },
  {
    id: 70,
    emoji: "💡",
    name: "Light Bulb",
    meaning:
      "A light bulb. Represents ideas, innovation, or creativity."
  },
];


export default emojidata