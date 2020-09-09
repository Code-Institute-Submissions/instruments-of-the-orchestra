const startButton = document.getElementById('start-quiz');
const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-button');
const nextButton = document.getElementById('next-button');
const wellDone = document.getElementById('well-done');
const wellDoneMessage = document.getElementById('message');
const tryAgain = document.getElementById('try-again');
const finishQuiz = document.getElementById('finish-container')

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
    getQuestions(questions);
}

//This function will display the questions in a random order
function getQuestions(a) {
    //Fisher-Yates Shuffle Method - https://javascript.info/task/shuffle
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    currentQuestion = 0;
    displayQuiz(a[currentQuestion]);
}

//This function displays the questions and answers in the quiz container
function displayQuiz(question) {
    //Sets the question text and image
    questionText.innerHTML = question.question;
    //Sets the text of the answer buttons
    answerA.innerText = question.a;
    answerB.innerText = question.b;
    answerC.innerText = question.c;
    answerD.innerText = question.d;

    //Adds a click event listener to each of the buttons which will display a message if the answer clicked is correct or incorrect
    answerButtons.forEach(button => {
        button.addEventListener('click', () => {
            const correctAnswer = question.correct;
            if (button.innerText === correctAnswer) {
                // correctSound(); - Temporary Mute
                //If answer is correct this will display a well done message and hide all other content
                wellDone.classList.remove('hide-content');
                wellDoneMessage.innerHTML = question.message;
                tryAgain.classList.add('hide-content');
                quizContainer.classList.add('hide-content');
            } else {
                // incorrectSound(); //Temporary Mute
                //If answer is incorrect this will display a try again message for 1 second
                tryAgain.classList.remove('hide-content');
                //Code below is from stack overflow - https://stackoverflow.com/questions/42228423/set-div-to-hidden-then-visible-after-time-delay
                setTimeout(function () {
                    tryAgain.classList.add('hide-content');
                }, 1000);
            };
        });
    });
    nextQuestion();
}

//Adds a click event listener to the next button which will display the next question
//Bug: some questions are repeated and quiz doesn't end - works with one question
function nextQuestion() {
    nextButton.addEventListener('click', () => {
        getQuestions(questions);
        ++currentQuestion;
        if (currentQuestion === questions.length) {
            finishQuiz.classList.remove('hide-content');
            wellDone.classList.add('hide-content');
        } else {
            wellDone.classList.add('hide-content');
            quizContainer.classList.remove('hide-content');
        };
    })
}


//Bug: both sounds sometimes play together when a button is clicked
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
        //String Instruments
        //1
        question: `<h2>Can you guess the name of this instrument?</h2><br><img class="question-img" src="assets/images/violin.jpg" alt="Violin">`,
        a: 'Double Bass',
        b: 'Violin',
        c: 'Cello',
        d: 'Flute',
        correct: 'Violin',
        message: `<img class="question-img" src="" alt=""><p>It's the Violin!</p>`
    },
    {
        //2
        question: `<h2>Which of these string instruments has more than four strings?</h2>`,
        a: 'Harp',
        b: 'Cello',
        c: 'Oboe',
        d: 'Piano',
        correct: 'Harp',
        message: `<img class="question-img" src="" alt="Harp"><br><p>It's the Harp!</p>`
    },
    //     {
    //         //3
    //         question: 'Which of these instruments sounds the lowest?',
    //         image: '',
    //         a: 'Trombone',
    //         b: 'French Horn',
    //         c: 'Clarinet',
    //         d: 'Double Bass',
    //         correct: 'Double Bass',
    //         message: 'It\'s the Double Bass!'
    //     },
    //     {
    //         //4
    //         question: 'What family is this instrument a member of?',
    //         image: '',
    //         a: 'The Percussion Family',
    //         b: 'The String Family',
    //         c: 'The Brass Family',
    //         d: 'The Woodwind Family',
    //         correct: 'The String Family', //Cello
    //         message: 'The Cello is a member of The String Family!'
    //     },
    //     {
    //         //Woodwind Instruments
    //         //5
    //         question: 'Which of these instruments sounds the highest?',
    //         image: '',
    //         a: 'Bassoon',
    //         b: 'French Horn',
    //         c: 'Flute',
    //         d: 'Tuba',
    //         correct: 'Flute',
    //         message: 'It\'s the Flute!'
    //     },

    //     {
    //         //6
    //         question: 'Can you guess the name of this instrument?',
    //         image: '',
    //         a: 'Oboe',
    //         b: 'Flute',
    //         c: 'French Horn',
    //         d: 'Clarinet',
    //         correct: 'Oboe',
    //         message: 'It\'s the Oboe!'
    //     },
    //     {
    //         //7
    //         question: 'Which of these woodwind instruments is played with a double reed?',
    //         image: '',
    //         a: 'Clarinet',
    //         b: 'Flute',
    //         c: 'Bassoon',
    //         d: 'Trumpet',
    //         correct: 'Bassoon',
    //         message: 'It\'s the Bassoon!'
    //     },
    //     {
    //         //8
    //         question: 'Which family is this instrument a member of?',
    //         image: '',
    //         a: 'The Brass Family',
    //         b: 'The Percussion Family',
    //         c: 'The String Family',
    //         d: 'The Woodwind Family',
    //         correct: 'The Woodwind Family', //Clarinet
    //         message: 'The Clarinet is a member of The Woodwind Family!'
    //     },
    //     {
    //         //Brass Instruments
    //         //9
    //         question: 'Which of these instruments sounds the highest?',
    //         image: '',
    //         a: 'Trumpet',
    //         b: 'Trombone',
    //         c: 'French Horn',
    //         d: 'Tuba',
    //         correct: 'Trumpet',
    //         message: 'It\'s the Trumpet!'
    //     },
    //     {
    //         //10
    //         question: 'Can you guess the name of this instrument?',
    //         image: '',
    //         a: 'English Horn',
    //         b: 'Trumpet',
    //         c: 'French Horn',
    //         d: 'Euphonium',
    //         correct: 'French Horn',
    //         message: 'It\'s the French Horn!'
    //     },
    //     {
    //         //11
    //         question: 'Which of these instruments is played with a slide?',
    //         image: '',
    //         a: 'Tuba',
    //         b: 'Trombone',
    //         c: 'French Horn',
    //         d: 'Trumpet',
    //         correct: 'Trombone',
    //         message: 'It\'s the Trombone!'
    //     },
    //     {
    //         //12
    //         question: 'Which of these instruments sounds the lowest?',
    //         image: '',
    //         a: 'Trombone',
    //         b: 'Euphonium',
    //         c: 'Tuba',
    //         d: 'Trumpet',
    //         correct: 'Tuba',
    //         message: 'It\'s the Tuba!'
    //     },
    //     {
    //         //13
    //         question: 'Which family is this instrument a member of?',
    //         image: '',
    //         a: 'The String Family',
    //         b: 'The Percussion Family',
    //         c: 'The Woodwind Family',
    //         d: 'The Brass Family',
    //         correct: 'The Brass Family', //Euphonium
    //         message: 'The Euphonium is a member of The Brass Family!'
    //     },
    //     {
    //         //Percussion Instruments
    //         //14
    //         question: 'Which of these instruments is played using sticks?',
    //         image: '',
    //         a: 'Harp',
    //         b: 'Snare Drum',
    //         c: 'Piano',
    //         d: 'Flute',
    //         correct: 'Snare Drum',
    //         message: 'It\'s the Snare Drum!'
    //     },
    //     {
    //         //15
    //         question: 'Can you guess the name of this instrument?',
    //         image: '',
    //         a: 'Timpani',
    //         b: 'Bass Drum',
    //         c: 'Euphonium',
    //         d: 'Snare Drum',
    //         correct: 'Timpani',
    //         message: 'It\'s the Timpani!'
    //     },
    //     {
    //         //16
    //         question: 'Which of these percussion instruments is a tuned percussion instrument?',
    //         image: '',
    //         a: 'Snare Drum',
    //         b: 'Xylophone',
    //         c: 'Cymbals',
    //         d: 'Bass Drum',
    //         correct: 'Xylophone',
    //         message: 'It\'s the Xylophone!'
    //     },
    //     {
    //         //17
    //         question: 'Can you guess the name of this instrument?',
    //         image: '',
    //         a: 'Bass Drum',
    //         b: 'Snare Drum',
    //         c: 'Timpani',
    //         d: 'Cymbals',
    //         correct: 'Bass Drum',
    //         message: 'It\'s the Bass Drum!'
    //     },
    //     {
    //         //18
    //         question: 'Which family is this instrument a member of?',
    //         image: '',
    //         a: 'The Woodwind Family',
    //         b: 'The Brass Family',
    //         c: 'The Percussion Family',
    //         d: 'The String Family',
    //         correct: 'The Percussion Family', //Cymbals
    //         message: 'The Cymbals are a member of The Percussion Family!'
    //     },
    //     {
    //         //Additional Questions
    //         //19
    //         question: 'Which of these instruments has black and white keys?',
    //         image: '',
    //         a: 'Harp',
    //         b: 'Piano',
    //         c: 'Clarinet',
    //         d: 'Oboe',
    //         correct: 'Piano',
    //         message: 'It\'s the Piano!'
    //     },
    //     {
    //         //20
    //         question: 'Which of these instruments is not used in an orchestra?',
    //         image: '',
    //         a: 'Viola',
    //         b: 'Cornet',
    //         c: 'Bass Clarinet',
    //         d: 'Guitar',
    //         correct: 'Guitar',
    //         message: 'It\'s the Guitar!'
    //     }
]