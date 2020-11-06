'use strict';

(function () {
  const ESC_KEYCODE = 27;
  const ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent(evt, action) {
      if (evt.keyCode === ESC_KEYCODE && window.setupUserName !== document.activeElement) {
        action();
      }
    },
    isEnterEvent(evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomInteger(maxNumber) {
      return Math.floor(Math.random() * (maxNumber + 1));
    }
  };
})();
