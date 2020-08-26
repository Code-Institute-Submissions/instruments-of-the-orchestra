const startButton = document.getElementById('start-quiz');
const welcomeContainer = document.getElementById('welcome-container');
const quizContainer = document.getElementById('quiz-container');

//When the start button is clicked, the startQuiz function is executed
startButton.addEventListener('click', startQuiz);

/* The startQuiz function adds the class hide-content to the div with the id welcome-container and 
removes the class hide-content from the div with the id quiz-container*/
function startQuiz() {
    welcomeContainer.classList.add('hide-content');
    quizContainer.classList.remove('hide-content');
}

function nextQuestion(question) {

}

function selectAnswer() {

}

//Add quiz questions