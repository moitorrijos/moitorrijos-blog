import React from 'react'
import MainLayout from '../../components/main-layout'
import Header from '../../components/header'
import AboutMenu from '../../components/AboutMenu'

const Alianzas = () => (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="content-container">
        <div className="sidebar">
          <AboutMenu />
        </div>
        <div className="inner-content">
          <h1>Alianzas</h1>
          <p>Mis Alianzas y Socios</p>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default Alianzas