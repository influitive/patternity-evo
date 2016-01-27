require('babel-register')({
  only: /colors\.js/
});

const postcssPlugins = require('../postcss.config');

module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css?modules!postcss' }
    ]
  },
  postcss: function() {
    return postcssPlugins;
  }
};
