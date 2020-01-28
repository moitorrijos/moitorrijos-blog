import React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import 'typeface-raleway'
import '../styles/main.sass'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import favicon from '../../static/favicon.ico'

const MainLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          siteurl,
          description
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteurl} />
        <link rel="icon" href={favicon} />
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <div className="main-container">
        <Navigation />
          {children}
        <Footer />
      </div>
    </>
  )
}

export default MainLayout