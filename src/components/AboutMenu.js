import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import about from "../assets/about.svg"
import curriculum from "../assets/curriculum.svg"
import projects from "../assets/project-about.svg"
import comunidad from "../assets/community.svg"
import "../styles/_about-menu.sass"

const AboutMenu = () => (
  <ul className="about-menu">
    <li>
      <AniLink
        to="/acerca"
        activeClassName="current-menu-page"
        fade
        duration={0.5}
      >
        <img src={about} alt="Acerca de Mi" />
        Acerca de Mi
      </AniLink>
    </li>
    <li>
      <AniLink
        to="/acerca/curriculum"
        activeClassName="current-menu-page"
        fade
        duration={0.5}
      >
        <img src={curriculum} alt="Curriculum" />
        Curriculum Vitae
      </AniLink>
    </li>
    <li>
      <AniLink
        to="/acerca/comunidades"
        activeClassName="current-menu-page"
        fade
        duration={0.5}
      >
        <img src={comunidad} alt="comunidades" />
        Comunidades
      </AniLink>
    </li>
    <li>
      <AniLink
        to="/acerca/proyectos-personales"
        activeClassName="current-menu-page"
        fade
        duration={0.5}
      >
        <img src={projects} alt="Proyectos Personales" />
        Proyectos Personales
      </AniLink>
    </li>
  </ul>
)

export default AboutMenu
