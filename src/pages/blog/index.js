import React from "react"
import MainLayout from "../../components/main-layout"
import Header from "../../components/header"
import { Link, graphql, useStaticQuery }  from "gatsby"
import '../../styles/_blog.sass'

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
        <div className="full-width-content">
          <div className="posts-content">
            {data.allMdx.edges.map(post => {
              return (
                <div className="post" key={post.node.id}>
                  <Link to={post.node.fields.slug}>
                    <h2>{post.node.frontmatter.title}</h2>
                  </Link>
                  <p className="date">Publicado el {post.node.frontmatter.date}</p>
                  <p>{post.node.excerpt} <Link to={post.node.fields.slug}>Lea más.</Link></p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default BlogPage
