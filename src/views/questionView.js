'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID, SKIP_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { score } from '../pages/questionPage.js'

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  element.setAttribute('id', 'displayUI');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${quizData.currentQuestionIndex + 1}. ${question}</h1>

    <div class="timeDiv">
      <p id="time-left">TIME LEFT:</p>
      <p id="timeCount">15</p> 
      <p id="score">Score: ${score * 10} points </p>
    </div>

    <ul id="${ANSWERS_LIST_ID}">

    </ul>

    <button id="${SKIP_QUESTION_BUTTON_ID}">
      SKIP QUESTION
    </button>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};


//retrieves user's answers on page reload
window.onload = function() {

  if (localStorage.getItem('selectedAnswers')) {
    const savedSelected = JSON.parse(localStorage.getItem('selectedAnswers'));
  }
}