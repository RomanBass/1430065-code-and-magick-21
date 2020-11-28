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
    },
    showErrorMessage(message) {
      const node = document.createElement(`div`);
      node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red; color: yellow; padding: 80px 0`;
      node.style.position = `absolute`;
      node.style.left = 0;
      node.style.right = 0;
      node.style.bottom = `50%`;
      node.style.width = `50%`;
      node.style.fontSize = `50px`;
      node.textContent = message;
      document.body.insertAdjacentElement(`afterbegin`, node);
    }
  };

})();
