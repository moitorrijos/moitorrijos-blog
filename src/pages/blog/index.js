import React from "react"
import MainLayout from "../../components/main-layout"
import Header from "../../components/header"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SocialSidebar from "../../components/social-sidebar.js"
import "../../styles/_blog.sass"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "post" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 520)
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <MainLayout>
      <Header />
      <div className="main-content">
        <div className="blog-columns">
          <div className="posts-content">
            {data.allMdx.edges.map(post => {
              return (
                <article className="post" key={post.node.id}>
                  <AniLink
                    cover
                    bg="#1D38C7"
                    direction="top"
                    to={post.node.fields.slug}
                    className="blog-link-header"
                  >
                    <h2>{post.node.frontmatter.title}</h2>
                  </AniLink>
                  <p className="date">
                    Publicado el {post.node.frontmatter.date}
                  </p>
                  <p>
                    {post.node.excerpt}{" "}
                    <AniLink
                      cover
                      bg="#1D38C7"
                      direction="top"
                      duration={0.25}
                      to={post.node.fields.slug}
                    >Lea más.</AniLink>
                  </p>
                </article>
              )
            })}
          </div>
          <SocialSidebar />
        </div>
      </div>
    </MainLayout>
  )
}

export default BlogPage
