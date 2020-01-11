import React from 'react'
import moitorrijos from '../assets/moitorrijos.png'

export default () => (
  <div className="main-hero">
      <div className="hero-text-image">
        <div className="hero-text">
          <h3>Diseñador y Desarrollador de</h3>
          <h1>Aplicaciones Web</h1>
        </div>
        <div className="hero-image">
          <img
            src={moitorrijos}
            alt="Juan Moises Torrijos Programador y Diseñador"
          />
        </div>
      </div>
    </div>
)