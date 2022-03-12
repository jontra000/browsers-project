

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome to DutchQuiz</h1>
    <h3>To start quiz, please press the button</h6>
    <button id="${START_QUIZ_BUTTON_ID}"><span> start quiz </span></button>
  `;
  return element;
};
