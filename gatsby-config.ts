import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Decanter v7 Site`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `content`,
      }
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
  ],
}

export default config
