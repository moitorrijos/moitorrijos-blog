import React from 'react'
import MainLayout from '../components/main-layout'
import Header from '../components/header'
import { graphql, useStaticQuery } from 'gatsby'



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
      <div className="full-width-content">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <h2>{data.markdownRemark.frontmatter.description}</h2>
        <div 
          className="max-ch" 
          dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
        />
      </div>
    </div>
  </MainLayout>
)}

export default Acerca