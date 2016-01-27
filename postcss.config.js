const nested = require('postcss-nested');
const vars = require('postcss-simple-vars');
const media = require('postcss-media-minmax');
const autoprefixer = require('autoprefixer');
const functions = require('postcss-functions');
const colorFuncs = require('./src/utils/colors');

module.exports = [
  vars({ variables: require('./src/shared/vars') }),
  nested,
  media,
  autoprefixer,
  functions({ functions: colorFuncs })
];
