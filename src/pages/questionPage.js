'use strict';

import {

  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { showResultPage } from './resultsPage.js';


export const initQuestionPage = () => {

    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

    const questionElement = createQuestionElement(currentQuestion.text);
    userInterface.appendChild(questionElement);


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


  //adding event listener on click to skip button

  document
  .getElementById(SKIP_QUESTION_BUTTON_ID)
  .addEventListener('click', skipQuestion);
};



let currentQuestion = quizData.questions[quizData.currentQuestionIndex];

export let selectedAnswers = [];
export let score = 0;

const timeValue = 15;
let counter;

const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  if (quizData.currentQuestionIndex < quizData.questions.length){
    currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    initQuestionPage();
    startTimer(timeValue);
  }else{
showResultPage;
    document.getElementById(NEXT_QUESTION_BUTTON_ID).style.visibility = 'hidden';
  }
};

//skips question
const skipQuestion = () => {
  quizData.currentQuestionIndex++;
  initQuestionPage();
  clearInterval(counter); 
  startTimer(timeValue);
  selectedAnswers.push("()");
}

//Checks if selected answer is correct
const checkAnswer = (evt) => {

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const selectedAnswer = evt.target;
  const ull = document.getElementById(ANSWERS_LIST_ID);
  ull.style.pointerEvents = 'none';
  document.getElementById(NEXT_QUESTION_BUTTON_ID).style.visibility = 'visible';
  document.getElementById(SKIP_QUESTION_BUTTON_ID).style.display = 'none';
  clearInterval(counter);

//saves user's selected answers
  selectedAnswers.push(selectedAnswer.value);

//saves answers on window reload
  localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));

   
   if (selectedAnswer.value === currentQuestion.correct) {
     answerIsCorrect();
   } else {
     answerIsWrong();
   }
  

//if answer is correct
function answerIsCorrect() {
  score++;
  selectedAnswer.style.backgroundColor = "green";
}

//if answer is wrong
function answerIsWrong() {
  score;
  selectedAnswer.style.backgroundColor = "#DE4C28";
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

    if (time < 5){
      timeCount.style.color = 'red';
    }

    if (time < 0) {
      
      clearInterval(counter); 
      timeCount.textContent = 'Time Off'; 
      showCorrectAnswer();
      document.getElementById(NEXT_QUESTION_BUTTON_ID).style.visibility = 'visible';
      document.getElementById(SKIP_QUESTION_BUTTON_ID).style.display = 'none';

      const ull = document.getElementById(ANSWERS_LIST_ID);
      ull.style.pointerEvents = 'none';
    }
  }
}

