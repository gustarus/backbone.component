'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    bundle: path.join(__dirname, 'src', 'bundle.js'),
    vendor: ['jquery', 'backbone', 'underscore']
  },

  output: {
    path: path.join(__dirname, 'dest'),
    filename: '[name].js'
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
      '@core': path.join(__dirname, 'src')
    }
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      include: path.join(__dirname, 'src'),
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
