// calling all global veriables
var startBtn = document.querySelector(".start")
var timerEl = document.querySelector(".timer")
var questionContainer = document.querySelector("#question-container")
var questionTitle = document.querySelector(".question-title")
var optionContainer = document.querySelector(".option-container")
var score = 0
var secondsLeft = 120
var timerInterval;
var endScreen = document.querySelector('.navigation')
// an erray of questions, answers and correct answers 
var quizcontent = [
  {
    question: "In which state to do skydiving on Sunday is illegal for a single woman?",
    answers: [
      "Florida",
      "Chicago",
      "New York",
      "Minnesota"
    ],
    correct: "Florida"
  },

  {
    question: "The fear of constipation is known as?",
    answers: [
      "Chlamydia",
      "Coprastastaphobia",
      "Chikungunya",
      "Exfixia"
    ],
    correct: "Coprastastaphobia",
  },

  {
    question: "In which state to swear in front of the corpse is illegal?",
    answers: [
      "New jearsey",
      "Florida",
      "Texas",
      "Maryland"
    ],
    correct: "Texas"
  },
  {
    question: "In which country it's illegal to eat frogs with fried chicken is illegal?",
    answers: [
      "Georgia",
      "Spain",
      "France",
      "Russia"
    ],
    correct: "Georgia"
  },
  {
    question: "In which In which state to tease skunks animals is illegal?",
    answers: [
      "Minnesota",
      "Texas",
      "Colorado",
      "Hawaii"
    ],
    correct: "Minnesota"
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
  if (questionIdx === quizcontent.length) {
    endQuiz()
  }
  else {
    deployQuiz()
  }
}
// end quiz function and retun score 
function endQuiz() {
  endScreen.removeAttribute("class", "hide")
  clearInterval(timerInterval)
  questionContainer.setAttribute('class', "hide")
  var scoreCount = document.querySelector(".score")
  scoreCount.textContent = "your final score is " + secondsLeft
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







