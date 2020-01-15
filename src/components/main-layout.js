import React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import 'typeface-raleway'
import '../styles/main.sass'

const MainLayout = ({ children }) => (
  <div className="main-container">
    <Navigation />
      {children}
    <Footer />
  </div>
)

export default MainLayout