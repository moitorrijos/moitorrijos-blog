import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import "typeface-raleway"
import "../styles/main.sass"
import SEO from './seo.js'

const MainLayout = (props) => (
  <>
    <SEO title={props.title} />
    <div className="main-container">
      <Navigation />
      {props.children}
      <Footer />
    </div>
  </>
)

export default MainLayout
