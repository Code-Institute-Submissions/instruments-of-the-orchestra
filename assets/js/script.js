const startButton = document.getElementById('start-quiz');
const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-img');
const answerButton = document.getElementsByClassName('answer-button');
const nextButton = document.getElementById('next-button');
const wellDone = document.getElementById('well-done');
const tryAgain = document.getElementById('try-again');

//Answer Buttons
const answerA = document.getElementById('answer-a');
const answerB = document.getElementById('answer-b');
const answerC = document.getElementById('answer-c');
const answerD = document.getElementById('answer-d');

let randomQuestion, currentQuestion;

//When the start button is clicked the startQuiz function is executed
startButton.addEventListener('click', startQuiz);

//This function will hide the welcome card and display the quiz when executed
function startQuiz() {
    welcomeContainer.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    getQuestions();
}

//The code below is from the Web Dev Simplified YouTube video Build a Quiz App with JavaScript - https://www.youtube.com/watch?v=riDzcEQbX6k&list=PLyn9ak24qaCvBSsurq-Q1fGKEXXUzsJmf&index=2&t=718s
//This function will display the questions in a random order
function getQuestions() {
    randomQuestion = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    displayQuestions(randomQuestion[currentQuestion]);
}

//This function the questions and answers in the quiz container
function displayQuestions(question) {
    //Set the text of the question
    questionText.innerText = question.question;
    //Set the image source
    questionImage.src = question.image;
    //Set the text of the answer buttons
    answerA.innerText = question.a;
    answerB.innerText = question.b;
    answerC.innerText = question.c;
    answerD.innerText = question.d;

    const answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const correctAnswer = question.correct;
            if (button.innerText === correctAnswer) {
                wellDone.classList.remove('hide-content'); //Show well done message
                document.getElementById('message').innerText = question.message;
                tryAgain.classList.add('hide-content');
                quizContainer.classList.add('hide-content');
            } else {
                tryAgain.classList.remove('hide-content'); //Show try again message
            };
        });
    });
}

nextButton.addEventListener('click', () => {
    wellDone.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    getQuestions();
})

//Quiz Questions
const questions = [{
        question: 'Can you guess the name of this instrument?',
        image: 'assets/images/violin.png',
        a: 'Clarinet',
        b: 'Cello',
        c: 'Violin',
        d: 'Flute',
        correct: 'Violin',
        message: 'It\’s a Violin! The Violin is part of the string family. It has four strings which can be plucked or bowed by the player to make a sound!'
    },
    {
        question: 'Can you guess which family this instrument belongs to?',
        image: 'assets/images/trumpet.png',
        a: 'The Percussion Family',
        b: 'The Brass Family',
        c: 'The String Family',
        d: 'The Woodwind Family',
        correct: 'The Brass Family',
        message: 'It\'s a Trumpet!'
    }
]