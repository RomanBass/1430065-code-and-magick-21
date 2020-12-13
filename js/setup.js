'use strict';

window.setup = document.querySelector(`.setup`);
const form = window.setup.querySelector(`.setup-wizard-form`);
window.wizards = [];

const WIZARDS_NUMBER = 5;
window.similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const createElement = function (template, wizard) {
  const wizardElement = template.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;
  return wizardElement;
};

const insertElement = function (element, wizard) {
  element.appendChild(createElement(similarWizardTemplate, wizard));
};

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

window.render = function (array) {
  for (let i = 0; i < WIZARDS_NUMBER; i++) {
    insertElement(window.similarListElement, array[i]);
  }
};

window.backend.load(function (data) {
  window.wizards = data;
  window.render(window.wizards);

}, function (message) {
  window.util.showErrorMessage(message);
});

form.addEventListener(`submit`, function (evt) {
  window.backend.save(new FormData(form),
      function () {
        window.setup.classList.add(`hidden`);
      },
      function (message) {
        window.util.showErrorMessage(message);
      });
  evt.preventDefault();
});
