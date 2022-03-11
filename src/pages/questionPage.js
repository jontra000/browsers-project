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
  
 //adding event listener on click
 document
 .getElementById(ANSWERS_LIST_ID)
 .addEventListener('click', checkAnswer);
};

const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
console.log(currentQuestion.correct);
let userAnswers = [];
//let score = 0;

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};

//Checks if selected answer is correct
const checkAnswer = (evt) => {

  const value = evt.target.value;
     userAnswers.push(value);
 
   if (value === currentQuestion.correct) {
     answerIsCorrect();
   } else {
     answerIsWrong();
   }
 }
 
 //if answer is correct
 function answerIsCorrect() {
   //score++;
   alert("Correct!");
 }
 
 //if answer is wrong
 function answerIsWrong() {
   //score;
   alert("You'll get it right next time!")
 }


