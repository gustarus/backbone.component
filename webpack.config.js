'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    bundle: path.join(__dirname, 'source', 'bundle.js'),
    vendor: ['jquery', 'backbone', 'underscore']
  },

  output: {
    path: path.join(__dirname, 'destination'),
    filename: '[name].js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      '@core': path.join(__dirname, 'source')
    }
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      include: path.join(__dirname, 'source'),
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};
