import React from 'react'
import Navigation from './navigation'
import Footer from './footer'
import 'typeface-raleway'
import '../styles/main.sass'

export default ({ children }) => (
  <div className="main-container">
    <Navigation />
      {children}
    <Footer />
  </div>
)