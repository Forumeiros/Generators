const production = false;

const webpack = require('webpack');
const path = require('path');

console.log(production ? 'Production Mode.' : 'Development Mode.');

module.exports = {
  entry: './app/index.js',

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
        options: {
          outputStyle: "compressed"
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
