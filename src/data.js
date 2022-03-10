'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
    currentQuestionIndex: 0,
    // the questions in the quiz
    questions: [{
            text: 'What does "HOND" mean in ENGLISH?',
            answers: {
                a: 'CAT',
                b: 'DOG',
                c: 'BIRD',
                d: 'GIRAFFE',
            },
            correct: 'b',
            selected: null,
        },
        {
            text: 'What does "TURTLE" mean in DUTCH?',
            answers: {
                a: 'NEUSHOORN',
                b: 'VOGEL',
                c: 'PAARD',
                d: 'SCHILDPAD',
            },
            correct: 'd',
            selected: null,
        },
        {
            text: 'What does "DOCHTER" mean in ENGLISH?',
            answers: {
                a: 'SISTER',
                b: 'FATHER',
                c: 'DAUGHTER',
                d: 'SON',
            },
            correct: 'c',
            selected: null,
        },
        {
            text: 'What does "SISTER" mean in DUTCH?',
            answers: {
                a: 'BROER',
                b: 'ZUS',
                c: 'NICHT',
                d: 'TANTE',
            },
            correct: 'b',
            selected: null,
        },
        {
            text: 'What does "NEEF" mean in ENGLISH?',
            answers: {
                a: 'FATHER',
                b: 'NEPHEW',
                c: 'UNCLE',
                d: 'BROTHER',
            },
            correct: 'b',
            selected: null,
        },
        {
            text: 'What does "MARRIED" mean in DUTCH?',
            answers: {
                a: 'BRUID',
                b: 'WEDUWE',
                c: 'ALLEEN',
                d: 'GETROUWD',
            },
            correct: 'd',
            selected: null,
        },
        {
            text: 'What does "BROEK" mean in ENGLISH?',
            answers: {
                a: 'DRESS',
                b: 'PANTS',
                c: 'SKIRTS',
                d: 'SWEATSHIRT',
            },
            correct: 'b',
            selected: null,
        },
        {
            text: 'What does "SHOE" mean in DUTCH?',
            answers: {
                a: 'ROK',
                b: 'HOED',
                c: 'SCHOEN',
                d: 'ONDERGOED',
            },
            correct: 'c',
            selected: null,
        },
        {
            text: 'What does "ZWART" mean in ENGLISH?',
            answers: {
                a: 'BLACK',
                b: 'BLUE',
                c: 'PINK',
                d: 'YELLOW',
            },
            correct: 'a',
            selected: null,
        },
        {
            text: 'What does "GREEN" mean in DUTCH?',
            answers: {
                a: 'ROOD',
                b: 'ORANJE',
                c: 'PAARS',
                d: 'GROEN',
            },
            correct: 'd',
            selected: null,
        },
    ],
};