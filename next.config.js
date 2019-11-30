const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer')({ grid: true });
const withSass = require('@zeit/next-sass');
const path = require('path');
const npmPackage = "node_modules";

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: [
      path.resolve(npmPackage, "bourbon/core"),
      path.resolve(npmPackage)
    ],
    sourceMap: true,
    lineNumbers: true,
    outputStyle: 'nested',
    precision: 10
  },
  webpack: (cfg, options) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: ["react-component"],
          markdownIt: {
            html: true,
            xhtmlOut: true,
            linkify: true,
            typographer: true
          }
        }
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: 'file-loader'
      },
      // Apply plugins to image assets.
      {
        test: /\.(png|svg|jpg|gif)$/i,
        loader: "file-loader"
      }
    )
    return cfg;
  }
});
