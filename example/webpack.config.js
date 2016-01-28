const nested = require('postcss-nested');
const vars = require('postcss-simple-vars');
const media = require('postcss-media-minmax');
const atImport = require('postcss-import');
const postCSSInlineComment = require('postcss-inline-comment');

function variables() { 
  return require('../src/shared/vars');
}

module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css?modules!postcss' },
    ]
  },
  postcss: function() {
    return [atImport, vars({ variables: variables }), nested, media, postCSSInlineComment]
  }
};
