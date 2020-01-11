import React from "react"
import MainLayout from '../components/main-layout'
import Hero from '../components/hero'
import ServicesIndex from '../components/services-index'

export default () => (
  <MainLayout>
    <Hero />
    <div className="main-content">
      <h4 className="centered max-ch tall-line regular">
        Hola, mi nombre es <strong>Juan Moisés Torrijos</strong>
        , soy <strong>diseñador y desarrollador</strong>&nbsp;
        de <strong>sitios y aplicaciones para la web</strong>,
        en la Ciudad de Panamá 🇵🇦.
      </h4>
      <ServicesIndex />
    </div>
  </MainLayout>
)
