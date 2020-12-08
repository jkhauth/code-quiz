//QUIZ SECTION
var quiz = document.getElementById("questionBox");
var start = document.getElementById("start-button");
var gametime = document.getElementById("time");
var secondsleft = 10;
var gamescore = document.getElementById("score");
var scoreBoard = document.getElementById("scoreBoard")
var score = 100
gamescore.textContent = score
//HIGHSCORE SECTION
var highscores = [];
var highscore = document.getElementById("highscore"); //form
var highscoreInput = document.getElementById("highscoreInput"); //user input
var saveHighscore = document.getElementById("saveHighscore"); //submit highscore
var highscoreList = document.getElementById("scores"); // ul list
var savedScores = localStorage.getItem("High Score")


var scoretextold = document.createElement("p");
scoretextold.innerText = savedScores
highscoreList.appendChild(scoretextold)

//CURRENTLY SETS EVERYTHING INTO A STRING
highscore.addEventListener("submit", function(event) {
event.preventDefault();
if (savedScores === 0 || null){
    savedScores = highscoreInput;
    highscores.slice(1).push(savedScores)
}
//EMPTY ARRAY WITH LAST INPUT
highscores.push(savedScores);
var scoretext = document.createElement("p");
scoretext.innerText =" " + "Name: " + " "  + highscoreInput.value + " " + "Score: " + score + " ";
//USER INPUT WITH LAST INPUT
highscores.push(" " +"Name: " + "" + highscoreInput.value + " " + "Score: "+ score + " ");
//USER INPUT + LAST INPUT = NEW VARIABLE
localStorage.setItem("High Score", (highscores));
//clears out what is every in the textbox
highscoreInput.value = "";
highscoreList.appendChild(scoretext);
}
);


// STARTS QUIZ
function startQuiz() {

// WHEN START BUTTON IS CLICKED IT GOES AWAY
quiz.classList.remove("hide")
scoreBoard.classList.add("hide")
start.classList.add("hide");
highscoreInput.classList.add("hide");
saveHighscore.classList.add("hide");

// QUESTIONS - ANSWERS - SCORE - TIME
var questions = [
{
question: "Which is NOT a program language",
answers: [
{ text: "HTML"},
{ text: "CSS"},
{ text: "ENGLISH"}
]
},
{
question: "Which is a tag for heading title?",
answers: [
{ text: "H1"},
{ text: "P"},
{ text: "DIV"}
]
},
{
question: "How do you call a class in CSS?",
answers: [
{ text: ".EXAMPLE"},
{ text: "#EXAMPLE"},
{ text: "EXAMPLE"}
]
}
];

thequiz();

startTimer();

// GAME TIMER
function startTimer() {
var timerInterval = setInterval(function () {
secondsleft--;
gametime.textContent = secondsleft + " seconds left";

//DISPLAY HIGHSCORE WHEN TIME RUNS OUT
if (secondsleft === 0) {
clearInterval(timerInterval);
scoreBoard.classList.remove("hide");
highscoreInput.classList.remove("hide");
saveHighscore.classList.remove("hide");
}
}, 1000);
}

// IF WRONGANS SELECTED TIME IS SUBTRACTED AND SCORE DECREASED
function wrongAns() {
secondsleft -= 5;
score -= 10;
gamescore.textContent = score
}

function rightAns() {
score += 10;
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

// IF FIRST ANSWER IS SELECTED, MOVE TO NEXT QUESTIONS
if (
document.getElementById("HTML").addEventListener("click", function () {nextQues()}),
document.getElementById("HTML").addEventListener("click", function () {wrongAns()}),
document.getElementById("CSS").addEventListener("click", function () {nextQues()}),
document.getElementById("CSS").addEventListener("click", function () {wrongAns()}),
document.getElementById("ENGLISH").addEventListener("click", function (){nextQues()}),
document.getElementById("ENGLISH").addEventListener("click", function () {rightAns()})
);

// MOVES TO NEXT SET OF QUESTIONS
function nextQues() {
//HIDE PREVIOUS ANSWERS
document.getElementById("HTML").classList.add("hide");
document.getElementById("CSS").classList.add("hide");
document.getElementById("ENGLISH").classList.add("hide");

//LOAD NEW ANSWERS
for (let i = 0; i < 3; i++) {
document.getElementById("questionTitle").innerHTML = questions[1].question;
var answerbtn1 = document.createElement("button");
answerbtn1.classList.add("btn", "btn-secondary", "answerbtn");
answerbtn1.innerHTML = questions[1].answers[i].text;
answerbtn1.value = questions[1].answers[i].correct;
answerbtn1.setAttribute("id", questions[1].answers[i].text);
document.getElementById("answers").appendChild(answerbtn1);
}

//IF SECOND ANSWER IS SELECTED, MOVE TO NEXT QUESTIONS
if (
document.getElementById("H1").addEventListener("click", function () {nextQues2()}),
document.getElementById("H1").addEventListener("click", function () {rightAns()}),
document.getElementById("P").addEventListener("click", function () {nextQues2()}),
document.getElementById("P").addEventListener("click", function () {wrongAns()}),
document.getElementById("DIV").addEventListener("click", function () {nextQues2()}),
document.getElementById("DIV").addEventListener("click", function () {wrongAns()})
);

// MOVES TO NEXT SET OF QUESTIONS
function nextQues2() {
document.getElementById("H1").classList.add("hide");
document.getElementById("P").classList.add("hide");
document.getElementById("DIV").classList.add("hide");

//LOADED SECOND QUESTIONS
for (let i = 0; i < 3; i++) {
document.getElementById("questionTitle").innerHTML = questions[2].question;
var answerbtn1 = document.createElement("button");
answerbtn1.classList.add("btn", "btn-secondary", "answerbtn");
answerbtn1.innerHTML = questions[2].answers[i].text;
answerbtn1.value = questions[2].answers[i].correct;
answerbtn1.setAttribute("id", questions[2].answers[i].text);
document.getElementById("answers").appendChild(answerbtn1);
}

//IF FINAL QUESTIONS ARE ANSWERED
if (
document.getElementById(".EXAMPLE").addEventListener("click", function () {gameover()}),
document.getElementById(".EXAMPLE").addEventListener("click", function () {rightAns()}),
document.getElementById("#EXAMPLE").addEventListener("click", function () {gameover()}),
document.getElementById("#EXAMPLE").addEventListener("click", function () {wrongAns()}),
document.getElementById("EXAMPLE").addEventListener("click", function () {gameover()}),
document.getElementById("EXAMPLE").addEventListener("click", function () {wrongAns()})
);

function gameover(){
    document.getElementById("questionTitle").classList.add("hide");
    document.getElementById(".EXAMPLE").classList.add("hide");
    document.getElementById("#EXAMPLE").classList.add("hide");
    document.getElementById("EXAMPLE").classList.add("hide");
    scoreBoard.classList.remove("hide");
    highscoreInput.classList.remove("hide");
    saveHighscore.classList.remove("hide");
}





} //END OF nextQues2 FUNCTION
} // END OF nextQues FUNCTION
} //END OF THEQUIZ FUNCTION


console.log(localStorage)
}

