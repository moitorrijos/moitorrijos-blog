import React from 'react'
import MoiTorrijosLogo from './icons/moi-logo'
import TwitterIcon from './icons/twitter-icon'
import InstagramIcon from './icons/instagram-icon'
import LinkedinIcon from './icons/linkedin-icon'
import BehanceIcon from './icons/behance-icon'
import WordpressIcon from './icons/wordpress-icon'

const Footer = () => (
  <div id="footer" className="footer-container">
    <div className="footer-columns">
      <div className="footer-column footer-logo">
        <MoiTorrijosLogo />
        <div className="footer-about">
          <h3>Quién Soy</h3>
          <p>
            Juan Moisés Torrijos diseñador y programador
            de aplicaciones web en la Ciudad de Panamá.
          </p>
        </div>
      </div>
      <div className="footer-column">
        <h3>Del Blog</h3>
        <ul>
          <li>
            <a href="#0">Mi Proceso de Trabajo</a>
          </li>
          <li>
            <a href="#0">Cómo Garantizar un Trabajo Profesional</a>
          </li>
          <li>
            <a href="#0">El Método de la Papa Caliente</a>
          </li>
          <li>
            <a href="#0">Cómo crear una Aplicación de Principio a Fin</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>
          Redes Sociales
        </h3>
        <p>Sígueme en estas redes sociales</p>
        <div className="social-media-moitorrijos">
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <WordpressIcon />
          <BehanceIcon />
        </div>
      </div>
    </div>
    <p className="copyright">
      © 2012 - { new Date().getFullYear() } Juan Moisés Torrijos todos los derechos reservados.
    </p>
  </div>
)

export default Footer