/**
 * Webpack Configuration File
 * @type {[type]}
 */

// /////////////////////////////////////////////////////////////////////////////
// Requires / Dependencies /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// /////////////////////////////////////////////////////////////////////////////
// Paths ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

const npmPackage = path.resolve(__dirname, 'node_modules');

// Start configuring webpack.
var webpackConfig = {
  // What am i?
  name: 'decanter-web',
  // Allows for map files.
  devtool: 'source-map',
  // What build?
  entry: {
    "scripts": path.resolve(__dirname, "src/js/index.js"),
  },
  // Where put build?
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/dist/js")
  },
  resolve: {
    alias: {
      'decanter-img': path.resolve(npmPackage + "/decanter/core/src/img"),
      '@fortawesome': path.resolve(npmPackage + '@fortawesome')
    }
  },
  // Additional module rules.
  module: {
    rules: [
      // Good ol' Babel.
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      // Apply plugins to image assets.
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          // A loader for webpack which transforms files into base64 URIs.
          // https://github.com/webpack-contrib/url-loader
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../assets/img",
              outputPath: "../assets/img"
            }
          }
        ]
      },
      // Apply plugins to svg assets.
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../assets/svg",
              outputPath: "../assets/svg"
            }
          }
        ]
      },
    ]
  }
};

// Add the configuration.
module.exports = [ webpackConfig ];
