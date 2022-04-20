import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  return (
    // <Layout pageTitle={data.mdx.frontmatter.title}>
    <main>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </main>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost