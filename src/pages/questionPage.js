'use strict';

import {
    ANSWERS_LIST_ID,
    NEXT_QUESTION_BUTTON_ID,
    USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = (userInterface) => {

    userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

    const questionElement = createQuestionElement(currentQuestion.text);

    userInterface.appendChild(questionElement);
    let score = 0;

    const selectAnswer = (e) => {
        currentQuestion.selected = e.target.dataset.key;

        if (currentQuestion.selected === currentQuestion.correct) {
            e.target.classList.add('Correct');
            score++;
            e.target.style.backgroundColor = 'green';

        } else {
            e.target.classList.add('Wrong');
            score;
            e.target.style.backgroundColor = 'red';
        };



        score;
    };



    const answersListElement = document.getElementById(ANSWERS_LIST_ID);

    for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
        const answerElement = createAnswerElement(key, answerText);
        answerElement.setAttribute('data-key', key)
        answersListElement.appendChild(answerElement);
    }

    for (const selection of answersListElement.children) {
        selection.addEventListener('click', selectAnswer);
    }





    document
        .getElementById(NEXT_QUESTION_BUTTON_ID)
        .addEventListener('click', nextQuestion);

};



const nextQuestion = () => {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    initQuestionPage();
};