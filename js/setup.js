'use strict';

window.setup = document.querySelector(`.setup`);
const form = window.setup.querySelector(`.setup-wizard-form`);

(function () {
  const WIZARDS_NUMBER = 4;
  let similarListElement = document.querySelector(`.setup-similar-list`);
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

  //  19-11-2020

  window.backend.load(function (wizards) {
    for (let i = 0; i < WIZARDS_NUMBER; i++) {
      insertElement(similarListElement, wizards[i]);
    }
  }, function (message) {
    showErrorMessage(message);
  });

  form.addEventListener(`submit`, function (evt) {
    window.backend.save(new FormData(form),
        function () {
          window.setup.classList.add(`hidden`);
        },
        function (message) {
          showErrorMessage(message);
        });
    evt.preventDefault();
  });

  const showErrorMessage = function (message) {
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
  };

})();
