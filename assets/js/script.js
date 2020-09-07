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

//This function will hide the welcome card and display the quiz when the start button is clicked
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

//This function displays the questions and answers in the quiz container
function displayQuestions(question) {
    //Sets the text of the question
    questionText.innerText = question.question;
    //Sets the image source
    questionImage.src = question.image;
    //Sets the text of the answer buttons
    answerA.innerText = question.a;
    answerB.innerText = question.b;
    answerC.innerText = question.c;
    answerD.innerText = question.d;

    //Adds a click event listener to each of the buttons which will display a message if the answer clicked is correct or incorrect
    const answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const correctAnswer = question.correct;
            if (button.innerText === correctAnswer) {
                //Correct audio will play
                correctSound();
                //If answer is correct this will display a well done message and hide all other content
                wellDone.classList.remove('hide-content');
                document.getElementById('message').innerText = question.message;
                tryAgain.classList.add('hide-content');
                quizContainer.classList.add('hide-content');
            } else {
                //Incorrect audio will play
                incorrectSound();
                //If answer is incorrect this will display a try again message in place of the image
                tryAgain.classList.remove('hide-content');
                questionImage.classList.add('hide-content');
                //Code below is from stack overflow - https://stackoverflow.com/questions/42228423/set-div-to-hidden-then-visible-after-time-delay
                //This will display the try again message for 1 second before showing the image again
                setTimeout(function () {
                    questionImage.classList.remove('hide-content');
                    tryAgain.classList.add('hide-content');
                }, 1000);
            };
        });
    });
}

//Adds a click event listener to the next button which will display the next question
nextButton.addEventListener('click', () => {
    wellDone.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    getQuestions();
    //Add conditional here
})

function correctSound() {
    const correct = new Audio('assets/audio/correct.mp3');
    correct.play();
}

function incorrectSound() {
    const incorrect = new Audio('assets/audio/incorrect.mp3');
    incorrect.play();
}

//Quiz Questions
const questions = [{
        question: 'Can you guess the name of this instrument?',
        image: 'assets/images/violin.png',
        a: 'Clarinet',
        b: 'Cello',
        c: 'Violin',
        d: 'Flute',
        correct: 'Violin',
        message: 'It\’s a Violin! The Violin is part of the string family. It has four strings which can be plucked or bowed by the player to make a sound.'
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