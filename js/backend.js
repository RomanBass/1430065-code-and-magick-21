'use strict';

(function () {

  window.backend = {
    load(onLoad, onError) {
      const URL = `https://21.javascript.pages.academy/code-and-magick/data`;
      const StatusCode = {
        OK: 200
      };
      const TIMEOUT = 10000;
      const xhr = new XMLHttpRequest();

      xhr.responseType = `json`;
      xhr.addEventListener(`load`, function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
        }
      });
      xhr.addEventListener(`error`, function () {
        onError(`Произошла ошибка соединения`);
      });
      xhr.addEventListener(`timeout`, function () {
        onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
      });
      xhr.timeout = TIMEOUT;
      xhr.open(`GET`, URL);
      xhr.send();
    },

    save(data, onLoad, onError) {
      const URL = `https://21.javascript.pages.academy/code-and-magick`;
      const StatusCode = {
        OK: 200
      };
      const TIMEOUT = 10000;
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
        }
      });
      xhr.addEventListener(`error`, function () {
        onError(`Произошла ошибка соединения`);
      });
      xhr.addEventListener(`timeout`, function () {
        onError(`Запрос не успел выполниться за ` + xhr.timeout + `мс`);
      });
      xhr.timeout = TIMEOUT;
      xhr.open(`POST`, URL);
      xhr.send(data);
    }
  };

})();