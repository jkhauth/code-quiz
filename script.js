
var quiz = document.getElementById("questionBox");
var start = document.getElementById("start-button");

function startQuiz() {

    //WHEN BUTTON IS CLICKED HIDE CLASS GOES AWAY
    quiz.classList.remove("hide")
    start.classList.add("hide");

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
        
        //RANDOM QUESTION
        shufflequest = questions.sort(() => Math.random() - .5);
        currquestIndex = 0;
        document.getElementById("questionTitle").innerText = shufflequest[0].question; 
        

        console.log(shufflequest[0].question);
        console.log(shufflequest[0].answers[0].text);
    }
    
    newAnswers();
        function newAnswers(){    
        var answerbtn = document.createElement("button");
        answerbtn.classList.add("btn", "btn-secondary")
        answerbtn.innerHTML = shufflequest[0].answers[0].text;
        document.getElementById("answers").appendChild(answerbtn);
        
        var answerbtn = document.createElement("button");
        answerbtn.classList.add("btn", "btn-secondary")
        answerbtn.innerHTML = shufflequest[0].answers[1].text;
        document.getElementById("answers").appendChild(answerbtn);
        
        var answerbtn = document.createElement("button");
        answerbtn.classList.add("btn", "btn-secondary")
        answerbtn.innerHTML = shufflequest[0].answers[2].text;
        document.getElementById("answers").appendChild(answerbtn);
    }

    
    // var questionBox = document.getElementById("option1");
}

