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
           
