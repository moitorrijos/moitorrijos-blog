import React from "react"
import MainLayout from '../components/main-layout'
import Hero from '../components/hero'
import Services from '../components/home/services'
import Portfolio from '../components/home/portfolio'

const Index = () => (
  <MainLayout>
    <Hero />
    <div className="main-content">
      <h4 className="centered max-ch tall-line regular">
        Hola, mi nombre es <strong>Juan Moisés Torrijos</strong>
        , soy <strong>diseñador y desarrollador</strong>&nbsp;
        de <strong>sitios y aplicaciones para la web</strong>,
        en la Ciudad de Panamá 🇵🇦.
      </h4>
      <Services />
      <Portfolio />
    </div>
  </MainLayout>
)

export default Index