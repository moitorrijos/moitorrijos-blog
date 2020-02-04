import React from 'react'
import MainLayout from '../../components/main-layout'
import Header from '../../components/header'
import AboutMenu from '../../components/AboutMenu'

const PersonalProjectsPage = () => (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="content-container">
        <div className="sidebar">
          <AboutMenu />
        </div>
        <div className="inner-content">
          <h1>Mis Proyectos Personales</h1>
          <p>Aquí deben ir mis proyectos personales</p>
        </div>
      </div>
    </div>
  </MainLayout>
)

export default PersonalProjectsPage