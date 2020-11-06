'use strict';

(function () {
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

  const chooseElementColor = function (element, colorsArray, elementInput) {
    let i = 1;
    element.addEventListener(`click`, function () {
      element.style.fill = colorsArray[i];
      element.style.backgroundColor = colorsArray[i];
      elementInput.value = colorsArray[i];
      i++;
      if (i >= colorsArray.length) {
        i = 0;
      }
    });
  };

  chooseElementColor(wizardCoat, window.WIZARD_COATS_COLOR, coatInput);
  chooseElementColor(wizardEyes, window.WIZARD_EYES_COLOR, eyesInput);
  chooseElementColor(wizardFireball, window.WIZARD_FIREBALL_COLOR, fireballInput);
})();
