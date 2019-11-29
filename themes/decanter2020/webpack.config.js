/**
 * Webpack Configuration File
 * @type {[type]}
 */

 // Requires / Dependencies
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer')({ grid: true });
const FileManagerPlugin = require('filemanager-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

// Paths
const npmPackage = path.resolve(process.env.npm_package_config_node_modules);

// Other variables
// process.env.NODE_ENV is NOT set, so use the name of the npm script as the clue.
const devMode = process.env.npm_lifecycle_event !== 'dist';

// Module Exports.
module.exports = {
  name: "decanter2020",
  // Define the entry points for which webpack builds a dependency graph.
  entry: {
    "styles": path.resolve( __dirname, "source/_scss/index.scss"),
    "scripts": path.resolve( __dirname, "source/_scripts/index.js")
  },
  // Where should I output the assets.
  output: {
    filename: devMode ? "[name].js" : "[name].[hash].js",
    path: path.resolve( __dirname, 'source/js' )
  },
  // Allows for map files.
  devtool: 'source-map',
  // Relative output paths for css assets.
  resolve: {
    alias: {
      'decanter-src': path.resolve(npmPackage, 'decanter/core/src'),
      'decanter-img': path.resolve(npmPackage, 'decanter/core/src/img'),
      '@fortawesome': path.resolve(npmPackage, '@fortawesome')
    }
  },
  // Optimizations that are triggered by production mode.
  optimization: {
    // Uglify the Javascript & and CSS.
    minimizer: [
      // Shrink CSS.
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  // Define and configure webpack plugins.
  plugins: [
    // Remove JS files from render.
    new FixStyleOnlyEntriesPlugin(),
    // This plugin extracts CSS into separate files. It creates a CSS file per
    // JS file which contains CSS. It supports On-Demand-Loading of CSS and
    // SourceMaps.
    // https://github.com/webpack-contrib/mini-css-extract-plugin
    new MiniCssExtractPlugin( {
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "../css/[name].css" : "../css/[name].[hash].css"
    } ),
    // This Webpack plugin will generate a JSON file that matches the original
    // filename with the hashed version.
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest( {
      output: 'assets.json'
    } ),
  ],
  // Define modules.
  module: {
    rules: [
      // Apply babel ES6 compilation to JavaScript files.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      },
      // Apply Plugins to SCSS/SASS files.
      {
        test: /\.s[ac]ss$/,
        use: [
          // Extract loader.
          MiniCssExtractPlugin.loader,
          // CSS Loader. Generate sourceMaps.
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: true
            }
          },
          // Post CSS. Run autoprefixer plugin.
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer
              ]
            }
          },
          // SASS Loader. Add compile paths to include bourbon.
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve( __dirname, "source/_scss" ),
                path.resolve( npmPackage, "bourbon/core" ),
                path.resolve( npmPackage, "decanter/core/src/scss" ),
                path.resolve( npmPackage )
              ],
              sourceMap: true,
              lineNumbers: true,
              outputStyle: 'nested',
              precision: 10
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: 'file-loader',
        options: {
          name: devMode ? "[name].[ext]" : "[hash:7].[ext]",
          publicPath: "../assets",
          outputPath: "../assets"
        }
      },
      // Apply plugins to image assets.
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: devMode ? "[name].[ext]" : "[hash:7].[ext]",
              publicPath: "../assets",
              outputPath: "../assets"
            }
          }
        ]
      }
    ]
  }
};
