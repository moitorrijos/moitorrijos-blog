import React from 'react'
import MainLayout from '../components/main-layout'
import Header from '../components/header'

const Acerca = () => (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="inner-main-content">
        <h1>Diseñador y Programador de Aplicaciones</h1>
        <p>
          Hola mi nombre es Juan Moisés Torrijos y soy diseñador 
          y desarrollador de aplicaciones web y móviles.
        </p>
      </div>
    </div>
  </MainLayout>
)

export default Acerca