'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const button = document.createElement('button');
  button.classList.add('answerBtn');
  element.appendChild(button)
  button.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  button.getAttribute("value", `${key}`);
  button.getAttribute("type", "radio");
  return button;
};
