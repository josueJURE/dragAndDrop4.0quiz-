const question = document.querySelector(".question");
const answerchoices = document.querySelector(".answerchoices");
const allChoices = Array.from(document.querySelector(".answerchoices").children)
const choiceA = document.querySelector(".choiceA");
const choiceB = document.querySelector(".choiceB");
const choiceC = document.querySelector(".choiceC");
const start = document.querySelector(".start");
const quizSection = document.querySelector(".quizSection");
const choices = document.querySelectorAll(".choice");


let activeQuestion = 0;



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
//
function renderQuestion() {
  let q = questions[activeQuestion]
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  question.innerHTML = q.question;
  // document.body.style.backgroundImage = q.questionImg
}

renderQuestion()

question.addEventListener("dragstart", function() {
  console.log("start")
});

question.addEventListener("dragend", function() {
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


function dragOver() {
  console.log("dragOver")
}

function dragEnter(e) {
  e.preventDefault();
  console.log("has entered");
}

function dragLeave() {
  console.log("has left")
}

function drop() {
  e.preventDefault()
  console.log("dropped")
}
