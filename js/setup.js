'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LASTNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];

let userDialog = document.querySelector(`.setup`);
let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const getRandomInteger = function (maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1));
};

let wizards = [
  {
    name: WIZARD_NAMES[getRandomInteger(WIZARD_NAMES.length - 1)],
    lastname: WIZARD_LASTNAMES[getRandomInteger(WIZARD_LASTNAMES.length - 1)],
    coatColor: WIZARD_COATS_COLOR[getRandomInteger(WIZARD_COATS_COLOR.length - 1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(WIZARD_EYES_COLOR.length - 1)],
  },
  {
    name: WIZARD_NAMES[getRandomInteger(WIZARD_NAMES.length - 1)],
    lastname: WIZARD_LASTNAMES[getRandomInteger(WIZARD_LASTNAMES.length - 1)],
    coatColor: WIZARD_COATS_COLOR[getRandomInteger(WIZARD_COATS_COLOR.length - 1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(WIZARD_EYES_COLOR.length - 1)],
  },
  {
    name: WIZARD_NAMES[getRandomInteger(WIZARD_NAMES.length - 1)],
    lastname: WIZARD_LASTNAMES[getRandomInteger(WIZARD_LASTNAMES.length - 1)],
    coatColor: WIZARD_COATS_COLOR[getRandomInteger(WIZARD_COATS_COLOR.length - 1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(WIZARD_EYES_COLOR.length - 1)],
  },
  {
    name: WIZARD_NAMES[getRandomInteger(WIZARD_NAMES.length - 1)],
    lastname: WIZARD_LASTNAMES[getRandomInteger(WIZARD_LASTNAMES.length - 1)],
    coatColor: WIZARD_COATS_COLOR[getRandomInteger(WIZARD_COATS_COLOR.length - 1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(WIZARD_EYES_COLOR.length - 1)],
  }
];

const createElement = function (template, wizard) {
  const wizardElement = template.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name + ` ` + wizard.lastname;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};

const insertElement = function (element, wizard) {
  element.appendChild(createElement(similarWizardTemplate, wizard));
};

userDialog.classList.remove(`hidden`);
document.querySelector(`.setup-similar`).classList.remove(`hidden`);

for (let i = 0; i < wizards.length; i++) {
  createElement(similarWizardTemplate, wizards[i]);
  insertElement(similarListElement, wizards[i]);
}
