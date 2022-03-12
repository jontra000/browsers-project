'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
  
 //adding event listener on click to check answer
 document
 .getElementById(ANSWERS_LIST_ID)
 .addEventListener('click', checkAnswer);

  //adding event listener on click to save selected answer
  document
  .getElementById(ANSWERS_LIST_ID)
  .addEventListener('click', saveAnswer);
};

const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
let userAnswers = [];
let score = 0;

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};

//Checks if selected answer is correct
const checkAnswer = (evt) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const targetValue = evt.target.value;
 
   if (targetValue === currentQuestion.correct) {
     answerIsCorrect();
   } else {
     answerIsWrong();
     showCorrectAnswer();
   }
   //if answer is correct
 function answerIsCorrect() {
  score++;
  evt.target.style.backgroundColor = "green";
  alert(`Correct! Your current score is ${score}`);
}
//if answer is wrong
  function answerIsWrong() {
  score;
  evt.target.style.backgroundColor = "red";
  alert(`You will get it right next time! Your current score is ${score}`);
  alert(`The correct answer is ${currentQuestion.correct}`);
  }
  function showCorrectAnswer() {
   ANSWERS_LIST_ID.forEach(x => {
 if (x.value !==  currentQuestion.correct){
   x.style.backgroundColor="red";
 } else {
   x.style.backgroundColor="green";
 }
   });
  }
}
  

 //saves user's selected answers 
const saveAnswer = (e) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const value = e.target.value;
  const answerObj = {
    'Question': quizData.currentQuestionIndex + 1,
    'Answer' : value
  }
  userAnswers.push(answerObj);
  console.log(userAnswers);

 //saves answers on window reload
 localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
}

//retrieves user's answers on page reload
window.onload = function() {
  if (localStorage.getItem('userAnswers')) {
    userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
  }


 



}
