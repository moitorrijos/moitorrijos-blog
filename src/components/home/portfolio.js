import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import portfolio from '../../assets/portfolio.svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import '../../styles/_portfolio-carousel.sass'
import Img from 'gatsby-image'
import prev_icon from '../../assets/prev-icon.svg'
import next_icon from '../../assets/next-icon.svg'

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      cotizame: file(relativePath: {eq: "slider/cotizame-screen.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      icsclass: file(relativePath: {eq: "slider/icsclass-screen.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      intermaritime: file(relativePath: {eq: "slider/intermaritime-screen.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wordcamp: file(relativePath: {eq: "slider/wordcamp-screen.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
  <div className="home-portfolio space-between">
    <div className="image-portfolio">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={4}
        isPlaying={true}
        interval={3200}
        infinite={true}
      >
        <Slider>
          <Slide>
            <Img
              fluid={data.cotizame.childImageSharp.fluid}
              alt='Cotizame'
            />
          </Slide>
          <Slide>
            <Img
              fluid={data.icsclass.childImageSharp.fluid}
              alt='ICSClass'
            />
          </Slide>
          <Slide>
            <Img
              fluid={data.intermaritime.childImageSharp.fluid}
              alt='InterMaritime'
            />
          </Slide>
          <Slide>
            <Img
              fluid={data.wordcamp.childImageSharp.fluid}
              alt='WordCamp Panama 2019'
            />
          </Slide>
        </Slider>
        <ButtonBack className="slider_button prev">
          <img src={prev_icon} alt="Previous"/>
        </ButtonBack>
        <ButtonNext className="slider_button next">
          <img src={next_icon} alt="Next"/>
        </ButtonNext>
      </CarouselProvider>
    </div>
    <div className="text-portfolio">
      <h3>Mis Trabajos</h3>
      <p>
        Con más de {' '}
        <strong>10 años de experiencia</strong>{' '}
        construyendo sitios web a la medida te puedo 
        garantizar que tu sitio será{' '}
        <strong>
          la mejor vitrina para
          promocionar tus servicios y productos
        </strong>.
        Mis sitios web son creados para ser rápidos,
        adaptables a cualquier dispositivo y duraderos.{' '}
        <strong>Convertirán a tus visitantes en clientes.</strong>
      </p>
      <Link to="/trabajos" className="primary-button">
        <img src={portfolio} alt="Mis Trabajos"/>
        Mis Trabajos
      </Link>
    </div>
  </div>
)}

export default Portfolio