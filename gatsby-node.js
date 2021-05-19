const path = require('path');
const webpack = require('webpack');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
}

// Alter Gatsby's webpack config.
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        fs: false,
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ]
  })
}
