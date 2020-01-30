import React from 'react'
import Header from '../components/header'
import MainLayout from '../components/main-layout'

const Trabajos = () => (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="full-width-content">
        <h1 className="centered">Mis Trabajos</h1>
        <h2 className="centered">Mi portafolio de trabajos</h2>
      </div>
    </div>
  </MainLayout>
)

export default Trabajos