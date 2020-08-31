const startButton = document.getElementById('start-quiz');
const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const answerButton = document.getElementsByClassName('answer-button');

let randomQuestion, currentQuestion;

//When the start button is clicked the startQuiz function is executed
startButton.addEventListener('click', startQuiz);

//This function will hide the welcome card and display the quiz when executed
function startQuiz() {
    welcomeContainer.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    nextQuestion();
}

//The code below is from the Web Dev Simplified YouTube video Build a Quiz App with JavaScript - https://www.youtube.com/watch?v=riDzcEQbX6k&list=PLyn9ak24qaCvBSsurq-Q1fGKEXXUzsJmf&index=2&t=718s
//This will display the questions in a random order
function nextQuestion() {
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    displayQuestion(randomQuestion[currentQuestion]);
}

function displayQuestion(question) {
    //Set the question text for the h2 element in index.html
    questionText.innerText = question.question;
    const answers = question.answers.map(answer => answer.text);
    //Loop through answer buttons and add the answer array items to the text
    for (let i = 0; i < answerButton.length; i++) {
        answerButton[i].innerText = answers[i];
    }
    //Add an event listener to all answer buttons that will run the selectAnswer function when clicked
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => selectAnswer());
    });
}

function selectAnswer() {
    const correctAnswer = questions.answers;
    console.log(correctAnswer);
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