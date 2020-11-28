'use strict';

(function () {
  const getRank = function (wizard) {
    let rank = 0;
    if (wizard.colorCoat === window.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.filteredWizards = function () {
    window.similarListElement.innerHTML = ``;
    window.render(window.wizards.sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };
})();
