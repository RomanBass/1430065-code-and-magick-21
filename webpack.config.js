 const path = require("path");

 module.exports = {
  entry: [
    "./js/util.js",
    "./js/backend.js",
    "./js/setup.js",
    "./js/filter.js",
    "./js/debounce.js",
    "./js/dialog.js",
    "./js/move.js",
    "./js/stat.js",
    "./js/game.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
 };