import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  return (
    <>
      <div className="su-cc su-identity-bar su-pt-5 su-pb-1 su-bg-cardinal-red">
        <a className="su-logo su-text-white hocus:su-text-white su-text-20 su-leading-none" href="https://www.stanford.edu">
          Stanford University
        </a>
      </div>
      <main>
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </main>
    </>
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