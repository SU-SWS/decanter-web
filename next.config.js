module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: ["react-component"],
          markdownIt: {
            html: true,
            xhtmlOut: true,
            linkify: true
          }
        }
      }
    )
    return cfg;
  }
}
