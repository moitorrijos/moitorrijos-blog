import React from "react"
import MainLayout from "../components/main-layout"
import Header from "../components/header"
import { graphql, useStaticQuery }  from "gatsby"
import '../styles/_blog.sass'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        edges {
          node {
            name,
            id,
            childMdx {
              excerpt(pruneLength: 420)
              frontmatter {
                title,
                date
              }
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
          <h1 className="centered">Mi Blog</h1>
          <div className="posts-content">
            {data.allFile.edges.map(post => {
              return (
                <div className="post" key={post.node.id}>
                  <h2>{post.node.childMdx.frontmatter.title}</h2>
                  <p className="date">Publicado el {post.node.childMdx.frontmatter.date}</p>
                  <p>{post.node.childMdx.excerpt}</p>
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

