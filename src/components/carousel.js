import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/_carousel.sass"
import prev_icon from "../assets/prev-icon.svg"
import next_icon from "../assets/next-icon.svg"

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      miamimedia: file(relativePath: { eq: "slider/miami-media-screen.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      llamame: file(relativePath: { eq: "slider/llamame-online-screen.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      icsclass: file(relativePath: { eq: "slider/icsclass-screen.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      intermaritime: file(
        relativePath: { eq: "slider/intermaritime-screen.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      wordcamp: file(relativePath: { eq: "slider/wordcamp-screen.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  let [position, setPosition] = useState(0)
  let ref = useRef(null)
  let displacement = ref.current ? ref.current.offsetWidth : 0
  function moveRight() {
    setPosition((position += 1))
    if (position > 4) {
      setPosition((position = 0))
    }
  }
  function moveLeft() {
    setPosition((position -= 1))
    if (position < 1) {
      setPosition((position = 0))
    }
  }
  return (
    <div className="container">
      <button
        className="carousel prev"
        onClick={moveLeft}
        aria-label="Previous slide button"
      >
        <img src={prev_icon} alt="Previous" />
      </button>
      <button
        className="carousel next"
        onClick={moveRight}
        aria-label="Next slide button"
      >
        <img src={next_icon} alt="Next" />
      </button>
      <div className="inner-container" ref={ref}>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <Img fluid={data.llamame.childImageSharp.fluid} alt="Cotizame" />
        </div>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <Img fluid={data.icsclass.childImageSharp.fluid} alt="ICSClass" />
        </div>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <Img
            fluid={data.miamimedia.childImageSharp.fluid}
            alt="Llámame Online"
          />
        </div>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <Img
            fluid={data.intermaritime.childImageSharp.fluid}
            alt="InterMaritime"
          />
        </div>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <Img
            fluid={data.wordcamp.childImageSharp.fluid}
            alt="WordCamp Panama 2019"
          />
        </div>
      </div>
      <div className="positions">
        <span className={position === 0 ? "current-position" : ""}></span>
        <span className={position === 1 ? "current-position" : ""}></span>
        <span className={position === 2 ? "current-position" : ""}></span>
        <span className={position === 3 ? "current-position" : ""}></span>
        <span className={position === 4 ? "current-position" : ""}></span>
      </div>
    </div>
  )
}

export default Carousel
