'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LASTNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARDS_NUMBER = 4;

let setup = document.querySelector(`.setup`);
let similarListElement = document.querySelector(`.setup-similar-list`);
let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
let wizards = [];

const getRandomInteger = function (maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1));
};

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

document.querySelector(`.setup-similar`).classList.remove(`hidden`);

for (let i = 0; i < WIZARDS_NUMBER; i++) {
  wizards[i] = {
    name: WIZARD_NAMES[getRandomInteger(WIZARD_NAMES.length - 1)],
    lastname: WIZARD_LASTNAMES[getRandomInteger(WIZARD_LASTNAMES.length - 1)],
    coatColor: WIZARD_COATS_COLOR[getRandomInteger(WIZARD_COATS_COLOR.length - 1)],
    eyesColor: WIZARD_EYES_COLOR[getRandomInteger(WIZARD_EYES_COLOR.length - 1)],
  };
}

for (let i = 0; i < wizards.length; i++) {
  insertElement(similarListElement, wizards[i]);
}

// 12-10-2020 /////////////////////////////////////////////

let setupOpen = document.querySelector(`.setup-open`);
let setupClose = setup.querySelector(`.setup-close`);
let setupUserName = setup.querySelector(`.setup-user-name`);
let wizardCoat = setup.querySelector(`.wizard-coat`);
let wizardEyes = setup.querySelector(`.wizard-eyes`);
let wizardFireball = setup.querySelector(`.setup-fireball`);

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && setupUserName !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

const chooseElementColor = function (element, colorsArray) {
  let i = 1;
  element.addEventListener(`click`, function () {
    element.style.fill = colorsArray[i];
    element.style.backgroundColor = colorsArray[i];
    i++;
    if (i >= colorsArray.length) {
      i = 0;
    }
  });
};

chooseElementColor(wizardCoat, WIZARD_COATS_COLOR);
chooseElementColor(wizardEyes, WIZARD_EYES_COLOR);
chooseElementColor(wizardFireball, WIZARD_FIREBALL_COLOR);
