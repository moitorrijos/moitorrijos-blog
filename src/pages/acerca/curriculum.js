import React from 'react'
import MainLayout from '../../components/main-layout'
import Header from '../../components/header'
import AboutMenu from '../../components/AboutMenu'

const Curriculum = () => (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="content-container">
        <div className="sidebar">
          <AboutMenu />
        </div>
        <div className="inner-content">
          <h1>Curriculum Vitae</h1>
          <p>Este es mi curriculum</p>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default Curriculum