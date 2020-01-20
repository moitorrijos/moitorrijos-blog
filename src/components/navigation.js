import React from 'react'
import { Link } from 'gatsby'
import MoiTorrijosLogo from './icons/moi-logo'
import blog from '../assets/blogging.svg'
import acerca from '../assets/acerca-de-mi.svg'
import love from '../assets/love.svg'
import portfolio from '../assets/portfolio.svg'
import mail from '../assets/mail.svg'

const Navigation = () => (
  <div className="navigation">
    <Link to="/" activeClassName="current-page">
      <MoiTorrijosLogo />
    </Link>
    <Link to="/acerca" activeClassName="current-page">
      <img src={acerca} alt="Acerca de mi"/>
      Quién Soy
    </Link>
    <Link to="/servicios" activeClassName="current-page">
      <img src={love} alt="Mis Servicios"/>
      Servicios
    </Link>
    <Link to="/trabajos" activeClassName="current-page">
      <img src={portfolio} alt="Mis Trabajos"/>
      Trabajos
    </Link>
    <Link to="/blog" activeClassName="current-page">
      <img src={blog} alt="Blog icon"/>
      Blog
    </Link>
    <Link to="/contactame" activeClassName="current-page">
      <img src={mail} alt="Contáctame"/>
      Contáctame
    </Link>
  </div>
)

export default Navigation