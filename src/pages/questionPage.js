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
        scoreElement.innerHTML = String.raw ` <p class="score-title"> ${correctAnswers} / ${totalQuestions}</p> `;
        return scoreElement;
    };

    const currentScore = showScore(quizData.score, quizData.questions.length);
    userInterface.appendChild(currentScore);


    const selectAnswer = (e) => {
        currentQuestion.selected = e.target.dataset.key;

        if (currentQuestion.selected === currentQuestion.correct) {
            e.target.classList.add('Correct');
            e.target.style.backgroundColor = 'green';
            quizData.score++;

        } else {
            e.target.classList.add('Wrong');
            e.target.style.backgroundColor = 'red';
        };

    };


    const answersListElement = document.getElementById(ANSWERS_LIST_ID);

    for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
        const answerElement = createAnswerElement(key, answerText);
        answerElement.setAttribute('data-key', key)
        answersListElement.appendChild(answerElement);

        for (const selection of answersListElement.children) {
            selection.addEventListener('click', selectAnswer);
        }
    }


    document
        .getElementById(NEXT_QUESTION_BUTTON_ID)
        .addEventListener('click', nextQuestion);

};



const nextQuestion = () => {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    initQuestionPage();
};