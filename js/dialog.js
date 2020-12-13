'use strict';

const WIZARD_COATS_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
let setupOpen = document.querySelector(`.setup-open`);
let setupClose = window.setup.querySelector(`.setup-close`);
let wizardCoat = window.setup.querySelector(`.wizard-coat`);
let wizardEyes = window.setup.querySelector(`.wizard-eyes`);
let wizardFireball = window.setup.querySelector(`.setup-fireball`);
let coatInput = window.setup.querySelector(`.setup-wizard-appearance input:nth-child(2)`);
let eyesInput = window.setup.querySelector(`.setup-wizard-appearance input:nth-child(3)`);
let fireballInput = window.setup.querySelector(`.setup-fireball-wrap input`);

window.setupUserName = window.setup.querySelector(`.setup-user-name`);

const onPopupEscPress = function (evt) {
  window.util.isEscEvent(evt, closePopup);
};

const openPopup = function () {
  window.setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  window.setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, openPopup);

setupOpen.addEventListener(`keydown`, function (evt) {
  window.util.isEnterEvent(evt, openPopup);
});

setupClose.addEventListener(`click`, closePopup);

setupClose.addEventListener(`keydown`, function (evt) {
  window.util.isEnterEvent(evt, closePopup);
});

window.coatColor = `rgb(101, 137, 164)`;
window.eyesColor = `black`;

const chooseElementColor = function (element, colorsArray, elementInput) {
  let i = 1;

  element.addEventListener(`click`, function () {
    if (element === wizardCoat) {
      window.coatColor = colorsArray[i];
    } else if (element === wizardEyes) {
      window.eyesColor = colorsArray[i];
    }
    element.style.fill = colorsArray[i];
    element.style.backgroundColor = colorsArray[i];
    elementInput.value = colorsArray[i];
    i++;
    if (i >= colorsArray.length) {
      i = 0;
    }
  });
};

chooseElementColor(wizardCoat, WIZARD_COATS_COLOR, coatInput);
chooseElementColor(wizardEyes, WIZARD_EYES_COLOR, eyesInput);
chooseElementColor(wizardFireball, WIZARD_FIREBALL_COLOR, fireballInput);

wizardCoat.addEventListener(`click`, window.debounce(function () {
  window.filteredWizards();
}));

wizardEyes.addEventListener(`click`, window.debounce(function () {
  window.filteredWizards();
}));
