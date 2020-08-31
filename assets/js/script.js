const startButton = document.getElementById('start-quiz');
const nextButton = document.getElementById('');
const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const answerButton = document.getElementsByClassName('answer-button');

let randomQuestion, currentQuestion;

//When the start button is clicked the startQuiz function is executed
startButton.addEventListener('click', startQuiz);

//This function adds and removes a css class that hides the welcome card and displays the quiz
//This function also sets the randomQuestion variable to a random number and sets the currentQuestion index to 0 
function startQuiz() {
    welcomeContainer.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    nextQuestion();
}

//This function calls the displayQuestion function and displays the questions in a random order
function nextQuestion() {
    displayQuestion(randomQuestion[currentQuestion]);
}

function displayQuestion(question) {
    questionText.innerText = question.question; //sets question text in HTML
    const answers = question.answers.map(answer => answer.text);
    for (let i = 0; i < answerButton.length; i++) { //pushes answer array into each button
        answerButton[i].innerText = answers[i];
    }
}

function selectAnswer() {

}

//Quiz Questions
const questions = [{
        question: 'Can you guess the name of this instrument?',
        //Image
        answers: [{
                text: 'Clarinet',
                correct: false
            },
            {
                text: 'Cello',
                correct: false
            },
            {
                text: 'Violin',
                correct: true
            },
            {
                text: 'Flute',
                correct: false
            }
        ],
    },
    {
        question: 'Can you guess which instrument makes this sound?',
        //Sound
        answers: [{
                text: 'Oboe',
                correct: false
            },
            {
                text: 'Clarinet',
                correct: false
            },
            {
                text: 'Trumpet',
                correct: false
            },
            {
                text: 'Bassoon',
                correct: true
            }
        ],
    },
    {
        question: 'Can you guess which family this instrument belongs to?',
        //Image
        answers: [{
                text: 'The Percussion Family',
                correct: false
            },
            {
                text: 'The Brass Family',
                correct: true
            },
            {
                text: 'The String Family',
                correct: false
            },
            {
                text: 'The Woodwind family',
                correct: false
            }
        ]
    }
]