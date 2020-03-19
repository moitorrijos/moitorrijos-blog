import React from "react"
import MainLayout from "../components/main-layout"
import Hero from "../components/hero"
import Services from "../components/home/services"
import Portfolio from "../components/home/portfolio"

const Index = () => (
  <MainLayout title="Inicio">
    <Hero />
    <div className="main-content">
      <h2 className="centered reg-ch tall-line regular body-font">
        ¡Hola! mi nombre es <strong>Juan Moisés Torrijos</strong>, soy{" "}
        <strong>diseñador y desarrollador</strong>&nbsp; de{" "}
        <strong>sitios y aplicaciones para la web</strong>, en la Ciudad de
        Panamá{" "}
        <span role="img" aria-label="Panama Flag">
          🇵🇦
        </span>
      </h2>
      <Services />
      <Portfolio />
    </div>
  </MainLayout>
)

export default Index
