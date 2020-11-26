import React from "react"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import "../styles/_hero.sass"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "juan-moises-torrijos-2020-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 615, maxHeight: 620) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <div className="main-hero">
      <div className="hero-text-image">
        <div className="hero-text">
          <h2>Experto en Creación de</h2>
          <h1>Sitios y Aplicaciones Web</h1>
          <ul>
            <li>eCommerce</li>
            <li>Sitios y Apps Web</li>
            <li>Apps Móviles</li>
          </ul>
          <div className="buttons">
            <Link to="/contactame" className="hero-button">
              Contáctame
            </Link>
            <Link to="/trabajos">
              Conoce Mis Trabajos
            </Link>
          </div>
        </div>
        <Img
          className="hero-image"
          fluid={data.file.childImageSharp.fluid}
          alt="Juan Moisés Torrijos"
        />
      </div>
    </div>
  )
}

export default Hero
