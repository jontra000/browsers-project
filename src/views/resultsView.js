'use strict';

import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { score, selectedAnswers } from '../pages/questionPage.js'
import { quizData } from '../data.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */

const correctAnswers = () => {
    let answers = [];
    for (let i = 0; i < quizData.questions.length; i++){
        answers.push(quizData.questions[i].correct)
    }
    return answers;  
}

export const showResults = () => {
  const element = document.createElement('div');
  const answers = correctAnswers();

  element.innerHTML = String.raw`
    <h1 id="title"> The Result of the Quiz  <h1>
    <hr>
    <h5> You have answered <span> ${score} / 10 </span> questions as true </h5>
    <h5> You have got <span> ${score * 10} </span>points</h5>
    <hr>
    <h5> Your answers are: </h5> 
    <p> ${selectedAnswers.join('-')} <p/>
    <hr>
    <h5> Correct answers are: </h5> 
    <p> ${answers.join('-')} <p/>
    <button id="${RESTART_QUIZ_BUTTON_ID}"><span> Restart Quiz </span></button>
  `;
  return element;
};
