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
  questions: [
    {
      text: 'What does "HOND" mean in ENGLISH?',
      answers: {
        A: 'CAT',
        B: 'DOG',
        C: 'BIRD',
        D: 'GIRAFFE',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'What does "TURTLE" mean in DUTCH?',
      answers: {
        A: 'NEUSHOORN',
        B: 'VOGEL',
        C: 'PAARD',
        D: 'SCHILDPAD',
      },
      correct: 'D',
      selected: null,
    },
    {
      text: 'What does "DOCHTER" mean in ENGLISH?',
      answers: {
        A: 'SISTER',
        B: 'FATHER',
        C: 'DAUGHTER',
        D: 'SON',
      },
      correct: 'C',
      selected: null,
    },
    {
      text: 'What does "SISTER" mean in DUTCH?',
      answers: {
        A: 'BROER',
        B: 'ZUS',
        C: 'NICHT',
        D: 'TANTE',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'What does "NEEF" mean in ENGLISH?',
      answers: {
        A: 'FATHER',
        B: 'NEPHEW',
        C: 'UNCLE',
        D: 'BROTHER',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'What does "MARRIED" mean in DUTCH?',
      answers: {
        A: 'BRUID',
        B: 'WEDUWE',
        C: 'ALLEEN',
        D: 'GETROUWD',
      },
      correct: 'D',
      selected: null,
    },
    {
      text: 'What does "BROEK" mean in ENGLISH?',
      answers: {
        A: 'DRESS',
        B: 'PANTS',
        C: 'SKIRTS',
        D: 'SWEATSHIRT',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'What does "SHOE" mean in DUTCH?',
      answers: {
        A: 'ROK',
        B: 'HOED',
        C: 'SCHOEN',
        D: 'ONDERGOED',
      },
      correct: 'C',
      selected: null,
    },
    {
      text: 'What does "ZWART" mean in ENGLISH?',
      answers: {
        A: 'BLACK',
        B: 'BLUE',
        C: 'PINK',
        D: 'YELLOW',
      },
      correct: 'A',
      selected: null,
    },
    {
      text: 'What does "GREEN" mean in DUTCH?',
      answers: {
        A: 'ROOD',
        B: 'ORANJE',
        C: 'PAARS',
        D: 'GROEN',
      },
      correct: 'D',
      selected: null,
    },
    
  ],
};
