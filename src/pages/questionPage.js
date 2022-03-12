'use strict';

import {
    ANSWERS_LIST_ID,
    NEXT_QUESTION_BUTTON_ID,
    USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { SHOW_SCORE_ID } from "../constants.js";

export const initQuestionPage = (userInterface) => {


    userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

    const questionElement = createQuestionElement(currentQuestion.text);

    userInterface.appendChild(questionElement);


    const showScore = (correctAnswers, totalQuestions) => {
        const scoreElement = document.createElement("p");
        scoreElement.setAttribute("id", SHOW_SCORE_ID);
        scoreElement.innerHTML = String.raw ` <p class="score-box"> ${correctAnswers} / ${totalQuestions}</p> `;
        return scoreElement;
    };

    const currentScore = showScore(quizData.score, quizData.questions.length);
    userInterface.appendChild(currentScore);


    const answersListElement = document.getElementById(ANSWERS_LIST_ID);

    for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
        const answerElement = createAnswerElement(key, answerText);
        answerElement.setAttribute('data-key', key)
        answersListElement.appendChild(answerElement);
    };

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



let currentQuestion = quizData.questions[quizData.currentQuestionIndex];
let userAnswers = [];

console.log(userAnswers);
let score = 0;
const timeValue = 15;
let counter;

const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  initQuestionPage();
  startTimer(timeValue);

};

//Checks if selected answer is correct
const checkAnswer = (evt) => {

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const value = evt.target.value;
  const ull = document.getElementById(ANSWERS_LIST_ID);
  ull.style.pointerEvents = 'none';
  document.getElementById(NEXT_QUESTION_BUTTON_ID).style.visibility = 'visible';

  clearInterval(counter);
  
  userAnswers.push(value);
 
   if (value === currentQuestion.correct) {
     answerIsCorrect();
   } else {
     answerIsWrong();
   }
  
 //if answer is correct
 function answerIsCorrect() {
  quizData.score++;
  evt.target.style.backgroundColor = "green";

}

//if answer is wrong
function answerIsWrong() {
    quizData.score;
    evt.target.style.backgroundColor = "red";
    showCorrectAnswer();
    
  }
}

// Always shows the correct answers 
const showCorrectAnswer = () => {
  const buttons = document.querySelectorAll('button')
    
    buttons.forEach(button => {
      if (button.value === currentQuestion.correct){
        button.style.backgroundColor = "green";
      }
    })
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

 //saves answers on window reload
 localStorage.setItem("userAnswers", JSON.stringify(userAnswers));

}

//retrieves user's answers on page reload
window.onload = function() {

  if (localStorage.getItem('userAnswers')) {
    userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
   }
}
 
 
// Timer

export function startTimer(time) {
  
  counter = setInterval(timer, 1000);
  function timer() {
    const timeCount = document.querySelector('#timeCount')
    timeCount.textContent = time; 
    time--; 

    if (time < 9) {
      
      let addZero = timeCount.textContent;
      timeCount.textContent = '0' + addZero; 
    }
    if (time < 0) {
      
      clearInterval(counter); 
      timeCount.textContent = 'Time Off'; 
      showCorrectAnswer();
      document.getElementById(NEXT_QUESTION_BUTTON_ID).style.visibility = 'visible';

      const ull = document.getElementById(ANSWERS_LIST_ID);
      ull.style.pointerEvents = 'none';
    }
  }
}

