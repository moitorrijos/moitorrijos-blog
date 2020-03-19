import React from "react"
import Header from "../components/header"
import SEO from '../components/seo'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../styles/_blog.sass"

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      body
      frontmatter {
        title
      }
    }
  }
`

const PostsLayout = ({ data: {mdx} }) => (
  <>
    <SEO title={mdx.frontmatter.title} description={mdx.excerpt}/>
    <div className="main-container">
      <Navigation />
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
      <Footer />
    </div>
  </>
)

export default PostsLayout
