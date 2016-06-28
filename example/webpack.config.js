require('babel-register')({
  only: /colors\.js/
});

const postcssPlugins = require('../postcss.config');

module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css?modules!postcss' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss() {
    return postcssPlugins;
  }
};
