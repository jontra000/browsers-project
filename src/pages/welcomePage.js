'use strict';

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage, startTimer } from './questionPage.js';

const info_box = document.querySelector('.info_box');
const exit_btn = info_box.querySelector('.quit');
const continue_btn = info_box.querySelector('.restart');

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

// const startQuiz = () => {
//   startTimer(15);
//   initQuestionPage();
  
// };

const startQuiz = () => {
  info_box.classList.add('activeInfo');       // Show info box
  
};

exit_btn.addEventListener('click', () => {
  info_box.classList.remove('activeInfo');    // Hide info box
});

continue_btn.addEventListener('click', () => {
  info_box.classList.remove('activeInfo'); //hide info box
  startTimer(15);
  initQuestionPage();
  // quiz_box.classList.add('activeQuiz'); //show quiz box
  // showQuestions(0); //calling showQestions function (first question)
});
