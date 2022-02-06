let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right-answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right-answer": 3
    },
    {
        "question": "Wie bindet man eine Website in deine Website ein?",
        "answer_1": "&lt;iframe&gt;, &ltframe&gt;, and &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right-answer": 2
    },
    {
        "question": "Wie stellt man Text am BESTEN fett dar?",
        "answer_1": "&lt;strong&gt;",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;sbold&gt;",
        "answer_4": "&lt;b&gt;",
        "right-answer": 1
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "form",
        "answer_4": "spellcheck",
        "right-answer": 1
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a[title] {...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right-answer": 1
    },
    {
        "question": "Wie definierst du in JavaSript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right-answer": 4
    },
];

let currentQuestion = 0; //die 1. (also 0.) frage wird aus dem json geholt

function render(){//wird beim fertigladen des html geladen
    document.getElementById('all-questions').innerHTML = questions.length;//zeigt die gesamtanzahl der fragen des arrays auf der card an 7
    showQuestion();
}

function showQuestion(){// wird auch geladen nachdem das html geladen wurde zeigt die frage und antworten an

    if (currentQuestion >= questions.length){
        //TODO: Show End Screen
    } else{
        let question = questions[currentQuestion]; // hier wird die 0. stelle des json definiert, also die 1. frage
        document.getElementById('current-question-number').innerHTML = currentQuestion + 1;
        document.getElementById('question-text').innerHTML = question['question'];//hier werden die jeweiligen fächer aus dem json 0 angezeigt 
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection){ // die per onklick function eingegebe parameter werden hier in die variable selection gespeichert
    let question = questions[currentQuestion];// wie oben 
    let selectedQuestionNumber = selection.slice(-1);//das letzte zeichen des strings wird abgerufen
    let idOfRightAnswer = `answer_${question['right-answer']}`;

    if (selectedQuestionNumber == question['right-answer']){// wenn letzte zahl in der variable selection 3 und die im json gespeicherte infomation auch 3 ist
        document.getElementById(selection).parentNode.classList.add('bg-success');//parentNode greift auf das übergeordnete element zu
    } else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false; //hebt das disablet attribut auf
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    removeDangerSuccess();
    showQuestion();


}

function removeDangerSuccess(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}