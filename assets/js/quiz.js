const startButton = document.getElementById('start-quiz');
const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');

const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-button'));

const wellDone = document.getElementById('well-done');
const wellDoneMessage = document.getElementById('message');
const nextButton = document.getElementById('next-button');
const tryAgain = document.getElementById('try-again');
const tryButton = document.getElementById('try-button');
const finish = document.getElementById('finish-container');
const finishButton = document.getElementById('finish-button');

const audioButton = document.getElementById('audio-button');

let availableQuestions = [];
let currentQuestion = {};
let questionCounter;

const maxQuestions = 3;

//Code below is based on James Q Quick's Build a Quiz App part 3 - https://www.youtube.com/watch?v=zZdQGs62cR8&t=13s

//The startQuiz function is called when the start button and the finish button are clicked
startButton.addEventListener('click', startQuiz);
finishButton.addEventListener('click', startQuiz);

//The startQuiz function will display the quiz questions and call the getQuestions function
function startQuiz() {
    finish.classList.add('hide-content');
    welcomeContainer.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    availableQuestions = [...questions]; //Spread operator
    questionCounter = 0;
    getQuestions();
}

//The getQuestions function will display the questions in a random order
function getQuestions() {
    if (availableQuestions.length === 0 || questionCounter === maxQuestions) {
        finish.classList.remove('hide-content');
        wellDone.classList.add('hide-content');
        quizContainer.classList.add('hide-content');
    }

    questionCounter++;
    console.log(questionCounter + " questionCounter");

    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //Random question index number
    // console.log(questionIndex + " questionIndex");

    currentQuestion = availableQuestions[questionIndex]; //Sets random question
    question.innerHTML = currentQuestion.question; //Sets innerHTML of the quiz question
    // console.log(currentQuestion);

    answers.forEach(answer => {
        const number = answer.dataset['number'];
        answer.innerText = currentQuestion['answer' + number]; //Sets innerText of answer buttons
    })

    availableQuestions.splice(questionIndex, 1); //Removes answered question from quiz
}

//Checks if answer clicked is correct or incorrect
answers.forEach(answer => {
    answer.addEventListener('click', e => {
        const selectedButton = e.target;
        const selectedAnswer = selectedButton.dataset['number'];

        if (selectedAnswer === currentQuestion.correct) {
            //Well Done message is displayed and correct sound is played
            correctSound();
            wellDone.classList.remove('hide-content');
            wellDoneMessage.innerHTML = currentQuestion.message;
            tryAgain.classList.add('hide-content');
            quizContainer.classList.add('hide-content');
        } else {
            //Try Again message is displayed and incorrect sound is played
            incorrectSound();
            tryAgain.classList.remove('hide-content');
            quizContainer.classList.add('hide-content');

            tryButton.addEventListener('click', () => {
                tryAgain.classList.add('hide-content');
                quizContainer.classList.remove('hide-content');
            })
        }
    })
})


//Play and pause audio
audioButton.addEventListener('click', () => {
    const instrument = new Audio(`assets/audio/${currentQuestion.audio}`);
    if (instrument.paused) {
        audioButton.innerHTML = `<i class="fas fa-pause"></i>`;
        instrument.play();
    } else {
        audioButton.innerHTML = `<i class="fas fa-play-circle"></i>`;
        instrument.pause();
    }
})

nextButton.addEventListener('click', () => {
    wellDone.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
    getQuestions();
})

//Plays correct sound when called
function correctSound() {
    const correct = new Audio('assets/audio/correct.mp3');
    correct.play();
}

//Plays incorrect sound when called
function incorrectSound() {
    const incorrect = new Audio('assets/audio/incorrect.mp3');
    incorrect.play();
}


//Quiz Questions
const questions = [{
        //String Instruments
        //1
        question: `<h2>Can you guess the name of this instrument?</h2><img class="quiz-img-portrait" src="assets/images/violin.jpg" alt="Violin">`,
        answer1: 'Double Bass',
        answer2: 'Violin',
        answer3: 'Cello',
        answer4: 'Flute',
        correct: '2', //Violin
        message: `<img class="quiz-img" src="assets/images/violin-player.jpg" alt="Someone Playing the Violin">
        <p>It's the Violin!</p>
        <p>The Violin is a member of The String Family.</p>
        <p>It has four strings which can be plucked or bowed by the player to make a sound.</p>
        <p>It is also the smallest and highest sounding instrument in The String Family.</p>`,
        audio: 'violin.mp3'
    },
    {
        //2
        question: `<h2>Which of these instruments has more than four strings?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Harp',
        answer2: 'Cello',
        answer3: 'Oboe',
        answer4: 'Piano',
        correct: '1', //Harp
        message: `<img class="quiz-img" src="assets/images/harp.jpg" alt="Harp">
        <p>It's the Harp!</p>
        <p>The Harp is a member of The String Family.</p>
        <p>It is one of the largest string instruments in an orchestra and has over 40 strings.</p>
        <p>The player plucks or strums the strings to make a sound.</p>`,
        audio: 'harp.mp3' //Not Working?
    },
    {
        //3
        question: `<h2>Which of these instruments sounds the lowest?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Trombone',
        answer2: 'French Horn',
        answer3: 'Clarinet',
        answer4: 'Double Bass',
        correct: '4', //Double Bass
        message: `<img class="quiz-img" src="assets/images/double-bass-player.jpg" alt="Someone Playing Double Bass">
        <p>It's the Double Bass!</p>
        <p>The Double Bass is a member of The String Family.</p>
        <p> It is one of the largest string instruments in an orchestra and it has four strings which can be plucked or bowed by the player to make a sound.</p>
        <p>The Double Bass is also often used in jazz and swing bands.</p>`,
        audio: 'double-bass.mp3'
    },
    {
        //4
        question: `<h2>Which family is this instrument a member of?</h2><img class="quiz-img-portrait" src="assets/images/cello.jpg" alt="Cello">`,
        answer1: 'The Percussion Family',
        answer2: 'The String Family',
        answer3: 'The Brass Family',
        answer4: 'The Woodwind Family',
        correct: '2', //The String Family - Cello
        message: `<img class="quiz-img" src="assets/images/cello-player.jpg" alt="Someone Playing the Cello">
        <p>The Cello is a member of The String Family!</p>
        <p>Other members of The String Family include the Violin, the Viola, the Double Bass and the Harp.</p>
        <p>The Cello has four strings which can be plucked or bowed by the player to make a sound.</p>`,
        audio: 'cello.mp3'
    },
    {
        //Woodwind Instruments
        //5
        question: `<h2>Which of these instruments sounds the highest?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Bassoon',
        answer2: 'French Horn',
        answer3: 'Flute',
        answer4: 'Tuba',
        correct: '3', //Flute
        message: `<img class="quiz-img" src="assets/images/flute.jpg" alt="Someone Playing the Flute">
        <p>It's the Flute!</p>
        <p>The Flute is a member of The Woodwind Family.</p>
        <p>Even though it is a woodwind instrument, it is made of metal rather than wood.</p>
        <p>The player makes a sound by blowing over the top of the mouthpiece and pressing the keys to produce different notes.</p>`
    },
    {
        //6
        question: `<h2>Can you guess the name of this instrument?</h2><img class="quiz-img" src="assets/images/oboe.jpg" alt="Oboe">`,
        answer1: 'Oboe',
        answer2: 'Flute',
        answer3: 'French Horn',
        answer4: 'Clarinet',
        correct: '1', //Oboe
        message: `<img class="quiz-img" src="assets/images/oboe-player.jpg" alt="Someone Playing the Oboe">
        <p>It's the Oboe!</p>
        <p>The Oboe is a member of The Woodwind Family.</p>
        <p>The Oboe is a double reed instrument. This means it is played with two reeds instead of one reed.</p>
        <p>It is also often confused with the Clarinet as the two instruments look very similar.</p>`
    },
    {
        //7
        question: `<h2>Which of these instruments is played with a double reed?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Clarinet',
        answer2: 'Flute',
        answer3: 'Bassoon',
        answer4: 'Trumpet',
        correct: '3', //Bassoon
        message: `<img class="quiz-img" src="assets/images/bassoon.jpg" alt="Someone Playing the Bassoon">
        <p>It's the Bassoon!</p>
        <p>The Bassoon is a member of The Woodwind Family.</p>
        <p>The Bassoon is a double reed instrument. This means it is played with two reeds instead of one reed.</p>
        <p>It is also one of the lowest sounding woodwind instruments and when unfolded it is 8 feet in length.</p>`
    },
    {
        //8
        question: `<h2>Which family is this instrument a member of?</h2><img class="quiz-img-portrait" src="assets/images/clarinet.jpg" alt="Clarinet">`,
        answer1: 'The Brass Family',
        answer2: 'The Percussion Family',
        answer3: 'The String Family',
        answer4: 'The Woodwind Family',
        correct: '4', //Clarinet - The Woodwind Family
        message: `<img class="quiz-img" src="assets/images/clarinet-player.jpg" alt="Someone Playing the Clarinet">
        <p>The Clarinet is a member of The Woodwind Family!</p>
        <p>Other members of The Woodwind Family include the Flute, the Oboe and the Bassoon.</p>
        <p> Unlike the Bassoon and the Oboe, the Clarinet is a single reed instrument.</p>
        <p>The player makes a sound by blowing into the mouthpiece and pressing the keys to produce different notes.</p>`
    },
    {
        //Brass Instruments
        //9
        question: `<h2>Which of these instruments sounds the highest?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Trumpet',
        answer2: 'Trombone',
        answer3: 'French Horn',
        answer4: 'Tuba',
        correct: '1', //Trumpet
        message: `<img class="quiz-img" src="assets/images/trumpet-player.jpg" alt="Someone Playing the Trumpet">
        <p>It's the Trumpet!</p>
        <p>The Trumpet is a member of The Brass Family.</p>
        <p>The player makes a sound by “buzzing” into the mouthpiece and pressing the valves to produce different notes.</p>
        <p>As well as being used in the orchestra, the Trumpet is also often used in jazz bands.</p>
        <p>It is also thought to be more than 3,500 years old, making it the oldest brass instrument.</p>`
    },
    {
        //10
        question: `<h2>Can you guess the name of this instrument?</h2><img class="quiz-img" src="assets/images/french-horn.jpg" alt="French Horn">`,
        answer1: 'English Horn',
        answer2: 'Trumpet',
        answer3: 'French Horn',
        answer4: 'Tuba',
        correct: '3', //French Horn
        message: `<img class="quiz-img" src="assets/images/french-horn-players.jpg" alt="Someone Playing the French Horn">
        <p>It's the French Horn!</p>
        <p>The French Horn is a member of The Brass Family.</p>
        <p>The player makes a sound by “buzzing” into the mouthpiece and pressing the valves to produce different notes.</p>
        <p>It is also considered to be an important instrument in the orchestra and can play a wide range of notes.</p>`
    },
    {
        //11
        question: `<h2>Which of these instruments is played with a slide?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Tuba',
        answer2: 'Trombone',
        answer3: 'French Horn',
        answer4: 'Trumpet',
        correct: '2', //Trombone
        message: `<img class="quiz-img" src="assets/images/trombone-player.jpg" alt="Someone Playing the Trombone">
        <p>It's the Trombone!</p>
        <p>The Trombone is a member of The Brass Family</p>
        <p>The player makes a sound by“ buzzing” into the mouthpiece but instead of pressing valves to produce different notes, the player pushes and pulls the slide on the instrument.</p>
        <p>As well as being used in the orchestra, the Trombone is also used in jazz bands and marching bands.</p>`
    },
    {
        //12
        question: `<h2>Which of these instruments sounds the lowest?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Trombone',
        answer2: 'Clarinet',
        answer3: 'Tuba',
        answer4: 'Trumpet',
        correct: '3', //Tuba
        message: `<img class="quiz-img" src="assets/images/tuba.jpg" alt="Tuba">
        <p>Its the Tuba!</p>
        <p>The Tuba is a member of The Brass Family.</p>
        <p>The player makes a sound by “buzzing” into the mouthpiece and pressing valves to produce different notes.</p>
        <p>It is the largest and lowest sounding instrument in The Brass Family.</p>`
    },
    {
        //Percussion Instruments
        //13
        question: `<h2>Which of these instruments is played using sticks?</h2><img class="quiz-img" src="assets/images/sticks.jpg" alt="Drum Sticks">`,
        answer1: 'Harp',
        answer2: 'Snare Drum',
        answer3: 'Piano',
        answer4: 'Flute',
        correct: '2', //Snare Drum
        message: `<img class="quiz-img" src="assets/images/snare-drum.jpg" alt="Snare Drum">
        <p>It's the Snare Drum!</p>
        <p>The Snare Drum is a member of The Percussion Family.</p>
        <p>It is usually played with drum sticks, but other sticks such as brushes are sometimes used to create different sound effects.</p>
        <p>As well as being used in the orchestra, the Snare Drum is also used in marching bands and is one of the drums used in a modern drum kit.</p>`
    },
    {
        //14
        question: `<h2>Can you guess the name of this instrument?</h2><img class="quiz-img-portrait" src="assets/images/timpani.jpg" alt="Timpani">`,
        answer1: 'Timpani',
        answer2: 'Bass Drum',
        answer3: 'Cymbals',
        answer4: 'Snare Drum',
        correct: '1', //Timpani
        message: `<img class="quiz-img-portrait" src="assets/images/timpani.jpg" alt="Timpani">
        <p>It's the Timpani!</p>
        <p>The Timpani are a member of The Percussion Family.</p>
        <p>They are also known as Kettle Drums.</p>
        <p>Unlike most drums, they can be tuned to produce different notes.</p>`
    },
    {
        //15
        question: `<h2>Which of these instruments is a tuned percussion instrument?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Snare Drum',
        answer2: 'Xylophone',
        answer3: 'Cymbals',
        answer4: 'Bass Drum',
        correct: '2', //Xylophone
        message: `<img class="quiz-img" src="assets/images/xylophone.jpg" alt="Xylophone">
        <p>It's the Xylophone!</p>
        <p>Th Xylophone is a member of The Percussion Family.</p>
        <p>It is a large instrument made up of wooden bars and each of these bars produces a different note when hit with a stick.</p>`
    },
    {
        //16
        question: `<h2>Which family is this instrument a member of?</h2><img class="quiz-img" src="assets/images/cymbals.jpg" alt="Cymbals">`,
        answer1: 'The Woodwind Family',
        answer2: 'The Brass Family',
        answer3: 'The Percussion Family',
        answer4: 'The String Family',
        correct: '3', //Cymbals - The Percussion Family
        message: `<img class="quiz-img" src="assets/images/cymbal-players.jpg" alt="Cymbal Players">
        <p>The Cymbals are a member of The Percussion Family!</p>
        <p>The Cymbals are large metal discs that can be played in different ways.</p>
        <p>They are often used in marching bands were the player will hold the Cymbals using straps, and crash them together to make a sound.</p>
        <p>They are also a big feature on a drum kit and can be played using a range of different sticks to make different sounds.</p>`
    },
    {
        //Additional Questions
        //17
        question: `<h2>Which of these instruments has black and white keys?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Harp',
        answer2: 'Piano',
        answer3: 'Clarinet',
        answer4: 'Oboe',
        correct: '2', //Piano
        message: `<img class="quiz-img" src="assets/images/piano-player.jpg" alt="Pianist">
        <p>It's the Piano!</p>
        <p>The Piano has the widest range of notes out of all the instruments.</p>
        <p>Most Pianos have 88 keys. These keys are pressed by the player to make a sound.</p>
        <p>As well as being used in the orchestra, the Piano is also used in a wide range of different bands including jazz bands and most modern pop bands.</p>`
    },
    {
        //18
        question: `<h2>Which of these instruments is not used in an orchestra?</h2><img class="quiz-img-portrait" src="assets/images/icons/question.png" alt="Question Mark">`,
        answer1: 'Viola',
        answer2: 'Cornet',
        answer3: 'Bass Clarinet',
        answer4: 'Guitar',
        correct: '4', //Guitar
        message: `<img class="quiz-img" src="assets/images/guitar-player.jpg" alt="Guitarist">
        <p>It's the Guitar!</p>
        <p>The Guitar is a member of The String Family.</p>
        <p>The player plucks or strums the strings to make a sound.</p>
        <p>The two most common types of guitar are Acoustic Guitars and Electric Guitars.</p>
        <p>Most Guitars are made or wood and have 6 strings, but some can have up to twelve strings.</p>`
    }
]