const withYaml = require('next-plugin-yaml');
const path = require('path');
const highlight = require('highlight.js');
const npmPackage = 'node_modules';

/** @type {import('next').NextConfig} */
module.exports = withYaml({
  output: 'export',
  trailingSlash: true,
  experimental: {
    legacyBrowsers: false
  },
  sassOptions: {
    precision: 10,
    includePaths: [
      path.resolve(__dirname, npmPackage, 'bourbon/core'),
      path.resolve(__dirname, 'src/scss')
    ]
  },
  webpack: function(config) {
    config.module.rules.push({
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
              const html = highlight.highlight(code, { language: lang }).value;
              return `<span class="hljs">${html}</span>`;
            }
          }
        }
    });
    config.module.rules.push({
      test: /\.(txt|html)$/,
      loader: 'raw-loader'
    });
    return config;
  },
});