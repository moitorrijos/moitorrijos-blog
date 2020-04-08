import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from 'gatsby'
import ogImage from '../assets/juan-moises-torrijos-website.jpg'

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(graphql`
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
  const metaDescription = description || site.siteMetadata.description
  const siteTitle = title || site.siteMetadata.title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteTitle}
      titleTemplate={`%s | ${site.siteMetadata.description}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: ogImage
        },
        {
          name: `og:image`,
          content: ogImage
        },
        {
          itemprop: 'image',
          content:  ogImage
        }
      ].concat(meta)}
    >

    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `es-PA`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO