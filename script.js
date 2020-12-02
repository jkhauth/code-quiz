
var quiz = document.getElementById("questionBox")

function startQuiz() {

    //WHEN BUTTON IS CLICKED HIDE CLASS GOES AWAY
    quiz.classList.remove("hide")

    //QUESTIONS AND ANSWERS
    const questions = [
        {
            question: "What is 2+2",
            answers: [
                { text: "49", correct: true },
                { text: "5", correct: false },
                { text: "6", correct: false }
            ]
        },
        {
            question: "What is 23+2",
            answers: [
                { text: "48", correct: true },
                { text: "5", correct: false },
                { text: "6", correct: false }
            ]
        },
        {
            question: "What is 25+2",
            answers: [
                { text: "41", correct: true },
                { text: "5", correct: false },
                { text: "6", correct: false }
            ]
        }
    ];

    //QUESTIONS ARE RANDOMLY CHOSEN
    randomQuestion();

    function randomQuestion(){
        shufflequest = questions.sort(() => Math.random() - .5);
        currquestIndex = 0;
        document.getElementById("questionTitle").innerText = shufflequest[0].question
        var newanswer = document.createElement("button");
        var answertext = document.createTextNode(shufflequest[0].answers.text);
        document.getElementById("first-answer").innerText = newanswer.appendChild(answertext);
        console.log(shufflequest[0].question);
        console.log(answertext);
    }
    
    
    
    //QUESTIONS AND ANSWERS TO QUIZ

    
    // var questionBox = document.getElementById("option1");
}

