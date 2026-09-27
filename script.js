/* =========================================
   ANGEL DIARY QUIZZES
========================================= */

const quizzes = [

/* =========================================
   QUIZ 01
   ENHYPEN HUSBAND
========================================= */

{
    id: "enhypen-husband",

    number: "01",

    title: "Which ENHYPEN Member Is Your Husband?",

    description:
        "Your answers reveal which ENHYPEN personality style is most compatible with you.",

    image: "images/enhypen.jpg",

    disclaimer:
        "This result reflects compatibility with public-facing personality traits, not a prediction of a real relationship.",

    questions: [

        {
            question:
                "When you genuinely like someone, what do you actually do?",

            options: [

                ["I become softer and more attentive.", "jungwon"],

                ["I show it through practical actions.", "jay"],

                ["I become playful and affectionate.", "jake"],

                ["I act composed even when I'm nervous.", "sunghoon"],

                ["I make the person feel noticed.", "sunoo"],

                ["I tease them constantly.", "niki"],

                ["I want long, meaningful conversations.", "heeseung"]

            ]

        },


        {
            question:
                "Your ideal relationship needs the most...", 

            options: [

                ["Emotional stability.", "jungwon"],

                ["Reliability.", "jay"],

                ["Warmth.", "jake"],

                ["Mutual respect and space.", "sunghoon"],

                ["Emotional openness.", "sunoo"],

                ["Excitement.", "niki"],

                ["Mental connection.", "heeseung"]

            ]

        },


        {
            question:
                "Your biggest relationship red flag is...", 

            options: [

                ["Someone emotionally unpredictable.", "jungwon"],

                ["Someone who never follows through.", "jay"],

                ["Someone who makes everything cold.", "jake"],

                ["Someone clingy and controlling.", "sunghoon"],

                ["Someone emotionally unavailable.", "sunoo"],

                ["Someone boring and passive.", "niki"],

                ["Someone who cannot communicate.", "heeseung"]

            ]

        },


        {
            question:
                "Pick the date you would actually enjoy.",

            options: [

                ["Coffee + quiet conversation.", "jungwon"],

                ["Dinner somewhere beautiful.", "jay"],

                ["Exploring a new place.", "jake"],

                ["A winter evening together.", "sunghoon"],

                ["Cute café + photos.", "sunoo"],

                ["Something spontaneous.", "niki"],

                ["Music + talking until late.", "heeseung"]

            ]

        },


        {
            question:
                "What kind of person pulls you in fastest?",

            options: [

                ["Calm and quietly caring.", "jungwon"],

                ["Confident and dependable.", "jay"],

                ["Warm and naturally charming.", "jake"],

                ["Reserved and elegant.", "sunghoon"],

                ["Expressive and affectionate.", "sunoo"],

                ["Bold and unpredictable.", "niki"],

                ["Intelligent and artistic.", "heeseung"]

            ]

        }

    ],

    results: {

        jungwon: {
            name: "JUNGWON",
            image: "images/jungwon.jpg",
            title: "THE STEADY MATCH",
            description:
                "You gravitate toward emotional stability, quiet care and someone who makes a relationship feel safe without becoming boring."
        },

        jay: {
            name: "JAY",
            image: "images/jay.jpg",
            title: "THE POWER MATCH",
            description:
                "You need someone dependable but strong-minded. You are probably attracted to people who show love through what they actually DO."
        },

        jake: {
            name: "JAKE",
            image: "images/jake.jpg",
            title: "THE GOLDEN MATCH",
            description:
                "Warmth matters to you. You want affection that feels natural rather than forced, and you probably need friendship underneath romance."
        },

        sunghoon: {
            name: "SUNGHOON",
            image: "images/sunghoon.jpg",
            title: "THE ICE-CALM MATCH",
            description:
                "You are drawn to composed people with their own world. You probably enjoy romance more when it develops slowly instead of becoming intense immediately."
        },

        sunoo: {
            name: "SUNOO",
            image: "images/sunoo.jpg",
            title: "THE SUNSHINE MATCH",
            description:
                "You need emotional expression and visible affection. You are unlikely to thrive with someone who expects you to guess what they feel."
        },

        niki: {
            name: "NI-KI",
            image: "images/niki.jpg",
            title: "THE CHAOS MATCH",
            description:
                "You need energy. Predictability alone probably won't hold your attention, and you may secretly enjoy someone who challenges you."
        },

        heeseung: {
            name: "HEESEUNG",
            image: "images/heeseung.jpg",
            title: "THE DEEP MATCH",
            description:
                "Mental connection matters heavily to you. You want someone you can talk to for hours and still discover new layers."
        }

    }

},



/* =========================================
   QUIZ 02
   CORTIS
========================================= */

{
    id: "cortis",

    number: "02",

    title: "Which CORTIS Member Would Fall for You?",

    description:
        "Your personality, social energy and relationship style determine your CORTIS compatibility vibe.",

    image: "images/cortis.jpg",

    disclaimer:
        "This is a fan-made compatibility interpretation based on public-facing information. It cannot predict a real person's romantic preferences.",

    questions: [

        {
            question:
                "At a party, you're most likely to...", 

            options: [

                ["Observe first, then join in.", "martin"],

                ["Start talking to everyone.", "james"],

                ["Stay with your favourite people.", "juhoon"],

                ["Find something interesting to do.", "seonghyeon"],

                ["Make the whole situation more fun.", "keonho"]

            ]

        },


        {
            question:
                "Your strongest relationship trait is...", 

            options: [

                ["Thoughtfulness.", "martin"],

                ["Confidence.", "james"],

                ["Loyalty.", "juhoon"],

                ["Curiosity.", "seonghyeon"],

                ["Playfulness.", "keonho"]

            ]

        },


        {
            question:
                "What makes someone attractive to you?",

            options: [

                ["Quiet intelligence.", "martin"],

                ["Strong presence.", "james"],

                ["A genuinely kind personality.", "juhoon"],

                ["Creative thinking.", "seonghyeon"],

                ["A great sense of humour.", "keonho"]

            ]

        },


        {
            question:
                "Your ideal date is...", 

            options: [

                ["A low-key café.", "martin"],

                ["A stylish dinner.", "james"],

                ["A comfortable day together.", "juhoon"],

                ["Trying something new.", "seonghyeon"],

                ["An activity that gets you both laughing.", "keonho"]

            ]

        }

    ],

    results: {

        martin: {
            name: "MARTIN",
            image: "images/martin.jpg",
            title: "THE QUIET CONNECTION",
            description:
                "Your strongest match is the type of connection built through conversation, curiosity and noticing the details other people miss."
        },

        james: {
            name: "JAMES",
            image: "images/james.jpg",
            title: "THE BOLD CONNECTION",
            description:
                "You respond strongly to confidence and presence. You need someone who can match your energy rather than disappear behind it."
        },

        juhoon: {
            name: "JUHOON",
            image: "images/juhoon.jpg",
            title: "THE COMFORT CONNECTION",
            description:
                "You value loyalty and genuine comfort. Surface-level chemistry probably won't be enough for you."
        },

        seonghyeon: {
            name: "SEONGHYEON",
            image: "images/seonghyeon.jpg",
            title: "THE CURIOUS CONNECTION",
            description:
                "You need mental stimulation and novelty. You are likely to lose interest when everything becomes predictable."
        },

        keonho: {
            name: "KEONHO",
            image: "images/keonho.jpg",
            title: "THE PLAYFUL CONNECTION",
            description:
                "Humour and fun are major chemistry triggers for you. You need a relationship that actually feels alive."
        }

    }

},
   /* =========================================
   QUIZ 03
   SUNGHOON COMPATIBILITY
========================================= */

{
    id: "sunghoon",

    number: "03",

    title: "Would Sunghoon Date You? Are You His Type?",

    description:
        "A blunt compatibility test based on your relationship style and publicly known personality traits.",

    image: "images/sunghoon.jpg",

    disclaimer:
        "This does NOT reveal Sunghoon's private dating preferences. It measures how your relationship style compares with public-facing traits.",

    questions: [

        {
            question:
                "How much attention do you realistically need from a partner?",

            options: [

                ["A lot. I like reassurance.", "high"],

                ["Some, but I need my own life too.", "balanced"],

                ["Very little. Give me space.", "independent"],

                ["It depends heavily on the person.", "flexible"]

            ]

        },


        {
            question:
                "Someone takes hours to reply. Your actual reaction?",

            options: [

                ["I'm immediately wondering what happened.", "high"],

                ["I notice but carry on with my day.", "balanced"],

                ["Honestly? I probably didn't notice.", "independent"],

                ["Depends on whether it's normal for them.", "flexible"]

            ]

        },


        {
            question:
                "Your communication style during conflict is...", 

            options: [

                ["I want to solve it immediately.", "high"],

                ["I'll talk once everyone has calmed down.", "balanced"],

                ["I need significant space first.", "independent"],

                ["I adapt depending on the situation.", "flexible"]

            ]

        },


        {
            question:
                "What sounds healthiest to you?",

            options: [

                ["Constant reassurance.", "high"],

                ["Closeness + independence.", "balanced"],

                ["Two people with very separate lives.", "independent"],

                ["A relationship that changes naturally.", "flexible"]

            ]

        },


        {
            question:
                "Be brutally honest. Your biggest relationship weakness is...", 

            options: [

                ["Overthinking.", "high"],

                ["Trying to keep everything balanced.", "balanced"],

                ["Keeping people at arm's length.", "independent"],

                ["Changing your approach too much.", "flexible"]

            ]

        }

    ],

    results: {

        high: {
            name: "LOWER COMPATIBILITY",
            image: "images/sunghoon.jpg",
            title: "THE HONEST ANSWER",
            description:
                "Your answers suggest you need frequent reassurance and emotional availability. That isn't bad, but a reserved, independent personality style may leave you feeling under-loved."
        },

        balanced: {
            name: "HIGHER COMPATIBILITY",
            image: "images/sunghoon.jpg",
            title: "THE BALANCED MATCH",
            description:
                "You want closeness without losing yourself. That combination tends to work better with someone who values personal space and a calm relationship rhythm."
        },

        independent: {
            name: "POTENTIALLY HIGH",
            image: "images/sunghoon.jpg",
            title: "THE INDEPENDENT MATCH",
            description:
                "You don't need constant contact to feel secure. Your independence could fit well with a reserved relationship style, provided both people still communicate properly."
        },

        flexible: {
            name: "IT DEPENDS",
            image: "images/sunghoon.jpg",
            title: "THE WILDCARD",
            description:
                "You adapt easily, which can help relationships. But be careful: adapting too much can also mean ignoring your own needs just to make something work."
        }

    }

},



/* =========================================
   QUIZ 04
   KATSEYE
========================================= */

{
    id: "katseye",

    number: "04",

    title: "Which KATSEYE Member Matches Your Vibe?",

    description:
        "Your social energy, confidence and aesthetic personality reveal your closest KATSEYE vibe.",

    image: "images/katseye.jpg",

    disclaimer:
        "This is based on public-facing personality and performance traits, not private personality information.",

    questions: [

        {
            question:
                "When you walk into a room, your energy is...", 

            options: [

                ["Bright and expressive.", "daniela"],

                ["Quiet but magnetic.", "manon"],

                ["Confident and composed.", "lara"],

                ["Warm and welcoming.", "sophia"],

                ["Playful and energetic.", "megan"],

                ["Fresh and youthful.", "yoonchae"]

            ]

        },


        {
            question:
                "Your strongest social trait is...", 

            options: [

                ["Expressiveness.", "daniela"],

                ["Effortless presence.", "manon"],

                ["Self-confidence.", "lara"],

                ["Emotional warmth.", "sophia"],

                ["Fun energy.", "megan"],

                ["Natural charm.", "yoonchae"]

            ]

        },


        {
            question:
                "Pick the aesthetic that feels most YOU.",

            options: [

                ["Bold, colourful and playful.", "daniela"],

                ["Minimal, cool and mysterious.", "manon"],

                ["Edgy, polished and powerful.", "lara"],

                ["Elegant, soft and classic.", "sophia"],

                ["Sporty, fun and youthful.", "megan"],

                ["Fresh, cute and effortless.", "yoonchae"]

            ]

        },


        {
            question:
                "When something goes wrong, you usually...", 

            options: [

                ["Talk it out immediately.", "daniela"],

                ["Stay calm and observe.", "manon"],

                ["Take control.", "lara"],

                ["Make sure everyone is okay.", "sophia"],

                ["Try to lighten the mood.", "megan"],

                ["Stay adaptable.", "yoonchae"]

            ]

        }

    ],

    results: {

        daniela: {
            name: "DANIELA",
            image: "images/daniela.jpg",
            title: "THE FIRECRACKER",
            description:
                "You have expressive, energetic presence. You are at your best when you stop trying to look effortless and let your personality actually take up space."
        },

        manon: {
            name: "MANON",
            image: "images/manon.jpg",
            title: "THE MAGNET",
            description:
                "Your strongest trait is effortless presence. You don't necessarily need to be the loudest person in the room to become one of the most noticeable."
        },

        lara: {
            name: "LARA",
            image: "images/lara.jpg",
            title: "THE POWER GIRL",
            description:
                "Confidence is central to your vibe. You prefer knowing what you want instead of waiting for everyone else to decide."
        },

        sophia: {
            name: "SOPHIA",
            image: "images/sophia.jpg",
            title: "THE HEART",
            description:
                "You combine warmth with polish. People are likely to feel comfortable around you quickly, which can be more powerful than trying to impress them."
        },

        megan: {
            name: "MEGAN",
            image: "images/megan.jpg",
            title: "THE SPARK",
            description:
                "Your energy is playful and active. You probably become most magnetic when you stop worrying about whether you're being 'too much'."
        },

        yoonchae: {
            name: "YOONCHAE",
            image: "images/yoonchae.jpg",
            title: "THE FRESH VIBE",
            description:
                "Your appeal comes from natural charm rather than trying too hard. Your biggest strength is keeping your energy genuine."
        }

    }

},
   /* =========================================
   QUIZ 05
   ENHYPEN TYPE
========================================= */

{
    id: "enhypen-type",

    number: "05",

    title: "Which ENHYPEN Member's Type Are You?",

    description:
        "A personality-style match based on the traits you value and the way you approach relationships.",

    image: "images/enhypen.jpg",

    disclaimer:
        "This does not claim to reveal any member's private ideal type. It matches your answers with public-facing personality styles.",

    questions: [

        {
            question:
                "Which quality do you naturally bring into relationships?",

            options: [

                ["Stability.", "jungwon"],

                ["Loyalty.", "jay"],

                ["Warmth.", "jake"],

                ["Independence.", "sunghoon"],

                ["Emotional expression.", "sunoo"],

                ["Excitement.", "niki"],

                ["Depth.", "heeseung"]

            ]

        },


        {
            question:
                "What makes you lose interest fastest?",

            options: [

                ["Emotional instability.", "jungwon"],

                ["Unreliability.", "jay"],

                ["Coldness.", "jake"],

                ["Clinginess.", "sunghoon"],

                ["Emotional distance.", "sunoo"],

                ["Boredom.", "niki"],

                ["Shallow conversation.", "heeseung"]

            ]

        },


        {
            question:
                "What kind of attention do you prefer?",

            options: [

                ["Quiet consistency.", "jungwon"],

                ["Actions over words.", "jay"],

                ["Affection and humour.", "jake"],

                ["Respectful space.", "sunghoon"],

                ["Open affection.", "sunoo"],

                ["Playful teasing.", "niki"],

                ["Deep conversation.", "heeseung"]

            ]

        },


        {
            question:
                "What is your strongest attraction trigger?",

            options: [

                ["Kindness.", "jungwon"],

                ["Competence.", "jay"],

                ["Charm.", "jake"],

                ["Composure.", "sunghoon"],

                ["Expressiveness.", "sunoo"],

                ["Confidence.", "niki"],

                ["Intelligence.", "heeseung"]

            ]

        }

    ],

    results: {

        jungwon: {
            name: "JUNGWON'S TYPE",
            image: "images/jungwon.jpg",
            title: "THE STABLE GIRL",
            description:
                "You naturally give the kind of energy that values consistency, kindness and emotional steadiness."
        },

        jay: {
            name: "JAY'S TYPE",
            image: "images/jay.jpg",
            title: "THE RELIABLE GIRL",
            description:
                "Your strongest trait is dependability. You are more likely to show affection through what you do than through dramatic declarations."
        },

        jake: {
            name: "JAKE'S TYPE",
            image: "images/jake.jpg",
            title: "THE WARM GIRL",
            description:
                "You bring friendliness and emotional warmth. Your strongest relationship skill is making connection feel natural."
        },

        sunghoon: {
            name: "SUNGHOON'S TYPE",
            image: "images/sunghoon.jpg",
            title: "THE INDEPENDENT GIRL",
            description:
                "You don't need constant validation. You can care deeply while still maintaining your own identity."
        },

        sunoo: {
            name: "SUNOO'S TYPE",
            image: "images/sunoo.jpg",
            title: "THE EXPRESSIVE GIRL",
            description:
                "You wear your feelings more openly than most. Your emotional honesty can make relationships feel very alive."
        },

        niki: {
            name: "NI-KI'S TYPE",
            image: "images/niki.jpg",
            title: "THE BOLD GIRL",
            description:
                "You have strong energy and don't mind being playful or competitive. You probably need a partner who won't be intimidated by your personality."
        },

        heeseung: {
            name: "HEESEUNG'S TYPE",
            image: "images/heeseung.jpg",
            title: "THE DEEP GIRL",
            description:
                "You are drawn to substance. You probably care more about someone's mind and emotional depth than surface-level charm."
        }

    }

}

];



/* =========================================
   GLOBAL STATE
========================================= */

let currentQuiz = null;

let currentQuestion = 0;

let answers = [];



/* =========================================
   DOM
========================================= */

const homePage =
    document.getElementById("homePage");

const quizPage =
    document.getElementById("quizPage");

const quizGrid =
    document.getElementById("quizGrid");

const quizContent =
    document.getElementById("quizContent");

const backButton =
    document.getElementById("backButton");



/* =========================================
   IMAGE
========================================= */

function createImage(src, alt) {

    if (!src) {

        return `
            <div class="quiz-placeholder">
                IMAGE COMING SOON ♡
            </div>
        `;

    }

    return `
        <img
            src="${src}"
            alt="${alt}"
            loading="lazy"
            onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='grid';
            "
        >

        <div
            class="quiz-placeholder"
            style="display:none;"
        >
            IMAGE COMING SOON ♡
        </div>
    `;

}



/* =========================================
   HOME
========================================= */

function renderHome() {

    quizGrid.innerHTML = quizzes.map(quiz => {

        return `

            <article
                class="quiz-card"
            >

                <div class="quiz-card-image">

                    <span class="quiz-number">
                        ${quiz.number}
                    </span>

                    ${createImage(
                        quiz.image,
                        quiz.title
                    )}

                </div>


                <div class="quiz-card-content">

                    <h3>
                        ${quiz.title}
                    </h3>

                    <p>
                        ${quiz.description}
                    </p>


                    <button
                        class="quiz-button"
                        onclick="startQuiz('${quiz.id}')"
                    >
                        TAKE QUIZ ↗
                    </button>

                </div>

            </article>

        `;

    }).join("");

}



/* =========================================
   START QUIZ
========================================= */

function startQuiz(id) {

    currentQuiz =
        quizzes.find(
            quiz => quiz.id === id
        );

    if (!currentQuiz) return;

    currentQuestion = 0;

    answers = [];

    homePage.style.display = "none";

    quizPage.style.display = "block";

    document.body.classList.add("quiz-open");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    renderQuestion();

}



/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {

    const question =
        currentQuiz.questions[currentQuestion];

    const total =
        currentQuiz.questions.length;

    const progress =
        ((currentQuestion) / total) * 100;


    quizContent.innerHTML = `

        <div class="quiz-header">

            <p class="quiz-label">
                ${currentQuiz.number}
                / ANGEL DIARY
            </p>


            <h1>
                ${currentQuiz.title}
            </h1>


            <p>
                ${currentQuiz.disclaimer}
            </p>

        </div>


        <div class="progress-wrap">

            <div
                class="progress-bar"
                style="width:${progress}%"
            ></div>

        </div>


        <div class="question-card">

            <div class="question-top">

                <span>
                    QUESTION
                    ${currentQuestion + 1}
                    /
                    ${total}
                </span>

                <span>
                    ANSWER HONESTLY
                </span>

            </div>


            <h2>
                ${question.question}
            </h2>


            <div class="answer-list">

                ${question.options.map(
                    (option, index) => `

                        <button
                            class="answer-button"
                            onclick="
                                chooseAnswer('${option[1]}')
                            "
                        >

                            <span
                                class="answer-letter"
                            >
                                ${String.fromCharCode(65 + index)}
                            </span>

                            <span>
                                ${option[0]}
                            </span>

                        </button>

                    `
                ).join("")}

            </div>

        </div>

    `;

}



/* =========================================
   ANSWER
========================================= */

function chooseAnswer(answer) {

    answers.push(answer);


    if (
        currentQuestion <
        currentQuiz.questions.length - 1
    ) {

        currentQuestion++;

        renderQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        showResult();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* =========================================
   RESULT
========================================= */

function calculateResult() {

    const counts = {};

    answers.forEach(answer => {

        counts[answer] =
            (counts[answer] || 0) + 1;

    });


    const winner =
        Object.keys(counts).sort(
            (a, b) =>
                counts[b] - counts[a]
        )[0];


    return currentQuiz.results[winner];

}



/* =========================================
   SHOW RESULT
========================================= */

function showResult() {

    const result =
        calculateResult();


    const score =
        Math.round(
            70 +
            Math.random() * 28
        );


    quizContent.innerHTML = `

        <div class="result-page">

            <p class="result-label">
                ♡ YOUR ANGEL DIARY RESULT ♡
            </p>


            <div class="result-image">

                ${createImage(
                    result.image,
                    result.name
                )}

            </div>


            <h1>

                ${result.name}

                <br>

                <span>
                    ${result.title}
                </span>

            </h1>


            <div class="result-score">

                ${score}% COMPATIBILITY

            </div>


            <p class="result-description">

                ${result.description}

            </p>


            <div class="result-note">

                <strong>
                    Reality check:
                </strong>

                ${currentQuiz.disclaimer}

            </div>


            <div class="result-buttons">

                <button
                    class="result-button"
                    onclick="showAllQuizzes()"
                >
                    TRY ANOTHER QUIZ ↗
                </button>


                <button
                    class="result-button secondary"
                    onclick="restartQuiz()"
                >
                    RETAKE
                </button>

            </div>

        </div>

    `;

}



/* =========================================
   RESTART
========================================= */

function restartQuiz() {

    currentQuestion = 0;

    answers = [];

    renderQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================================
   BACK TO ALL QUIZZES
========================================= */

function showAllQuizzes() {

    quizPage.style.display = "none";

    homePage.style.display = "block";

    document.body.classList.remove("quiz-open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* =========================================
   BACK BUTTON
========================================= */

backButton.addEventListener(
    "click",
    showAllQuizzes
);



/* =========================================
   NAV LINKS
========================================= */

document
    .querySelectorAll(
        'nav a, .hero-button'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                if (
                    quizPage.style.display ===
                    "block"
                ) {

                    showAllQuizzes();

                }

            }
        );

    });



/* =========================================
   INITIALIZE
========================================= */

renderHome();
