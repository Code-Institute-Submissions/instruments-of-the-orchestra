const startButton = document.getElementById('start-quiz');
const nextButton = document.getElementById('');
const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');

let randomQuestion, currentQuestion;

//When the start button is clicked the startQuiz function is executed
startButton.addEventListener('click', startQuiz);

//startQuiz function adds and removes a css class to hide and display different content
//displays questions in a random order each time the quiz is played
function startQuiz() {
    welcomeContainer.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    nextQuestion();
}

function nextQuestion() {
    displayQuestion(randomQuestion[currentQuestion]);
}

function displayQuestion(question) {
    questionText.innerText = question.question; //sets question text in HTML
    const answerButton = document.getElementsByClassName('answer-button');
    for (let i = 0; i < answerButton.length; i++) {
        console.log(answerButton.item(i));
    }
    question.answers.forEach(answer => console.log(answer.text)); //find a way to push individual elements into button
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
                text: 'TheWoodwind family',
                correct: false
            }
        ]
    }
]