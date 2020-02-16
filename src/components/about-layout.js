import React from 'react'
import MainLayout from '../components/main-layout'
import Header from '../components/header'
import AboutMenu from '../components/AboutMenu'

const Acerca = ({children}) => {
  return (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="content-container">
        <div className="sidebar">
          <AboutMenu />
        </div>
        <div className="inner-content">
          {children}
        </div>
      </div>
    </div>
  </MainLayout>
)}

export default Acerca