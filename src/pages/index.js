import React from "react"
import MainLayout from '../components/main-layout'
import Hero from '../components/hero'

export default () => (
  <MainLayout>
    <Hero />
    <div className="main-content">
      <h4 className="centered max-ch quien-soy">
        Hola, mi nombre es <strong>Juan Moisés Torrijos</strong>
        , soy <strong>diseñador y desarrollador</strong>&nbsp;
        de Aplicaciones para la <strong>Web, Móviles y de Escritorio</strong>, 
        en la Ciudad de Panamá 🇵🇦.
      </h4>
    </div>
  </MainLayout>
)
