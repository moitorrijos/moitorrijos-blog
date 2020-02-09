import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "moitorrijos.png" }) {
        childImageSharp {
          fluid(maxWidth: 454, maxHeight: 465) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
  <div className="main-hero">
      <div className="hero-text-image">
        <div className="hero-text">
          <h2>Diseñador y Desarrollador de</h2>
          <h1>Aplicaciones Web</h1>
        </div>
        <Img
          className="hero-image"
          fluid={data.file.childImageSharp.fluid}
          alt="Juan Moisés Torrijos"
        />
      </div>
    </div>
)}

export default Hero