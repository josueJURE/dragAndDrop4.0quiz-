const question = document.querySelector(".question");
const answerchoices = document.querySelector(".answerchoices");
const choiceA = document.querySelector(".choiceA");
const choiceB = document.querySelector(".choiceB");
const choiceC = document.querySelector(".choiceC");
const start = document.querySelector(".start");
const quizSection = document.querySelector(".quizSection")

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
}

renderQuestion()
