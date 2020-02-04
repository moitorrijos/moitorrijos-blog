import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import MainLayout from '../components/main-layout'
import Header from '../components/header'
import AboutMenu from '../components/AboutMenu'

const Acerca = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark {
        frontmatter {
          title
          description
        }
        html
      }
    }
  `)
  return (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="content-container">
        <div className="sidebar">
          <AboutMenu />
        </div>
        <div className="inner-content">
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <h2 className="bottom-spacing">{data.markdownRemark.frontmatter.description}</h2>
          <div 
            className="inner-content"
            dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
          />
        </div>
      </div>
    </div>
  </MainLayout>
)}

export default Acerca