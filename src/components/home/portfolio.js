import React from 'react'
import { Link } from 'gatsby'
import portfolio from '../../assets/portfolio.svg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import icsclass_screen from '../../assets/icsclass-screen.jpg'
import cotizame_screen from '../../assets/cotizame-screen.jpg'
import intermaritime_screen from '../../assets/intermaritime-screen.jpg'
import wordcamp_screen from '../../assets/wordcamp-screen.jpg'
import prev_icon from '../../assets/prev-icon.svg'
import next_icon from '../../assets/next-icon.svg'

const Portfolio = () => (
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
            <img src={icsclass_screen} alt="ICSClass Certification Services"/>
          </Slide>
          <Slide>
            <img src={cotizame_screen} alt="Cotizame"/>
          </Slide>
          <Slide>
            <img src={intermaritime_screen} alt="InterMaritime"/>
          </Slide>
          <Slide>
            <img src={wordcamp_screen} alt="WordCamp Panama 2019"/>
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
        Con más de
        <strong>10 años de experiencia</strong>&nbsp;
        construyendo sitios web a la medida te puedo 
        garantizar que tu sitio será&nbsp;
        <strong>
          la mejor vitrina para
          promocionar tus servicios y productos
        </strong>.
        Mis sitios web son creados para ser rápidos,
        adaptables a cualquier dispositivo y duraderos.&nbsp;
        <strong>Convertirán a tus visitantes en clientes.</strong>
      </p>
      <Link to="/trabajos" className="primary-button">
        <img src={portfolio} alt="Mis Trabajos"/>
        Mis Trabajos
      </Link>
    </div>
  </div>
)

export default Portfolio