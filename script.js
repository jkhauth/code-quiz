
var quiz = document.getElementById("questionBox");
var start = document.getElementById("start-button");


//GENERATES NEWS BUTTONS FOR ANSWERS


// GENERATES NEW QUIZ QUESTION
function startQuiz() {

    //WHEN BUTTON IS CLICKED HIDE CLASS GOES AWAY
    quiz.classList.remove("hide")
    start.classList.add("hide");

    //QUESTIONS AND ANSWERS
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

    thequiz(questions);

    function thequiz(questions){
        // FIRST SET OF QUESTIONS
        for (var i = 0; i < questions.length; i++){
            questions.forEach(question => {
            document.getElementById("questionTitle").innerText = questions[0].question; });
        }
        // FIRST SET OF ANSWERS
        if (true === true){
            var answerbtn1 = document.createElement("button")
            answerbtn1.classList.add("btn", "btn-secondary", "answerbtn-1");
            answerbtn1.innerHTML = questions[0].answers[0].text;
            document.getElementById("answers").appendChild(answerbtn1);
            var answerbtn2 = document.createElement("button")
            answerbtn2.classList.add("btn", "btn-secondary");
            answerbtn2.innerHTML = questions[0].answers[1].text;
            document.getElementById("answers").appendChild(answerbtn2);
            var answerbtn3 = document.createElement("button")
            answerbtn3.classList.add("btn", "btn-secondary");
            answerbtn3.innerHTML = questions[0].answers[2].text;
            document.getElementById("answers").appendChild(answerbtn3);  
            
            // IF CORRECT ANSWER IS CHOSEN 
            if (answerbtn1.addEventListener("click" , function() {
                document.body.style.backgroundColor = "black"
            }));
        
        }
    }
}
    //QUESTIONS ARE RANDOMLY CHOSEN
    // function randomQuestion(){
        
        //RANDOMIZE QUESTION AND ANSWERS
            //QUESTION
        // shufflequest = questions.sort(() => Math.random() - .5);
        // document.getElementById("questionTitle").innerText = shufflequest[0].question;
            //ANSWER
        // shuffleanswer = shufflequest[0].answers.sort(() => Math.random() - .5);
    // }
    

    // document.getElementById("answerbtn1").addEventListener("click",);
