// calling all global veriables
var startBtn = document.querySelector(".start")
var timerEl = document.querySelector(".timer")
var questionContainer = document.querySelector("#question-container")
var questionTitle = document.querySelector(".question-title")
var optionContainer = document.querySelector(".option-container")
var score = 0
var secondsLeft = 10
var timerInterval;
var endScreen = document.querySelector('.navigation')
// an erray of questions, answers and correct answers 
var quizcontent = [
  {
    question: "question 1 goes here",
    answers: [
      "a. very diffeclt",
      "B. a little confusing",
      "C. i dont get it",
      "D. i wish i never signed up for this course"],
    correct: "a. very diffeclt"
  },

  {
    question: "how 2 difficult is java?",
    answers: [
      "very diffeclt",
      "a little confusing",
      "i dont get it",
      " i wish i never signed up for this course"],
    correct: "i dont get it",
  },

  {
    question: "how 3 difficult is java?",
    answers: [
      "very diffeclt",
      "a little confusing",
      "i dont get it",
      " i wish i never signed up for this course"],
    correct: "a little confusing"
  }

];

var questionIdx = 0
// function to deploye quiz when timer starts 
function deployQuiz() {
  var parentQuestion = quizcontent[questionIdx]
  questionTitle.textContent = parentQuestion.question
  // this will hide questions 
  optionContainer.innerHTML = ""
  // for each question collect value of answer 
  parentQuestion.answers.forEach(function (index) {
    var answerBtn = document.createElement('button')
    answerBtn.textContent = index
    answerBtn.setAttribute('value', index)
    // check answers upon click and campare it to checkanswer function 
    answerBtn.onclick = checkAnswer
    // load answers to options container in html 
    optionContainer.append(answerBtn)
  })

}
// checking for correct answer 
function checkAnswer() {
  if (this.value === quizcontent[questionIdx].correct) {
    console.log("correct")
  }
  else { console.log("incorrect") }
  questionIdx++
  if (questionIdx === quizcontent.length){
    endQuiz()
  }
  else {
  deployQuiz()
}}
// end quiz function and retun score 
function endQuiz(){
endScreen.removeAttribute("class", "hide")
clearInterval (timerInterval)
questionContainer.setAttribute('class', "hide")
var scoreCount = document.querySelector(".score")
scoreCount.textContent="your final score is " + secondsLeft
}





// start quiz upon click and start timer
startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test")


  timerInterval = setInterval(function () {
    secondsLeft--
    timerEl.textContent = secondsLeft + "seconds left";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz()
    }
  }, 1000);
  startBtn.setAttribute('class', 'hide')
  questionContainer.removeAttribute('class')
  deployQuiz()
  console.log("stop")
})







 