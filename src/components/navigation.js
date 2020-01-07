import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/moitorrijos-logo.svg'
import blog from '../assets/blogging.svg'
import acerca from '../assets/acerca-de-mi.svg'
import love from '../assets/love.svg'
import portfolio from '../assets/portfolio.svg'
import mail from '../assets/mail.svg'

export default () => (
  <div className="navigation">
    <Link to="/" activeClassName="current-page">
      <img
        className="logo"
        src={logo}
        alt="Moi Torrijos Logo all rights reserved"
      />
    </Link>
    <Link to="/blog" activeClassName="current-page">
      <img src={blog} alt="Blog icon"/>
      Blog
    </Link>
    <Link to="/acerca" activeClassName="current-page">
      <img src={acerca} alt="Acerca de mi"/>
      Acerca de mi
    </Link>
    <Link to="/servicios" activeClassName="current-page">
      <img src={love} alt="Mis Servicios"/>
      Mis Servicios
    </Link>
    <Link to="/trabajos" activeClassName="current-page">
      <img src={portfolio} alt="Mis Trabajos"/>
      Mis Trabajos
    </Link>
    <Link to="/contactame" activeClassName="current-page">
      <img src={mail} alt="Contáctame"/>
      Contáctame
    </Link>
  </div>
)