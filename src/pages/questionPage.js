'use strict';

import {

  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SKIP_QUESTION_BUTTON_ID,
  RESTART_QUIZ_BUTTON_ID,

} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { showResults } from '../views/resultsView.js';
import { quizData } from '../data.js';
//import { SHOW_SCORE_ID } from "../constants.js";


export const initQuestionPage = () => {

    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

    const questionElement = createQuestionElement(currentQuestion.text);
    userInterface.appendChild(questionElement);

   /* const showScore = (correctAnswers, totalQuestions) => {
        const scoreElement = document.createElement("p");
        scoreElement.setAttribute("id", SHOW_SCORE_ID);
        scoreElement.innerHTML = String.raw ` <p class="score-box"> ${correctAnswers} / ${totalQuestions}</p> `;
        return scoreElement;
    };

    const currentScore = showScore(quizData.score, quizData.questions.length);
    userInterface.appendChild(currentScore);*/


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


  document
  .getElementById(SKIP_QUESTION_BUTTON_ID)
  .addEventListener('click', skipQuestion);


};



let currentQuestion = quizData.questions[quizData.currentQuestionIndex];
let userAnswers = [];

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
    showResultPage();
    console.log('The questions finished')
    document.getElementById(NEXT_QUESTION_BUTTON_ID).style.visibility = 'hidden';
  }
};

const skipQuestion = () => {
  quizData.currentQuestionIndex++;
  initQuestionPage();
}

const showResultPage = () => {
  const resultBox = document.querySelector('.result-box');
  resultBox.classList.add('activeResult');
  const result = showResults();
  resultBox.appendChild(result);
  document.getElementById(RESTART_QUIZ_BUTTON_ID).addEventListener('click', () => {
    quizData.currentQuestionIndex = 0;
    initQuestionPage();
    score = 0; 
    resultBox.classList.remove('activeResult');
    document.getElementById('score').innerHTML = String.raw `${score} points`;
  });
  // resultBox.innerHTML = String.row`<p>Hoe gaat het? Your score is ${score * 10} Points</p>`  
  console.log('TADA');
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
   
   if (selectedAnswer.value === currentQuestion.correct) {
     answerIsCorrect();
   } else {
     answerIsWrong();
   }
  

//if answer is correct
function answerIsCorrect() {
  score++;
  selectedAnswer.style.backgroundColor = "green";
  // alert(`Correct! Your current score is ${score}`)
}

//if answer is wrong
function answerIsWrong() {
  score;
  selectedAnswer.style.backgroundColor = "#DE4C28";
  showCorrectAnswer();
  // alert(`You will get it right next time! Your current score is ${score}`);
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
  const selected = e.target;
  const answerObj = {
    'Question': quizData.currentQuestionIndex + 1,
    'Answer' : selected.value
  }
 userAnswers.push(answerObj);
 selectedAnswers.push(selected.value);
 console.log(selectedAnswers);

 //saves answers on window reload
 localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
 localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
}

//retrieves user's answers on page reload
window.onload = function() {

  if (localStorage.getItem('selectedAnswers')) {
    const savedSelected = JSON.parse(localStorage.getItem('selectedAnswers'));
    // console.log(savedSelected);
    if (localStorage.getItem('userAnswers')) {
     const savedUserAnswers = JSON.parse(localStorage.getItem('userAnswers'));
    //  console.log(savedUserAnswers);
     }
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

