import React from "react"
import MainLayout from "../../components/main-layout"
import Header from "../../components/header"
import { Link, graphql, useStaticQuery } from "gatsby"
import TwitterIcon from "../../components/icons/twitter-icon"
import InstagramIcon from "../../components/icons/instagram-icon"
import LinkedinIcon from "../../components/icons/linkedin-icon"
import BehanceIcon from "../../components/icons/behance-icon"
import WordpressIcon from "../../components/icons/wordpress-icon"
import CodepenIcon from "../../components/icons/codepen-icon"
import GithubIcon from "../../components/icons/github-icon"
import DribbbleIcon from "../../components/icons/dribbble-icon"
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
                  <Link to={post.node.fields.slug}>
                    <h2>{post.node.frontmatter.title}</h2>
                  </Link>
                  <p className="date">
                    Publicado el {post.node.frontmatter.date}
                  </p>
                  <p>
                    {post.node.excerpt}{" "}
                    <Link to={post.node.fields.slug}>Lea más.</Link>
                  </p>
                </article>
              )
            })}
          </div>
          <aside>
            <div className="sidebar-social-icons">
              <TwitterIcon />
              <InstagramIcon />
              <LinkedinIcon />
              <WordpressIcon />
              <BehanceIcon />
              <DribbbleIcon />
              <CodepenIcon />
              <GithubIcon />
            </div>
          </aside>
        </div>
      </div>
    </MainLayout>
  )
}

export default BlogPage
