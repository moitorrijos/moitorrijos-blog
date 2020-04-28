import React from "react"
import { Link } from "gatsby"
import Carousel from "../../components/carousel"
import portfolio from "../../assets/portfolio.svg"
import "../../styles/_portfolio-carousel.sass"

const Portfolio = () => {
  
  return (
    <div className="home-portfolio space-between">
      <div className="image-portfolio">
        <Carousel />
      </div>
      <div className="text-portfolio">
        <h2>Mis Trabajos</h2>
        <p>
          Con más de <strong>10 años de experiencia</strong> construyendo sitios
          web a la medida te puedo garantizar que tu sitio será{" "}
          <strong>
            la mejor vitrina para promocionar tus servicios y productos
          </strong>
          . Mis sitios web son creados para ser rápidos, adaptables a cualquier
          dispositivo y duraderos.{" "}
          <strong>Convertirán a tus visitantes en clientes.</strong>
        </p>
        <Link to="/trabajos" className="small-button">
          <img src={portfolio} alt="Mis Trabajos" />
          Mis Trabajos
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
