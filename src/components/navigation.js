import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/moitorrijos-logo.svg'
import blog from '../assets/blogging.svg'
import acerca from '../assets/acerca-de-mi.svg'
import love from '../assets/love.svg'
import portfolio from '../assets/portfolio.svg'
import mail from '../assets/mail.svg'

export default () => (
  <ul className="navigation">
    <li>
      <Link to="/" activeClassName="current-page">
        <img
          className="logo"
          src={logo}
          alt="Moi Torrijos Logo all rights reserved"
        />
      </Link>
    </li>
    <li>
      <Link to="/blog" activeClassName="current-page">
        <img src={blog} alt="Blog icon"/>
        Blog
      </Link>
    </li>
    <li>
      <Link to="/acerca" activeClassName="current-page">
        <img src={acerca} alt="Acerca de mi"/>
        Acerca de mi
      </Link>
    </li>
    <li>
      <Link to="/servicios" activeClassName="current-page">
        <img src={love} alt="Mis Servicios"/>
        Mis Servicios
      </Link>
    </li>
    <li>
      <Link to="/trabajos" activeClassName="current-page">
        <img src={portfolio} alt="Mis Trabajos"/>
        Mis Trabajos
      </Link>
    </li>
    <li>
      <Link to="/contactame" activeClassName="current-page">
        <img src={mail} alt="Contáctame"/>
        Contáctame
      </Link>
    </li>
  </ul>
)