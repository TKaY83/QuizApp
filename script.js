let rightAnwsers = [];
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('./sounds/right.mp3');
let AUDIO_FAIL = new Audio('./sounds/wrong.mp3');
let FINAL_SOUND = new Audio('./sounds/tada.mp3');
// let BACKGROUND_SOUND = new Audio('./sounds/background.mp3');


function render() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
        if (allIsRight()) {
            allRight();
        }
    } else {
        updateProgressBar();
        showNextQuestion();
    }
}

function allRight(){
    document.getElementById('all-right').innerHTML = `<b>Großartig</b>, du hast alle fragen <b>Richtig</b> beantwortet!"`;

}


function allIsRight(){
    return rightAnwsers.length == 7;
}


function gameIsOver(){
    return currentQuestion >= questions.length;
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right-answer']}`;

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnwsers.push(1);
        AUDIO_SUCCESS.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
    document.getElementById('transparent-div').style.display = 'block';

}


function rightAnswerSelected(sQN, question){
    return sQN == question['right-answer']
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    removeDangerSuccess();
    showQuestion();
}


function removeDangerSuccess() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('end-picture').src = './img/question.jpg'
    document.getElementById('question-body').style.display = '';
    document.getElementById('end-screen').style.display = 'none';
    rightAnwsers = [];
    currentQuestion = 0;
    render();
}


function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style.display = 'none';
    document.getElementById('total-right-answers').innerHTML = rightAnwsers.length;
    document.getElementById('total-questions-end-screen').innerHTML = questions.length;
    document.getElementById('end-picture').src = './img/employee.jpg'
    document.getElementById('progress-bar').innerHTML = `100 %`;
    document.getElementById('progress-bar').style = `width: 100%`;
    FINAL_SOUND.play();
}


function updateProgressBar() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}


function showNextQuestion() {
    let question = questions[currentQuestion]; // hier wird die 0. stelle des json definiert, also die 1. frage
    document.getElementById('current-question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];//hier werden die jeweiligen fächer aus dem json 0 angezeigt 
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('transparent-div').style.display = 'none';
}
