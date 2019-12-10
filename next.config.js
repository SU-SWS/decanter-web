const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var escape = require('react-escape-html');
const autoprefixer = require('autoprefixer')({ grid: true });
const withSass = require('@zeit/next-sass');
const path = require('path');
const sass = require('sass');
const highlight = require('highlight.js');
const npmPackage = "node_modules";
var glob = require("glob");

module.exports = withSass({
  sassLoaderOptions: {
    implementation: require('sass'),
    sassOptions: {
      includePaths: [
        path.resolve(npmPackage, "bourbon/core"),
        path.resolve(npmPackage)
      ],
      sourceMap: true,
      lineNumbers: true,
      precision: 10
    }
  },
  webpack: (cfg, options) => {

    // Fix: "Uncaught ReferenceError: global is not defined", and "Can't resolve 'fs'".
    cfg.node = cfg.node || {};
    cfg.node.global = true;
    cfg.node.fs = 'empty';

    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: ["react-component"],
          markdownIt: {
            preset: 'default',
            html: true,
            xhtmlOut: true,
            linkify: true,
            typographer: true,
            gfm: true,
            highlight: (code, lang) => {
              if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
                return `<pre class="hljs">${code}</pre>`;
              }
              const html = highlight.highlight(lang, code).value;
              return `<span class="hljs">${html}</span>`;
            }
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
    );

    cfg.resolve.modules.push(path.resolve('./'));
    cfg.resolve.alias['decanter-img'] = path.resolve(__dirname, "node_modules/decanter/core/src/img");

    return cfg;
  }
});

/**
 * Tell NextJS about our dynamic pages.
 */
module.exports.exportTrailingSlash = true;

var pages = {
  '/': { page: '/' }
};

glob('content/_pages/*.md', null, function(er, files) {
  files.forEach(function(filename) {
    var key = filename.replace("content/_pages/", "").replace(".md", "");
    pages['/page/' + key] = { page: '/page/[id]', query: { id: key} };
  });
});

module.exports.exportPathMap = function() {
  return pages;
}
/**
 * End Dynamic page export.
 */
