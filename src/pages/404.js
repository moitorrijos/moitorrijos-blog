import React from "react"
import MainLayout from "../components/main-layout"
import Header from "../components/header"

const Acerca = () => (
  <MainLayout>
    <Header />
    <div className="main-content">
      <h1>Ups...Error 404</h1>
      <p>Esta página no existe o fue reubicada. Disculpa las molestias.</p>
    </div>
  </MainLayout>
)

export default Acerca
