var quiz = document.getElementById("questionBox");
var start = document.getElementById("start-button");

// STARTS QUIZ
function startQuiz() {

    // WHEN START BUTTON IS CLICKED IT GOES AWAY
    quiz.classList.remove("hide")
    start.classList.add("hide");

    // QUESTIONS - ANSWERS - SCORE - TIME
    var questions = [
        {
            question: "ampihans?",
            answers: [
                { text: "frogs", correct: true },
                { text: "lizards", correct: false },
                { text: "tadpols", correct: false }
            ]
        },
        {
            question: "What is 23+2?",
            answers: [
                { text: "ff48", correct: true },
                { text: "fd5", correct: false },
                { text: "cheeeta6", correct: false }
            ]
        },
        {
            question: "What is 25+2?",
            answers: [
                { text: "crocks41", correct: true },
                { text: "pans5", correct: false },
                { text: "peters6", correct: false }
            ]
        }
    ];

    var gametime = document.getElementById("time");
    var secondsleft = 20;

    var gamescore = document.getElementById("score");
    var score = 100
    gamescore.textContent = score


    thequiz();

    startTimer();

    // GAME TIMER
    function startTimer() {
        var timerInterval = setInterval(function () {
            secondsleft--;
            gametime.textContent = secondsleft + " seconds left"

            if (secondsleft === 5) {
                clearInterval(timerInterval);
                document.getElementById("questionBox").classList.add("hide")
            }
        }, 1000);

    }

    // IF WRONGANS SELECTED TIME IS SUBTRACTED AND SCORE DECREASED
    function wrongAns() {
    secondsleft -= 5;
    score -= 10;
    gamescore.textContent = score
    }
    
    // FIRST SET OF QUESTIONS
function thequiz() {

    // FILLS IN RESPECTED INFORMATION TO BEGIN GAME
    for (let i = 0; i < 3; i++) {
            document.getElementById("questionTitle").innerHTML = questions[0].question;
            var answerbtn1 = document.createElement("button");
            answerbtn1.classList.add("btn", "btn-secondary", "answerbtn");
            answerbtn1.innerHTML = questions[0].answers[i].text;
            answerbtn1.value = questions[0].answers[i].correct;
            answerbtn1.setAttribute("id", questions[0].answers[i].text);
            document.getElementById("answers").appendChild(answerbtn1);
    }

    // IF FIRST ANSWER IS MOVE TO NEXT QUESTIONS
    if (
        document.getElementById("frogs").addEventListener("click", function () {wrongAns()},function(){nextQues}),
        document.getElementById("lizards").addEventListener("click", function () { nextQues() }),
        document.getElementById("tadpols").addEventListener("click", function () { nextQues() })
        );



    // MOVES TO NEXT SET OF QUESTIONS
    function nextQues() {

        document.getElementById("frogs").classList.add("hide");
        document.getElementById("lizards").classList.add("hide");
        document.getElementById("tadpols").classList.add("hide");
            for (let i = 0; i < 3; i++) {
                document.getElementById("questionTitle").innerHTML = questions[1].question;
                var answerbtn1 = document.createElement("button");
                answerbtn1.classList.add("btn", "btn-secondary", "answerbtn");
                answerbtn1.innerHTML = questions[1].answers[i].text;
                answerbtn1.value = questions[1].answers[i].correct;
                answerbtn1.setAttribute("id", questions[1].answers[i].text);
                document.getElementById("answers").appendChild(answerbtn1);
            }

            if (
                document.getElementById("ff48").addEventListener("click", function () { nextQues2() }),
                document.getElementById("fd5").addEventListener("click", function () { nextQues2() }),
                document.getElementById("cheeeta6").addEventListener("click", function () { nextQues2() })
            );

            // MOVES TO NEXT SET OF QUESTIONS
            function nextQues2() {
                document.getElementById("ff48").classList.add("hide");
                document.getElementById("fd5").classList.add("hide");
                document.getElementById("cheeeta6").classList.add("hide");

                for (let i = 0; i < 3; i++) {
                    document.getElementById("questionTitle").innerHTML = questions[2].question;
                    var answerbtn1 = document.createElement("button");
                    answerbtn1.classList.add("btn", "btn-secondary", "answerbtn");
                    answerbtn1.innerHTML = questions[2].answers[i].text;
                    answerbtn1.value = questions[2].answers[i].correct;
                    answerbtn1.setAttribute("id", questions[2].answers[i].text);
                    document.getElementById("answers").appendChild(answerbtn1);
                }

            } //END OF nextQues2 FUNCTION
    } // END OF nextQues FUNCTION
} //END OF THEQUIZ FUNCTION



    console.log(document.getElementById("frogs").value)
    console.log(document.getElementById("tadpols").value)
    console.log(document.getElementById("lizards").value)

}


