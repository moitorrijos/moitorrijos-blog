import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MoiTorrijosLogo from "./icons/moi-logo"
import blog from "../assets/blogging.svg"
import acerca from "../assets/acerca-de-mi.svg"
import love from "../assets/love.svg"
import portfolio from "../assets/portfolio.svg"
import mail from "../assets/mail.svg"
import "../styles/_navigation.sass"

const Navigation = () => (
  <div className="navigation">
    <AniLink 
      cover
      bg="#1D38C7"
      direction="left"
      to="/"
      activeClassName="current-page"
      className="logo-nav"
      duration={0.5}
    >
      <MoiTorrijosLogo />
    </AniLink>
    <AniLink
      cover
      bg="#1D38C7"
      direction="left"
      to="/acerca"
      activeClassName="current-page"
      partiallyActive={true}
      duration={0.5}
    >
      <img src={acerca} alt="Acerca de mi" />
      De Mi
    </AniLink>
    <AniLink
      cover
      bg="#1D38C7"
      direction="left"
      to="/servicios"
      activeClassName="current-page"
      duration={0.5}
    >
      <img src={love} alt="Mis Servicios" />
      Servicios
    </AniLink>
    <AniLink
      cover
      bg="#1D38C7"
      direction="left"
      to="/trabajos"
      activeClassName="current-page"
      duration={0.5}
    >
      <img src={portfolio} alt="Mis Trabajos" />
      Trabajos
    </AniLink>
    <AniLink
      cover
      bg="#1D38C7"
      direction="left"
      to="/blog"
      activeClassName="current-page"
      duration={0.5}
    >
      <img src={blog} alt="Blog icon" />
      Blog
    </AniLink>
    <AniLink
      cover
      bg="#1D38C7"
      direction="left"
      to="/contactame"
      activeClassName="current-page"
      duration={0.5}
    >
      <img src={mail} alt="Contáctame" />
      Contacto
    </AniLink>
  </div>
)

export default Navigation
