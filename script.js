/* =====================================================
   ANGEL DIARY QUIZZES
   Psychology-inspired K-pop personality quizzes
===================================================== */


/* =====================================================
   MONETAG
===================================================== */

/*
   OPTIONAL:

   When you receive your Monetag Direct Link,
   paste it between the quotation marks.

   Example:

   const MONETAG_DIRECT_LINK = "https://example.com/...";

   The website works without it.
*/

const MONETAG_DIRECT_LINK = "";


/* =====================================================
   QUIZ DATA
===================================================== */

const quizzes = {


    /* =================================================
       01 ENHYPEN HUSBAND
    ================================================= */

    "enhypen-husband": {

        group: "ENHYPEN",

        title: "Which ENHYPEN Member Is Your Husband?",

        subtitle:
            "Forget your bias for five minutes. Answer honestly and let your personality choose.",

        intro:
            "This quiz focuses on communication style, emotional needs, social energy, conflict style and relationship preferences.",

        image: "images/Enhypen.jpg",

        questions: [

            {
                question:
                    "When you like someone, what do you naturally want?",

                options: [

                    {
                        text: "Consistency. I need to know where I stand.",
                        scores: { jungwon: 3, jay: 2 }
                    },

                    {
                        text: "Someone who shows care through actions.",
                        scores: { jay: 3, heeseung: 2 }
                    },

                    {
                        text: "A best-friend feeling with lots of affection.",
                        scores: { jake: 3, sunoo: 2 }
                    },

                    {
                        text: "Quiet chemistry. I don't need constant talking.",
                        scores: { sunghoon: 3, jungwon: 1 }
                    },

                    {
                        text: "Someone who can match my playful energy.",
                        scores: { sunoo: 3, niki: 2 }
                    },

                    {
                        text: "Someone who challenges me and keeps things exciting.",
                        scores: { niki: 3, jay: 1 }
                    },

                    {
                        text: "Deep conversations that actually mean something.",
                        scores: { heeseung: 3, jungwon: 2 }
                    }

                ]
            },


            {
                question:
                    "You're upset with your partner. What do you want from them?",

                options: [

                    {
                        text: "A calm conversation until we understand each other.",
                        scores: { jungwon: 3, heeseung: 2 }
                    },

                    {
                        text: "A practical solution. Talking forever won't fix it.",
                        scores: { jay: 3, jungwon: 2 }
                    },

                    {
                        text: "Reassurance and warmth.",
                        scores: { jake: 3, sunoo: 2 }
                    },

                    {
                        text: "Give me a little space, then come back.",
                        scores: { sunghoon: 3, niki: 2 }
                    },

                    {
                        text: "Make me laugh and break the tension.",
                        scores: { sunoo: 3, jake: 2 }
                    },

                    {
                        text: "Be direct. I hate guessing games.",
                        scores: { niki: 3, jay: 2 }
                    },

                    {
                        text: "Actually listen to what I am trying to say.",
                        scores: { heeseung: 3, jungwon: 2 }
                    }

                ]
            },


            {
                question:
                    "Which relationship sounds healthiest to you?",

                options: [

                    {
                        text: "Stable, calm and emotionally secure.",
                        scores: { jungwon: 3 }
                    },

                    {
                        text: "Loyal, ambitious and dependable.",
                        scores: { jay: 3 }
                    },

                    {
                        text: "Romantic but also genuinely best friends.",
                        scores: { jake: 3 }
                    },

                    {
                        text: "Private, elegant and low-drama.",
                        scores: { sunghoon: 3 }
                    },

                    {
                        text: "Affectionate, expressive and fun.",
                        scores: { sunoo: 3 }
                    },

                    {
                        text: "Passionate, adventurous and never boring.",
                        scores: { niki: 3 }
                    },

                    {
                        text: "Emotionally deep and intellectually connected.",
                        scores: { heeseung: 3 }
                    }

                ]
            },


            {
                question:
                    "Your biggest relationship green flag is:",

                options: [

                    {
                        text: "Emotional maturity.",
                        scores: { jungwon: 3, heeseung: 2 }
                    },

                    {
                        text: "Reliability.",
                        scores: { jay: 3, jungwon: 2 }
                    },

                    {
                        text: "Warmth.",
                        scores: { jake: 3, sunoo: 2 }
                    },

                    {
                        text: "Self-control.",
                        scores: { sunghoon: 3 }
                    },

                    {
                        text: "Emotional openness.",
                        scores: { sunoo: 3 }
                    },

                    {
                        text: "Confidence.",
                        scores: { niki: 3, jay: 2 }
                    },

                    {
                        text: "Curiosity and intelligence.",
                        scores: { heeseung: 3 }
                    }

                ]
            },


            {
                question:
                    "Choose your ideal date.",

                options: [

                    {
                        text: "Coffee, walking and talking for hours.",
                        scores: { jungwon: 3, heeseung: 2 }
                    },

                    {
                        text: "Dinner somewhere beautiful.",
                        scores: { jay: 3, sunghoon: 2 }
                    },

                    {
                        text: "A spontaneous day out.",
                        scores: { jake: 3, niki: 2 }
                    },

                    {
                        text: "A quiet winter evening.",
                        scores: { sunghoon: 3 }
                    },

                    {
                        text: "Cute food, games and laughing.",
                        scores: { sunoo: 3, jake: 2 }
                    },

                    {
                        text: "Concert, activity or adventure.",
                        scores: { niki: 3 }
                    },

                    {
                        text: "Music, books and deep conversation.",
                        scores: { heeseung: 3 }
                    }

                ]
            }

        ],

        results: {

            jungwon: {
                name: "JUNGWON",
                image: "images/Jungwon.jpg",
                description:
                    "You seem to need emotional steadiness more than dramatic chemistry. You value consistency, communication and someone who doesn't make you decode every little thing. Your strongest match is the calm-and-secure dynamic."
            },

            jay: {
                name: "JAY",
                image: "images/Jay.jpg",
                description:
                    "You lean toward reliability, directness and effort. You probably notice what people DO more than what they promise. You need someone who can be dependable without becoming emotionally unavailable."
            },

            jake: {
                name: "JAKE",
                image: "images/Jake.jpg",
                description:
                    "You appear to value warmth and friendship inside romance. A relationship that feels cold or overly formal would probably drain you. You want affection, laughter and genuine emotional closeness."
            },

            sunghoon: {
                name: "SUNGHOON",
                image: "images/Sunghoon.jpg",
                description:
                    "You seem comfortable with quieter chemistry. You don't necessarily need constant reassurance and may actually prefer someone composed, private and emotionally controlled."
            },

            sunoo: {
                name: "SUNOO",
                image: "images/Sunoo.jpg",
                description:
                    "You value emotional expression and fun. You probably want a partner who actually reacts, communicates and makes the relationship feel alive rather than leaving everything unsaid."
            },

            niki: {
                name: "NI-KI",
                image: "images/Niki.jpg",
                description:
                    "You seem drawn toward confidence, challenge and excitement. You would probably get bored in a relationship with zero spark, but you also need enough respect and maturity to stop intensity becoming chaos."
            },

            heeseung: {
                name: "HEESEUNG",
                image: "images/Heeseung.jpg",
                description:
                    "Mental connection matters heavily to you. You seem to want someone you can talk to deeply, learn from and feel understood by. Surface-level chemistry alone probably isn't enough."
            }

        }

    },


    /* =================================================
       02 CORTIS
    ================================================= */

    "cortis": {

        group: "CORTIS",

        title: "Which CORTIS Member Would Fall for You?",

        subtitle:
            "Your relationship habits choose the match. Not your bias.",

        intro:
            "This quiz uses your communication preferences, social energy, emotional style and relationship values.",

        image: "images/cortis.jpg",

        questions: [

            {
                question:
                    "What makes someone instantly attractive to you?",

                options: [

                    {
                        text: "Quiet confidence.",
                        scores: { martin: 3, james: 2 }
                    },

                    {
                        text: "Playful confidence and humor.",
                        scores: { keonho: 3, juhoon: 2 }
                    },

                    {
                        text: "Creativity and individuality.",
                        scores: { seonghyeon: 3, martin: 2 }
                    },

                    {
                        text: "Warmth and genuine kindness.",
                        scores: { juhoon: 3, keonho: 2 }
                    },

                    {
                        text: "Someone ambitious who knows what they want.",
                        scores: { james: 3, martin: 2 }
                    }

                ]
            },


            {
                question:
                    "How do you usually communicate when you like someone?",

                options: [

                    {
                        text: "I stay composed and let things develop.",
                        scores: { martin: 3 }
                    },

                    {
                        text: "I tease them and make jokes.",
                        scores: { keonho: 3 }
                    },

                    {
                        text: "I share interests and creative ideas.",
                        scores: { seonghyeon: 3 }
                    },

                    {
                        text: "I become noticeably caring.",
                        scores: { juhoon: 3 }
                    },

                    {
                        text: "I am direct about my intentions.",
                        scores: { james: 3 }
                    }

                ]
            },


            {
                question:
                    "What would make you lose interest fastest?",

                options: [

                    {
                        text: "Neediness and constant reassurance seeking.",
                        scores: { martin: 3 }
                    },

                    {
                        text: "Being boring and overly serious.",
                        scores: { keonho: 3 }
                    },

                    {
                        text: "Having no personality of their own.",
                        scores: { seonghyeon: 3 }
                    },

                    {
                        text: "Being emotionally cold.",
                        scores: { juhoon: 3 }
                    },

                    {
                        text: "Being indecisive about everything.",
                        scores: { james: 3 }
                    }

                ]
            },


            {
                question:
                    "Pick your relationship dynamic.",

                options: [

                    {
                        text: "Low-drama and quietly intense.",
                        scores: { martin: 3 }
                    },

                    {
                        text: "Chaotic best friends who flirt.",
                        scores: { keonho: 3 }
                    },

                    {
                        text: "Creative partners who inspire each other.",
                        scores: { seonghyeon: 3 }
                    },

                    {
                        text: "Soft, affectionate and supportive.",
                        scores: { juhoon: 3 }
                    },

                    {
                        text: "Power couple energy.",
                        scores: { james: 3 }
                    }

                ]
            }

        ],

        results: {

            martin: {
                name: "MARTIN",
                image: "images/martin.jpg",
                description:
                    "Your answers point toward a calm, composed and independent relationship dynamic. You seem to prefer substance over constant attention and probably need someone who respects your space."
            },

            james: {
                name: "JAMES",
                image: "images/james.jpg",
                description:
                    "You lean toward directness, ambition and confidence. You probably find indecision exhausting and want someone who can stand beside you rather than constantly needing to be carried."
            },

            juhoon: {
                name: "JUHOON",
                image: "images/juhoon.jpg",
                description:
                    "Your answers suggest that emotional warmth matters a lot to you. You are likely to appreciate consistency, kindness and a relationship where affection doesn't have to be guessed."
            },

            seonghyeon: {
                name: "SEONGHYEON",
                image: "images/seonghyeon.jpg",
                description:
                    "You seem attracted to individuality and creative energy. You probably need a relationship where both people still have their own interests, ideas and identity."
            },

            keonho: {
                name: "KEONHO",
                image: "iages/keonho.jpg",
                description:
                    "You seem to thrive on playful chemistry. You need someone who can joke around, keep things interesting and make romance feel like friendship with extra electricity."
            }

        }

    },


    /* =================================================
       03 SUNGHOON
    ================================================= */

    "sunghoon": {

        group: "SUNGHOON",

        title: "Would Sunghoon Date You?",

        subtitle:
            "Are you actually compatible with the traits associated with his public image?",

        intro:
            "This is a fan-made compatibility exercise based on public-facing information and personality concepts. It cannot determine Sunghoon's private preferences.",

        image: "images/Sunghoon.jpg",

        questions: [

            {
                question:
                    "How much attention do you expect from a partner?",

                options: [

                    {
                        text: "A lot. I like frequent reassurance.",
                        scores: { soft: 3 }
                    },

                    {
                        text: "A healthy amount. We both need our own lives.",
                        scores: { balanced: 3 }
                    },

                    {
                        text: "Not much. I actually like independence.",
                        scores: { independent: 3 }
                    },

                    {
                        text: "It depends. I want intensity when we're together.",
                        scores: { romantic: 3 }
                    }

                ]
            },


            {
                question:
                    "Someone becomes distant after an argument. You...",

                options: [

                    {
                        text: "Need to talk immediately.",
                        scores: { soft: 3 }
                    },

                    {
                        text: "Give them some time, then talk calmly.",
                        scores: { balanced: 3 }
                    },

                    {
                        text: "Give them space unless it's serious.",
                        scores: { independent: 3 }
                    },

                    {
                        text: "Try to reconnect emotionally first.",
                        scores: { romantic: 3 }
                    }

                ]
            },


            {
                question:
                    "Your ideal partner is someone who...",

                options: [

                    {
                        text: "Makes me feel constantly reassured.",
                        scores: { soft: 3 }
                    },

                    {
                        text: "Is mature and emotionally steady.",
                        scores: { balanced: 3 }
                    },

                    {
                        text: "Has their own ambitions and life.",
                        scores: { independent: 3 }
                    },

                    {
                        text: "Is deeply affectionate in private.",
                        scores: { romantic: 3 }
                    }

                ]
            },


            {
                question:
                    "Which trait sounds most like you?",

                options: [

                    {
                        text: "Emotionally expressive.",
                        scores: { soft: 3 }
                    },

                    {
                        text: "Calm and practical.",
                        scores: { balanced: 3 }
                           },

                    {
                        text: "Romantic and intense.",
                        scores: { romantic: 3 }
                    }

                ]
            },


            {
                question:
                    "Be brutally honest. What do you need most?",

                options: [

                    {
                        text: "Reassurance.",
                        scores: { soft: 3 }
                    },

                    {
                        text: "Stability.",
                        scores: { balanced: 3 }
                    },

                    {
                        text: "Freedom.",
                        scores: { independent: 3 }
                    },

                    {
                        text: "Chemistry.",
                        scores: { romantic: 3 }
                    }

                ]
            }

        ],

        results: {

            soft: {
                name: "LOWER COMPATIBILITY",
                image: "Image/Sunghoon.jpg",
                score: "YOUR STYLE: HIGH REASSURANCE",
                description:
                    "You seem to need frequent emotional reassurance and visible affection. That's not bad at all. But if you were paired with someone more private or reserved, you could end up feeling ignored when they are simply processing things differently."
            },

            balanced: {
                name: "STRONG COMPATIBILITY",
                image: "Image/Sunghoon.jpg",
                score: "YOUR STYLE: EMOTIONALLY BALANCED",
                description:
                    "Your answers show a healthy balance between closeness and independence. You want communication without demanding constant access to someone. That generally creates a more sustainable relationship dynamic."
            },

            independent: {
                name: "VERY STRONG COMPATIBILITY",
                image: "Image/Sunghoon.jpg",
                score: "YOUR STYLE: INDEPENDENT",
                description:
                    "You are comfortable giving people space and maintaining your own identity. Based purely on compatibility psychology, that can work particularly well with a more private or reserved personality."
            },

            romantic: {
                name: "POSSIBLE COMPATIBILITY",
                image: "Image/Sunghoon.jpg",
                score: "YOUR STYLE: ROMANTIC",
                description:
                    "You want strong chemistry and meaningful affection. That can be great, but your biggest challenge may be expecting emotional intensity all the time. A quieter partner could sometimes feel less romantic than they actually are."
            }

        }

    },


    /* =================================================
       04 KATSEYE
    ================================================= */

    "katseye": {

        group: "KATSEYE",

        title: "Which KATSEYE Member Matches Your Vibe?",

        subtitle:
            "Your personality, confidence and social energy decide your result.",
       intro:
            "This quiz compares your answers with different personality and energy profiles inspired by the members' public-facing personas.",

        image: "",

        questions: [

            {
                question:
                    "When you walk into a room, your natural energy is...",

                options: [

                    {
                        text: "Bright, expressive and impossible to miss.",
                        scores: { daniela: 3 }
                    },

                    {
                        text: "Cool. I don't need to try hard to stand out.",
                        scores: { manon: 3 }
                    },

                    {
                        text: "Warm and welcoming.",
                        scores: { sophia: 3 }
                    },

                    {
                        text: "Confident and sharp.",
                        scores: { lara: 3 }
                    },

                    {
                        text: "Playful and energetic.",
                        scores: { megan: 3 }
                    },

                    {
                        text: "Fresh, youthful and quietly charming.",
                        scores: { yoonchae: 3 }
                    }

                ]
            },


            {
                question:
                    "Your strongest social trait is...",


                options: [

                    {
                        text: "Expressiveness.",
                        scores: { daniela: 3 }
                    },

                    {
                        text: "Effortless confidence.",
                        scores: { manon: 3 }
                    },

                    {
                        text: "Empathy.",
                        scores: { sophia: 3 }
                    },

                    {
                        text: "Assertiveness.",
                        scores: { lara: 3 }
                    },

                    {
                        text: "Playfulness.",
                        scores: { megan: 3 }
                    },

                    {
                        text: "Adaptability.",
                        scores: { yoonchae: 3 }
                    }

                ]
            },


            {
                question:
                    "Pick your fashion energy.",

                options: [

                    {
                        text: "Bold, fun and expressive.",
                        scores: { daniela: 3 }
                    },

                    {
                        text: "Minimal but effortlessly cool.",
                        scores: { manon: 3 }
                    },

                    {
                        text: "Elegant and polished.",
                        scores: { sophia: 3 }
                    },

                    {
                        text: "Statement pieces and confidence.",
                        scores: { lara: 3 }
                    },

                    {
                        text: "Trendy and playful.",
                        scores: { megan: 3 }
                    },

                    {
                        text: "Fresh and youthful.",
                        scores: { yoonchae: 3 }
                    }

                ]
            },


            {
                question:
                    "What do people usually notice first about you?",
               options: [

                    {
                        text: "My expressions.",
                        scores: { daniela: 3 }
                    },

                    {
                        text: "My aura.",
                        scores: { manon: 3 }
                    },

                    {
                        text: "My friendliness.",
                        scores: { sophia: 3 }
                    },

                    {
                        text: "My confidence.",
                        scores: { lara: 3 }
                    },

                    {
                        text: "My energy.",
                        scores: { megan: 3 }
                    },

                    {
                        text: "My charm.",
                        scores: { yoonchae: 3 }
                    }

                ]
            },


            {
                question:
                    "Your biggest main-character trait is...",


                options: [

                    {
                        text: "I can make people feel the emotion.",
                        scores: { daniela: 3 }
                    },

                    {
                        text: "I don't need everyone's approval.",
                        scores: { manon: 3 }
                    },

                    {
                        text: "People feel comfortable around me.",
                        scores: { sophia: 3 }
                    },

                    {
                        text: "I know what I want.",
                        scores: { lara: 3 }
                    },

                    {
                        text: "I make everything more fun.",
                        scores: { megan: 3 }
                    },

                    {
                        text: "I can fit into different situations.",
                        scores: { yoonchae: 3 }
                    }

                ]
            }

        ],

        results: {

            manon: {
                name: "MANON",
                image: "",
                description:
                    "Your answers point toward an effortlessly cool and independent presence. You probably don't need to be the loudest person in the room to get noticed. Your strength is controlled confidence."
            },

            sophia: {
                name: "SOPHIA",
                image: "",
                description:
                    "You give warm, polished and approachable energy. You likely care about how people feel around you and naturally create a comfortable social atmosphere."
            },

            lara: {
                name: "LARA",
                image: "",
                description:
                    "Your answers show strong confidence and assertiveness. You seem comfortable taking up space, making decisions and showing personality without shrinking yourself."
            },

            megan: {
                name: "MEGAN",
                image: "",
                description:
                    "You have playful, energetic and expressive energy. You probably make ordinary situations more fun and prefer people who can keep up rather than constantly tone you down."
            },

            yoonchae: {
                name: "YOONCHAE",
                image: "",
                description:
                    "Your vibe is fresh, adaptable and naturally charming. You seem able to move between different social environments without needing to force a particular personality."
            },

            daniela: {
                name: "DANIELA",
                image: "",
                description:
                    "You have expressive, bright and emotionally visible energy. Your personality probably comes through strongly in your face, reactions and the way you communicate."
            }

        }

    },


    /* =================================================
       05 ENHYPEN TYPE
    ================================================= */

    "enhypen-type": {
       group: "ENHYPEN",

        title: "Which ENHYPEN Member's Type Are You?",

        subtitle:
            "This time, your bias doesn't get to choose. Your personality does.",

        intro:
            "This is a psychology-inspired compatibility game based on personality traits and relationship preferences, not private celebrity information.",

        image: "Image/Enhypen.jpg",

        questions: [

            {
                question:
                    "What quality do you naturally bring into a relationship?",

                options: [

                    {
                        text: "Emotional stability.",
                        scores: { jungwon: 3 }
                    },

                    {
                        text: "Loyalty and effort.",
                        scores: { jay: 3 }
                    },

                    {
                        text: "Warmth and friendliness.",
                        scores: { jake: 3 }
                    },

                    {
                        text: "Composure.",
                        scores: { sunghoon: 3 }
                    },

                    {
                        text: "Emotional expression.",
                        scores: { sunoo: 3 }
                    },

                    {
                        text: "Confidence and energy.",
                        scores: { niki: 3 }
                    },

                    {
                        text: "Depth and curiosity.",
                        scores: { heeseung: 3 }
                    }

                ]
            },


            {
                question:
                    "What kind of person are you when you trust someone?",

                options: [

                    {
                        text: "Protective and steady.",
                        scores: { jungwon: 3 }
                    },

                    {
                        text: "Very dependable.",
                        scores: { jay: 3 }
                    },

                    {
                        text: "Affectionate and playful.",
                        scores: { jake: 3 }
                    },

                    {
                        text: "Quietly loyal.",
                        scores: { sunghoon: 3 }
                    },

                    {
                        text: "Open and expressive.",
                        scores: { sunoo: 3 }
                    },

                    {
                        text: "Playful and challenging.",
                        scores: { niki: 3 }
                    },

                    {
                        text: "Deeply communicative.",
                        scores: { heeseung: 3 }
                    }

                ]
            },


            {
                question:
                    "Pick the compliment you'd secretly love most.",

                options: [

                    {
                        text: "You're so emotionally mature.",
                        scores: { jungwon: 3 }
                    },

                    {
                        text: "I can always depend on you.",
                        scores: { jay: 3 }
                    },

                    {
                        text: "You're so easy to be around.",
                        scores: { jake: 3 }
                    },

                    {
                        text: "You have such a calm aura.",
                        scores: { sunghoon: 3 }
                    },

                    {
                        text: "You make everything brighter.",
                        scores: { sunoo: 3 }
                    },

                    {
                        text: "You're seriously confident.",
                        scores: { niki: 3 }
                    },

                    {
                        text: "I could talk to you forever.",
                        scores: { heeseung: 3 }
                    }

                ]
            },


            {
                question:
                    "What relationship dynamic would actually keep you happy?",
               options: [

                    {
                        text: "Secure and peaceful.",
                        scores: { jungwon: 3 }
                    },

                    {
                        text: "Loyal and ambitious.",
                        scores: { jay: 3 }
                    },

                    {
                        text: "Romantic best friends.",
                        scores: { jake: 3 }
                    },

                    {
                        text: "Private and elegant.",
                        scores: { sunghoon: 3 }
                    },

                    {
                        text: "Fun and affectionate.",
                        scores: { sunoo: 3 }
                    },

                    {
                        text: "Exciting and passionate.",
                        scores: { niki: 3 }
                    },

                    {
                        text: "Deep and mentally stimulating.",
                        scores: { heeseung: 3 }
                    }

                ]
            }

        ],

        results: {

            jungwon: {
                name: "JUNGWON'S TYPE",
                image: "Image/Jungwon.jpg",
                description:
                    "Your strongest traits point toward emotional steadiness, consistency and maturity. You are less about dramatic attention and more about building something that actually feels safe."
            },

            jay: {
                name: "JAY'S TYPE",
                image: "Image/Jay.jpg",
                description:
                    "You score strongly in loyalty, effort and ambition. You probably respect people who take relationships seriously and show love through what they actually do."
            },

            jake: {
                name: "JAKE'S TYPE",
                image: "Image/Jake.jpg",
                description:
                    "You give warm, approachable and affectionate energy. You probably want romance to feel natural rather than like a performance."
            },

            sunghoon: {
                name: "SUNGHOON'S TYPE",
                image: "Image/Sunghoon.jpg",
                description:
                    "Your answers suggest calmness, independence and emotional control. You don't appear to need constant attention to feel secure."
            },

            sunoo: {
                name: "SUNOO'S TYPE",
                image: "Image/Sunoo.jpg",
                description:
                    "You bring expressive, affectionate and bright energy. You probably want a relationship where emotions can actually be shown instead of permanently hidden."
            },

            niki: {
                name: "NI-KI'S TYPE",
                image: "Image/Niki.jpg",
                description:
                    "You have confident, energetic and playful relationship energy. You probably need someone who can challenge you without turning every disagreement into a competition."
            },

            heeseung: {
                name: "HEESEUNG'S TYPE",
                image: "Image/Heeseung.jpg",
                description:
                    "You value mental connection, curiosity and meaningful conversation. Surface-level attraction probably loses its power quickly if there is nothing deeper underneath."
            }

        }

    }

};


/* =====================================================
   UTILITY
===================================================== */

function getQuizID() {

    const params = new URLSearchParams(window.location.search);

    return params.get("quiz");

}


/* =====================================================
   START QUIZ PAGE
===================================================== */

let currentQuiz = null;

let currentQuestion = 0;

let scores = {};


document.addEventListener("DOMContentLoaded", () => {

    const quizApp = document.getElementById("quizApp");

    if (!quizApp) return;

    const quizID = getQuizID();

    currentQuiz = quizzes[quizID];

    if (!currentQuiz) {

        showQuizNotFound();

        return;

    }

    showQuizIntro();

});


/* =====================================================
   INTRO
===================================================== */

function showQuizIntro() {

    const app = document.getElementById("quizApp");

    app.innerHTML = `

        <div class="quiz-container">

            <section class="quiz-intro">

                <p class="mini-label">
                    ${currentQuiz.group} • ANGEL DIARY
                </p>

                <h1>
                    ${formatTitle(currentQuiz.title)}
                </h1>

                <p>
                    ${currentQuiz.subtitle}
                </p>

            </section>


            <section class="quiz-rules">

                <strong>
                    ♡ BEFORE YOU START
                </strong>

                <p>
                    ${currentQuiz.intro}
                </p>

                <p>
                    Be honest. Choosing the answer you think is
                    "prettier" can change your result. There are no
                    correct answers. The point is to measure your
                    actual personality preferences.
                </p>

                <button
                    class="start-real-button"
                    onclick="beginQuiz()"
                >
                    I'LL BE HONEST • START
                </button>

            </section>

        </div>

    `;

}
           
