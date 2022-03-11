'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const button = document.createElement("button");
  button.className = "answerBtn";
  element.appendChild(button);
  button.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  button.setAttribute("id",`choice ${key}`)
  button.setAttribute("type", "radio");
  button.setAttribute("value", `${key}`);
  return button;
};
