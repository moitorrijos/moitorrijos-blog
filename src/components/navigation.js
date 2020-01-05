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
      <Link to="/">
        <img 
          className="logo"
          src={logo}
          alt="Moi Torrijos Logo all rights reserved"
        />
      </Link>
    </li>
    <li>
      <Link to="/">
        <img src={blog} alt="Blog icon"/>
        Blog
      </Link>
    </li>
    <li>
      <Link to="/acerca">
        <img src={acerca} alt="Acerca de mi"/>
        Acerca de mi
      </Link>
    </li>
    <li>
      <Link to="/servicios">
        <img src={love} alt="Mis Servicios"/>
        Mis Servicios
      </Link>
    </li>
    <li>
      <Link to="/trabajos">
        <img src={portfolio} alt="Mis Trabajos"/>
        Mis Trabajos
      </Link>
    </li>
    <li>
      <Link to="/contactame">
        <img src={mail} alt="Contáctame"/>
        Contáctame
      </Link>
    </li>
  </ul>
)