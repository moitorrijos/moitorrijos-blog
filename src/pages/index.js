import React from "react"
import MainLayout from '../components/main-layout'
import moitorrijos from '../assets/moitorrijos.png'

export default () => (
  <MainLayout>
    <div className="main-hero">
      <div className="hero-text-image">
        <div className="hero-text">
          <h2>Diseñador y Programador</h2>
          <h1>De Aplicaciones</h1>
          <h2>Web, Móviles y Escritorios</h2>
        </div>
        <div className="hero-image">
          <img
            src={moitorrijos}
            alt="Juan Moises Torrijos Programador y Diseñador"
          />
        </div>
      </div>
    </div>
  </MainLayout>
)
