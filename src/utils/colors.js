'use strict';

const Color = require('color');

const functionsToMap = ['darken', 'lighten', 'lightness'];
const functions = {};

for (let key of functionsToMap) {
  functions[key] = (color, amount) => Color(color)[key](amount).hexString();
}

module.exports = functions;
