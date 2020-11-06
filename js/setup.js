'use strict';

window.WIZARD_COATS_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
window.WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
window.WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
window.setup = document.querySelector(`.setup`);

(function () {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_LASTNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARDS_NUMBER = 4;

  let similarListElement = document.querySelector(`.setup-similar-list`);
  let similarWizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  let wizards = [];

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
      name: WIZARD_NAMES[window.util.getRandomInteger(WIZARD_NAMES.length - 1)],
      lastname: WIZARD_LASTNAMES[window.util.getRandomInteger(WIZARD_LASTNAMES.length - 1)],
      coatColor: window.WIZARD_COATS_COLOR[window.util.getRandomInteger(window.WIZARD_COATS_COLOR.length - 1)],
      eyesColor: window.WIZARD_EYES_COLOR[window.util.getRandomInteger(window.WIZARD_EYES_COLOR.length - 1)],
    };
  }

  for (let i = 0; i < wizards.length; i++) {
    insertElement(similarListElement, wizards[i]);
  }
})();
