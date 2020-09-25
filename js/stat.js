/* eslint-disable no-var */
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_GAP = 20;
var FONT_GAP = 33;
var NAME_HEIGHT = 15;
var GISTOGRAM_HEIGHT = 85;
var TIME_HEIGHT = 40;
var BAR_HEIGHT_MAX = 150;
var BAR_WIDTH = 40;
var BARS_DISTANCE = 90;
var GISTOGRAM_LEFT = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomSaturation = function () {
  return Math.floor(Math.random() * 101);
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + TITLE_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + TITLE_GAP, CLOUD_Y + FONT_GAP + TITLE_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    ctx.fillStyle = `#000`;
    ctx.fillText(players[i], CLOUD_X + GISTOGRAM_LEFT + BARS_DISTANCE * i, CLOUD_Y + CLOUD_HEIGHT - NAME_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GISTOGRAM_LEFT + BARS_DISTANCE * i, CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT_MAX * times[i] / maxTime - TIME_HEIGHT);

    if (players[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
      ctx.fillRect(CLOUD_X + GISTOGRAM_LEFT + BARS_DISTANCE * i, CLOUD_Y + GISTOGRAM_HEIGHT + BAR_HEIGHT_MAX * (1 - times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT_MAX * times[i] / maxTime);
    } else {
      ctx.fillStyle = `hsl(240, ${getRandomSaturation()}%, 50%)`;
      ctx.fillRect(CLOUD_X + GISTOGRAM_LEFT + BARS_DISTANCE * i, CLOUD_Y + GISTOGRAM_HEIGHT + BAR_HEIGHT_MAX * (1 - times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT_MAX * times[i] / maxTime);
    }
  }
};
