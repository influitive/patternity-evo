require('babel-register')({
  only: /colors\.js/
});

const postcssPlugins = require('../postcss.config');

module.exports = {
  module: {
    loaders: [
      { test: /\.css$/,
        loader: 'style-loader!css-loader?localIdentName=[name]---[local]---[hash:base64:5]&modules!postcss-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss() {
    return postcssPlugins;
  }
};
