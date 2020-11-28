import React from "react"
import Header from "../components/header"
import SEO from '../components/seo'
import Navigation from '../components/navigation'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SocialSidebar from "../components/social-sidebar.js"
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
        <div className="blog-columns">
          <div className="posts-content">
            <AniLink
              cover
              bg="#1D38C7"
              direction="top"
              duration={0.5}
              className="back-to-blog"
              to="/blog"
            >
              &laquo; Regresar a Blog
            </AniLink>
            <h1>{mdx.frontmatter.title}</h1>
            <MDXRenderer>
              {mdx.body}
            </MDXRenderer>
          </div>
          <SocialSidebar />
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default PostsLayout
