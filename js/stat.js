/* eslint-disable no-var */
'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const TITLE_GAP = 20;
const FONT_GAP = 33;
const NAME_HEIGHT = 15;
const GISTOGRAM_HEIGHT = 85;
const TIME_HEIGHT = 40;
const BAR_HEIGHT_MAX = 150;
const BAR_WIDTH = 40;
const BARS_DISTANCE = 90;
const GISTOGRAM_LEFT = 40;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

const getRandomSaturation = function () {
  return Math.floor(Math.random() * 101);
};

const getBarColor = function (playerName) {
  return (playerName === `Вы`) ? `rgba(255, 0, 0, 1)` : `hsl(240, ${getRandomSaturation()}%, 50%)`;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.font = `16px PT Mono`;
  ctx.fillStyle = `#000`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + TITLE_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + TITLE_GAP, CLOUD_Y + FONT_GAP + TITLE_GAP);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    let barPositionX = CLOUD_X + GISTOGRAM_LEFT + BARS_DISTANCE * i;

    ctx.fillStyle = `#000`;
    ctx.fillText(players[i], barPositionX, CLOUD_Y + CLOUD_HEIGHT - NAME_HEIGHT);
    ctx.fillText(Math.round(times[i]), barPositionX, CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT_MAX * times[i] / maxTime - TIME_HEIGHT);
    ctx.fillStyle = getBarColor(players[i]);
    ctx.fillRect(barPositionX, CLOUD_Y + GISTOGRAM_HEIGHT + BAR_HEIGHT_MAX * (1 - times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT_MAX * times[i] / maxTime);
  }
};
