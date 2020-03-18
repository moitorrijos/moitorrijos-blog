import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import "typeface-raleway"
import "../styles/main.sass"
import SEO from './seo.js'

const MainLayout = ({ children }) => (
  <>
    <SEO />
    <div className="main-container">
      <Navigation />
      {children}
      <Footer />
    </div>
  </>
)

export default MainLayout
