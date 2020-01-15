import React from 'react'
import { Link } from 'gatsby'
import icsclass_screen from '../../assets/icsclass-screen.jpg'
import prev_icon from '../../assets/prev-icon.svg'
import next_icon from '../../assets/next-icon.svg'
import portfolio from '../../assets/portfolio.svg'

const Portfolio = () => (
  <div className="home-portfolio space-between">
    <div className="image-portfolio">
      <span className="prev">
        <img src={prev_icon} alt="Previous button"/>
      </span>
      <div className="portfolio-image">
        <img src={icsclass_screen} alt="ICS Class Homepage"/>
      </div>
      <span className="next">
        <img src={next_icon} alt="Next Button"/>
      </span>
    </div>
    <div className="text-portfolio">
      <h3>Mis Trabajos</h3>
      <p>
        Con más de 10 años de experiencia construyendo
        sitios web a la medida te puedo garantizar que tu sitio
        va a resaltar y ser apreciado por tus clientes.
        Mis sitios web son creados para ser rápidos,
        adaptables a cualquier dispositivo y duraderos.
        Convertirán a tus visitantes en clientes.
      </p>
      <Link to="/trabajos" className="primary-button">
        <img src={portfolio} alt="Mis Trabajos"/>
        Mis Trabajos
      </Link>
    </div>
  </div>
)

export default Portfolio