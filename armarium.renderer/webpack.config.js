"use strict";

const webpack = require('webpack');
const path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  //devtool: null,
  entry: path.join(__dirname, 'client.js'),
  devServer: {
    inline: true,
    port: 3333,
    contentBase: path.join(__dirname, 'public')
  },
  output: {
    path:  __dirname + '/../armarium/main/static/webpack_bundles/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        presets: [
          'react', 'es2015'
        ]
      }
    }]
  },
  plugins: [
    /*new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),*/
    new BundleTracker({filename: '/../armarium/webpack-stats.json'})
  ]
};
