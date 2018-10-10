/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: './js/[name].js',
  },
  cache: true,
  devtool: 'eval-source-map',
  stats: {
    colors: true,
    reasons: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PBandJAMD',
      xhtml: true,
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root-container',
    }),
    new ExtractTextPlugin({
      filename: './css/[name].css',
      allChunks: true,
    }),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.svg$/,
        use: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
      },
      {
        test: /\.gif$/,
        use: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
      },
      {
        test: /\.jpg$/,
        use: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
      },
      {
        test: /\.png$/,
        use: 'file-loader?name=/img/[name].[hash:base64:5].[ext]',
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=/fonts/[name].[ext]',
      },
    ],
  },
};
