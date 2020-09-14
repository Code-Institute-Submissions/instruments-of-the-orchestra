const startButton = document.getElementById('start-quiz');
const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-button'));

const wellDone = document.getElementById('well-done');
const wellDoneMessage = document.getElementById('message');
const nextButton = document.getElementById('next-button');
const tryAgain = document.getElementById('try-again');
const finish = document.getElementById('finish-container');
const finishButton = document.getElementById('finish-button');

let availableQuestions = [];
let currentQuestion = {};
let questionCounter;
let maxQuestions = 15;

//When the start button is clicked the startQuiz function is executed
startButton.addEventListener('click', startQuiz);
finishButton.addEventListener('click', startQuiz);

//This function will hide the welcome card and display the quiz when the start button is clicked
//The getQuestion function will then be executed
function startQuiz() {
    finish.classList.add('hide-content');
    welcomeContainer.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    availableQuestions = [...questions]; //Spread operator
    questionCounter = 0;
    getQuestion();
}

//This function will get the questions in a random order and display the question/answers in the quiz container
function getQuestion() {
    // questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //Random question index number
    currentQuestion = availableQuestions[questionIndex]; //Sets random question
    question.innerHTML = currentQuestion.question; //Sets innerHTML of the quiz question

    answers.forEach(answer => {
        const number = answer.dataset["number"];
        answer.innerText = currentQuestion["answer" + number]; //Sets innerText of answer buttons
    })

    availableQuestions.splice(questionIndex, 1); //Removes answered question from quiz
}

//Add an event listener to each answer button and lets user know if answer clicked is correct or incorrect
answers.forEach(answer => {
    answer.addEventListener('click', e => {
        const selectedButton = e.target;
        const selectedAnswer = selectedButton.dataset["number"];

        if (selectedAnswer === currentQuestion.correct) {
            //Well Done message is displayed
            correctSound();
            wellDone.classList.remove('hide-content');
            wellDoneMessage.innerHTML = currentQuestion.message;
            tryAgain.classList.add('hide-content');
            quizContainer.classList.add('hide-content');
            questionCounter++;
            nextQuestion();
        } else {
            //Try Again message is displayed
            incorrectSound();
            tryAgain.classList.remove('hide-content');
            quizContainer.classList.add('hide-content');
            const tryButton = document.getElementById('try-button');
            tryButton.addEventListener('click', () => {
                tryAgain.classList.add('hide-content');
                quizContainer.classList.remove('hide-content');
            })
        }
    })
})

function nextQuestion() {
    nextButton.addEventListener('click', () => {
        wellDone.classList.add('hide-content');
        quizContainer.classList.remove('hide-content');

        if (availableQuestions.length == 0) {
            finish.classList.remove('hide-content');
            wellDone.classList.add('hide-content');
            quizContainer.classList.add('hide-content');
        }

        getQuestion();
    })
}

function correctSound() {
    const correct = new Audio('assets/audio/correct.mp3');
    correct.play();
}

function incorrectSound() {
    const incorrect = new Audio('assets/audio/incorrect.mp3');
    incorrect.play();
}

const questions = [{
        //String Instruments
        //1
        question: `<h2>Can you guess the name of this instrument?</h2><img class="quiz-img" src="assets/images/violin.jpg" alt="Violin">`,
        answer1: 'Double Bass',
        answer2: 'Violin',
        answer3: 'Cello',
        answer4: 'Flute',
        correct: '2', //Violin
        message: `<img class="quiz-img" src="assets/images/violinist.jpg" alt="Man Playing the Violin"><p>It's the Violin.</p><p>The Violin is a member of The String Family.</p>`
    },
    {
        //2
        question: `<h2>Which of these instruments has more than four strings?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Harp',
        answer2: 'Cello',
        answer3: 'Oboe',
        answer4: 'Piano',
        correct: '1', //Harp
        message: `<img class="quiz-img" src="assets/images/harp.jpg" alt="Harp"><p>It's the Harp.</p>`
    },
    {
        //3
        question: `<h2>Which of these instruments sounds the lowest?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Trombone',
        answer2: 'French Horn',
        answer3: 'Clarinet',
        answer4: 'Double Bass',
        correct: '4', //Double Bass
        message: `<img class="quiz-img" src="assets/images/double-bass.jpg" alt="Man Playing Double Bass"><p>It's the Double Bass!</p>`
    },
    {
        //4
        question: `<h2>Which family is this instrument a member of?</h2><img class="quiz-img" src="assets/images/cello.jpg" alt="Cello">`,
        answer1: 'The Percussion Family',
        answer2: 'The String Family',
        answer3: 'The Brass Family',
        answer: 'The Woodwind Family',
        correct: '2', //The String Family - Cello
        message: `<img class="quiz-img" src="assets/images/cello-player.jpg" alt="Man Playing the Cello"><p>The Cello is a member of The String Family!</p>`
    },
    {
        //Woodwind Instruments
        //5
        question: `<h2>Which of these instruments sounds the highest?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Bassoon',
        answer2: 'French Horn',
        answer3: 'Flute',
        answer4: 'Tuba',
        correct: '3', //Flute
        message: `<img class="quiz-img" src="assets/images/flute-player.jpg" alt="Someone Playing the Flute"><p>It's the Flute!</p>`
    },
    {
        //6
        question: `<h2>Can you guess the name of this instrument?</h2>`,
        answer1: 'Oboe',
        answer2: 'Flute',
        answer3: 'French Horn',
        answer4: 'Clarinet',
        correct: '1', //Oboe
        message: `<p>It's the Oboe!</p>`
    },
    {
        //7
        question: `<h2>Which of these instruments is played with a double reed?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Clarinet',
        answer2: 'Flute',
        answer3: 'Bassoon',
        answer4: 'Trumpet',
        correct: '3', //Bassoon
        message: `<p>It's the Bassoon!</p>`
    },
    {
        //8
        question: `<h2>Which family is this instrument a member of?</h2>`,
        answer1: 'The Brass Family',
        answer2: 'The Percussion Family',
        answer3: 'The String Family',
        answer4: 'The Woodwind Family',
        correct: '4', //Clarinet - The Woodwind Family
        message: `<p>The Clarinet is a member of The Woodwind Family!</p>`
    },
    {
        //Brass Instruments
        //9
        question: `<h2>Which of these instruments sounds the highest?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Trumpet',
        answer2: 'Trombone',
        answer3: 'French Horn',
        answer4: 'Tuba',
        correct: '1', //Trumpet
        message: `<p>It's the Trumpet!</p>`
    },
    {
        //10
        question: `<h2>Can you guess the name of this instrument?</h2>`,
        answer1: 'English Horn',
        answer2: 'Trumpet',
        answer3: 'French Horn',
        answer4: 'Euphonium',
        correct: '3', //French Horn
        message: `<p>It's the French Horn!</p>`
    },
    {
        //11
        question: `<h2>Which of these instruments is played with a slide?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Tuba',
        answer2: 'Trombone',
        answer3: 'French Horn',
        answer4: 'Trumpet',
        correct: '2', //Trombone
        message: `<p>It's the Trombone!</p>`
    },
    {
        //12
        question: `<h2>Which of these instruments sounds the lowest?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Trombone',
        answer2: 'Euphonium',
        answer3: 'Tuba',
        answer4: 'Trumpet',
        correct: '3', //Tuba
        message: `<p>Its the Tuba!</p>`
    },
    {
        //13
        question: `<h2>Which family is this instrument a member of?</h2>`,
        answer1: 'The String Family',
        answer2: 'The Percussion Family',
        answer3: 'The Woodwind Family',
        answer4: 'The Brass Family',
        correct: '4', //Euphonium - The Brass Family
        message: `<p>The Euphonium is a member of The Brass Family!</p>`
    },
    {
        //Percussion Instruments
        //14
        question: `<h2>Which of these instruments is played using sticks?</h2>`,
        answer1: 'Harp',
        answer2: 'Snare Drum',
        answer3: 'Piano',
        answer4: 'Flute',
        correct: '2', //Snare Drum
        message: `<p>It's the Snare Drum!</p>`
    },
    {
        //15
        question: `<h2>Can you guess the name of this instrument?</h2>`,
        answer1: 'Timpani',
        answer2: 'Bass Drum',
        answer3: 'Euphonium',
        answer4: 'Snare Drum',
        correct: '1', //Timpani
        message: `<p>It's the Timpani!</p>`
    },
    {
        //16
        question: `<h2>Which of these instruments is a tuned percussion instrument?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Snare Drum',
        answer2: 'Xylophone',
        answer3: 'Cymbals',
        answer4: 'Bass Drum',
        correct: '2', //Xylophone
        message: `<p>It's the Xylophone!</p>`
    },
    {
        //17
        question: `<h2>Can you guess the name of this instrument?</h2>`,
        answer1: 'Bass Drum',
        answer2: 'Snare Drum',
        answer3: 'Timpani',
        answer4: 'Cymbals',
        correct: '1', //Bass Drum
        message: `<p>It's the Bass Drum!</p>`
    },
    {
        //18
        question: `<h2>Which family is this instrument a member of?</h2>`,
        answer1: 'The Woodwind Family',
        answer2: 'The Brass Family',
        answer3: 'The Percussion Family',
        answer4: 'The String Family',
        correct: '3', //Cymbals - The Percussion Family
        message: `<p>The Cymbals are a member of The Percussion Family!</p>`
    },
    {
        //Additional Questions
        //19
        question: `<h2>Which of these instruments has black and white keys?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Harp',
        answer2: 'Piano',
        answer3: 'Clarinet',
        answer4: 'Oboe',
        correct: '2', //Piano
        message: `<p>It's the Piano!</p>`
    },
    {
        //20
        question: `<h2>Which of these instruments is not used in an orchestra?</h2><img class="quiz-img" src="assets/images/question.png" alt="Question Mark">`,
        answer1: 'Viola',
        answer2: 'Cornet',
        answer3: 'Bass Clarinet',
        answer4: 'Guitar',
        correct: '4', //Guitar
        message: `<p>It's the Guitar!</p>`
    }
]