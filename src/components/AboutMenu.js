import React from "react"
import { Link } from "gatsby"
import about from "../assets/about.svg"
import curriculum from "../assets/curriculum.svg"
import projects from "../assets/project-about.svg"
import comunidad from "../assets/community.svg"
import "../styles/_about-menu.sass"

const AboutMenu = () => (
  <ul className="about-menu">
    <li>
      <Link to="/acerca" activeClassName="current-menu-page">
        <img src={about} alt="Acerca de Mi" />
        Acerca de Mi
      </Link>
    </li>
    <li>
      <Link to="/acerca/curriculum" activeClassName="current-menu-page">
        <img src={curriculum} alt="Curriculum" />
        Curriculum Vitae
      </Link>
    </li>
    <li>
      <Link to="/acerca/comunidades" activeClassName="current-menu-page">
        <img src={comunidad} alt="comunidades" />
        Comunidades
      </Link>
    </li>
    <li>
      <Link
        to="/acerca/proyectos-personales"
        activeClassName="current-menu-page"
      >
        <img src={projects} alt="Proyectos Personales" />
        Proyectos Personales
      </Link>
    </li>
  </ul>
)

export default AboutMenu
