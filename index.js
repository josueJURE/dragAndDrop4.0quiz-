const questionQuiz = document.querySelector(".question");
const answerchoices = document.querySelector(".answerchoices");
const allChoices = Array.from(document.querySelector(".answerchoices").children)
const choiceA = document.querySelector(".choiceA");
const choiceB = document.querySelector(".choiceB");
const choiceC = document.querySelector(".choiceC");
const start = document.querySelector(".start");
const quizSection = document.querySelector(".quizSection");
const choices = document.querySelectorAll(".choice");
const answerSection = document.querySelector(".answerSection");
const counter = document.querySelector(".counter");



let activeQuestion = 0;
let count = 0;
let timeUp = 10;
let dragged;




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


function progressBar() {
  for(var questionIndex = 0; questionIndex < questions.length; questionIndex++) {
    answerSection.innerHTML += `<div class="progress-boxes" id=${questionIndex}></div>`
  }
}




function counterFunction() {
  if(count <= timeUp) {
    counter.innerHTML = count;
    count++
  } else {
    count = 0;
  }
}

setInterval(counterFunction, 1000);
//
function renderQuestion() {
  let q = questions[activeQuestion]
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  questionQuiz.innerHTML = q.question;
  // document.body.style.backgroundImage = q.questionImg
}

renderQuestion()

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
  if(parseInt(e.target.innerHTML) !== questions[activeQuestion].correctAnswer) return;
  e.target.appendChild(dragged)
}
