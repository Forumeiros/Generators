const production = true;

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './app/index.js',

  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader',
        options: {
          outputStyle: 'compressed'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function () {
            return [
              require('autoprefixer')
            ];
          }
        }
      }]
    }]
  },

  plugins: production ? [
    new UglifyJSPlugin()
  ] : [],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  }
};
