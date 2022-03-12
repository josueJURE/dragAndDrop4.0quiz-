const questionQuiz = document.querySelector(".question");
const answerChoices = document.querySelector(".answerchoices");
const allChoices = Array.from(document.querySelector(".answerchoices").children);
const choiceA = document.querySelector(".choiceA");
const choiceB = document.querySelector(".choiceB");
const choiceC = document.querySelector(".choiceC");
const start = document.querySelector(".start");
const quizSection = document.querySelector(".quizSection");
const choices = document.querySelectorAll(".choice");
const answerSection = document.querySelector(".answerSection");
const counter = document.querySelector(".counter");
const timerBar = document.querySelector(".timerBar");
const finalScore = document.querySelector(".finalScore");
const parent = document.querySelector(".parent");
console.log(quizSection)

let questions = [

  {
    question: "How many Grand Slam men's singles titles has he won?",
    choiceA: 10,
    choiceB: 15,
    choiceC: 20,
    questionImg: "url(images/federer.jpeg)",
    correctAnswer: 20,
  },

  {
    question: "How many Formula One World Championship has he won?",
    choiceA: 5,
    choiceB: 7,
    choiceC: 10,
    questionImg: "url(images/hamilton.jpeg)",
    correctAnswer: 7,
  },

  {
    question: "How many NBA title has Lebron won?",
    choiceA: 6,
    choiceB: 3,
    choiceC: 4,
    questionImg: "url(images/LeBron.png)",
    correctAnswer: 4,
  },

  {
    question: "How many Ballon D'or has the Argentinina won?",
    choiceA: 5,
    choiceB: 6,
    choiceC: 7,
    questionImg: "url(images/LeBron.png)",
    correctAnswer: 7,
  },

]

let lastQuestion = questions.length - 1;
let activeQuestion = 0;
let count = 0;
let score = 0;
let x = 0;
let timeUp = 10;
let timerBarLength = 800;
let unitBar = timerBarLength / timeUp;
let dragged;

start.addEventListener("click", startQuiz)

function startQuiz() {
  start.style.visibility = "hidden";
  parent.style.visibility = "visible";
  renderQuestion();
  progressBar();
  setInterval(timerBarFunction, 1000);
  setInterval(counterFunction, 1000);
}

function timerBarFunction() {
  if(count < timeUp) {
    timerBar.style.width = `${count*unitBar}px`
    count++;
  } else {
    count = 0;
  }
}

function progressBar() {
  for(var questionIndex = 0; questionIndex < questions.length; questionIndex++) {
    answerSection.innerHTML += `<div class="progress-boxes" id=${questionIndex}></div>`
  }
}

function counterFunction() {
  if(x <= timeUp) {
    counter.innerHTML = x;
    x++;
  } else {
    x = 0;
    nextQuestion();
    wrongAnswer();
  }
}

function renderQuestion() {
  let q = questions[activeQuestion]
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  questionQuiz.innerHTML = q.question;
  // document.body.style.backgroundImage = q.questionImg
}



questionQuiz.addEventListener("drag", function(e) {

})

questionQuiz.addEventListener("dragstart", function(e) {
  console.log("start");
  dragged = e.target;
  console.log(dragged.innerHTML)
});

questionQuiz.addEventListener("dragend", function() {
  console.log('end')
});

allChoices.forEach((choice) => {
  choice.addEventListener("dragover", dragOver)
});

allChoices.forEach(choice => {
  choice.addEventListener("dragenter", dragEnter)
});

allChoices.forEach(choice => {
  choice.addEventListener("dragleave", dragLeave)
});

allChoices.forEach(choice => {
  choice.addEventListener("drop", drop)
})


function dragOver(e) {
  e.preventDefault()
  console.log("dragover")
}

function dragEnter(e) {
  e.preventDefault();
  console.log("dragenter");
}

function dragLeave() {
  console.log("dragleave")
}

function drop(e) {
  e.preventDefault()
  if(parseInt(e.target.innerHTML) !== questions[activeQuestion].correctAnswer) {
    wrongAnswer();
    nextQuestion()
  } else {
    correctAnswer();
    score++;
    e.target.appendChild(dragged);
    nextQuestion();
    newElement();

  }
}

function correctAnswer() {
  document.getElementById(activeQuestion).style.backgroundColor = "green";
}
function wrongAnswer() {
  document.getElementById(activeQuestion).style.backgroundColor = "red";
}

function nextQuestion() {
  count = 0;
  if(activeQuestion < lastQuestion) {
    activeQuestion++
    renderQuestion();
  } else {
    renderScore();
  }
}

function renderScore() {
  finalScore.innerHTML = score;
  finalScore.style.visibility = "visible";
}

function newElement() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "question");
  newDiv.setAttribute("draggable", "true");
  newDiv.innerHTML = questions[activeQuestion].question;
  // parent.appendChild(newDiv);
  document.body.insertBefore(newDiv, answerChoices.nextSibling);
}
