import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
            <AniLink
              cover
              bg="#1D38C7"
              direction="left"
              duration={0.5}
              to="/contactame"
              className="hero-button"
            >
              Contáctame
            </AniLink>
            <AniLink
              cover
              bg="#1D38C7"
              direction="left"
              duration={0.5}
              to="/trabajos"
            >
              Conoce Mis Trabajos
            </AniLink>
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
