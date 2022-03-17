'use strict';

//import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import  {score,
        initQuestionPage
      } from './questionPage.js';

import { RESTART_QUIZ_BUTTON_ID } from '../constants.js'
import { showResults } from '../views/resultsView.js';
import { quizData } from '../data.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */

const correctAnswers = () => {
    let answers = [];

    quizData.questions.forEach(question =>{
        answers.push(question.correct);
    });
    return answers;  
}

export const answers = correctAnswers();

//shows result page on result view 
export function showResultPage () {
    const resultBox = document.querySelector('.result-box');
    resultBox.classList.add('activeResult');
    const result = showResults();
    resultBox.appendChild(result);
    document.getElementById(RESTART_QUIZ_BUTTON_ID).addEventListener('click', restartQuiz)
    
    
   const restartQuiz = () =>  {
      quizData.currentQuestionIndex = 0;
      initQuestionPage();
      resultBox.classList.remove('activeResult');
      document.getElementById('score').innerHTML = String.raw `${score} points`;
    }
  }

