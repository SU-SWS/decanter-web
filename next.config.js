const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer')({ grid: true });
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const path = require('path');
const fs = require('fs');
const sass = require('sass');
const highlight = require('highlight.js');
const npmPackage = "node_modules";
const glob = require("glob");

module.exports = withSass(
  withCSS(
  withFonts(
  withImages({
  cssModules: false,
  sassLoaderOptions: {
    implementation: sass,
    sassOptions: {
      includePaths: [
        path.resolve(__dirname, "src/scss"),
        path.resolve(__dirname, npmPackage)
      ],
      sourceMap: true,
      lineNumbers: true,
      precision: 10
    }
  },
  cssLoaderOptions: {
    url: true
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
        test: /\.(txt|html)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(yaml|yml)$/,
        use: 'js-yaml-loader'
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        loader: 'file-loader',
        options: {
          publicPath: "/fonts",
          outputPath: "/fonts"
        }
      },
      // Apply plugins to image assets.
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: {
                loader: 'file-loader',
                options: {
                  publicPath: '/img',
                  outputPath: '/img'
                }
              }
            }
          }
        ]
      }
    );

    cfg.resolve.alias['#decanter-img'] = path.join(__dirname, "node_modules/decanter/core/src/img");
    cfg.resolve.alias['#fa-fonts'] = path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts');

    return cfg;
  },

  // Output trailing slashes on urls.
  exportTrailingSlash: true,

  // What to export as static pages that are dynamically generated.
  exportPathMap: function() {
    var pages = {
      '/': { page: '/' },
      '/page/components': { page: '/page/[id]', query: {id: 'components'}},
      '/component/simple': { page: '/component/[id]', query: {id: 'simple'}},
      '/component/composite': { page: '/component/[id]', query: {id: 'composite'}},
      '/component/identity': { page: '/component/[id]', query: {id: 'identity'}}
    };

    var files = glob.sync('content/_pages/*.md');
    files.forEach(function(filename) {
      var key = filename.replace("content/_pages/", "").replace(".md", "");
      pages['/page/' + key] = { page: '/page/[id]', query: { id: key } };
    });

    var kssinfo = path.resolve(__dirname, "content/_settings/kss.json");
    var data = fs.readFileSync(kssinfo);
    var components = JSON.parse(data);
    components.items[0].children.forEach(function(val) {
      if (val.children) {
        val.children.forEach(function(child1) {
          if (child1.children) {
            child1.children.forEach(function(child2) {
              if (child2.children) {
                child2.children.forEach(function(child3) {
                  pages[child3.path] = { page: '/component/[id]', query: { id: child3.key }};
                });
              }
              else {
                pages[child2.path] = { page: '/component/[id]', query: { id: child2.key }};
              }

            });
          }
          else {
            pages[child1.path] = { page: '/component/[id]', query: { id: child1.key }};
          }
        });
      }
      else {
        pages[val.path] = { page: '/component/[id]', query: { id: val.key }};
      }
    });
    return pages;
  }
}
)
)
)
);
