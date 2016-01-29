const Color = require('color');

const functions = {};

for (let key in Color('#FFFFFF')) {
  functions[key] = (color, amount) => Color(color)[key](amount).hexString();
  console.log(key);
}

module.exports = functions;
