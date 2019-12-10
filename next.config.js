const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer')({ grid: true });
const withSass = require('@zeit/next-sass');
const path = require('path');
const sass = require('sass');
const highlight = require('highlight.js');
const npmPackage = "node_modules";
var glob = require("glob");
var urlencode = require('urlencode');
const Entities = require('html-entities').AllHtmlEntities;

module.exports = withSass({
  // Sass option overrides.
  sassLoaderOptions: {
    implementation: require('sass'),
    sassOptions: {
      includePaths: [
        path.resolve(npmPackage, "bourbon/core"),
        path.resolve(__dirname, npmPackage)
      ],
      sourceMap: true,
      lineNumbers: true,
      precision: 10
    }
  },

  // Webpack overrides.
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
              const entities = new Entities();
              code = entities.encode(code);
              code = code.replace("}", "`}`");
              code = code.replace("{", "`{`");
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
  },

  // Output trailing slashes on urls.
  exportTrailingSlash: true,

  // What to export as static pages that are dynamically generated.
  exportPathMap: function() {
    var pages = {
      '/': { page: '/' }
    };

    var files = glob.sync('content/_pages/*.md');
    files.forEach(function(filename) {
      var key = filename.replace("content/_pages/", "").replace(".md", "");
      pages['/page/' + key] = { page: '/page/[id]', query: { id: key } };
    });
    return pages;
  }
});
