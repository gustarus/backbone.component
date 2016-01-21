'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    bundle: path.join(__dirname, 'index.js'),
    vendor: ['jquery', 'backbone', 'underscore']
  },

  output: {
    path: path.join(__dirname, 'destination'),
    filename: '[name].js'
  },

  resolve: {
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: path.join(__dirname, 'node_modules'),
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
