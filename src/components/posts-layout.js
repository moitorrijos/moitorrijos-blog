import React from "react"
import MainLayout from "../components/main-layout"
import Header from "../components/header"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/_blog.sass"

const PostsLayout = ({ data: {mdx} }) => {
  return (
    <MainLayout>
      <Header />
      <div className="main-content">
        <div className="full-width-content">
          <div className="posts-content">
            <h1>{mdx.frontmatter.title}</h1>
            <MDXRenderer>
              {mdx.body}
            </MDXRenderer>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default PostsLayout

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`