import React from "react"
import MainLayout from '../components/main-layout'
import Hero from '../components/hero'
import Services from '../components/home/services'
import Portfolio from '../components/home/portfolio'

const Index = () => (
  <MainLayout>
    <Hero />
    <div className="main-content">
      <h2 className="centered reg-ch tall-line regular">
        Hola, soy <strong>Juan Moisés Torrijos</strong>
        , <strong>diseñador y desarrollador</strong>&nbsp;
        de <strong>sitios y aplicaciones para la web</strong>,
        en la Ciudad de Panamá 🇵🇦.
      </h2>
      <Services />
      <Portfolio />
    </div>
  </MainLayout>
)

export default Index