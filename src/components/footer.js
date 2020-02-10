import React from 'react'
import MoiTorrijosLogo from './icons/moi-logo'
import TwitterIcon from './icons/twitter-icon'
import InstagramIcon from './icons/instagram-icon'
import LinkedinIcon from './icons/linkedin-icon'
import BehanceIcon from './icons/behance-icon'
import WordpressIcon from './icons/wordpress-icon'
import '../styles/_footer.sass'

const Footer = () => (
  <div id="footer" className="footer-container">
    <div className="footer-columns">
      <div className="footer-column footer-logo">
        <div className="footer-about">
          <h3>Quién Soy</h3>
          <p>
            Juan Moisés Torrijos diseñador y programador
            de aplicaciones web en la Ciudad de Panamá {' '}
            <span role="img" aria-label="Panama Flag">🇵🇦</span>
          </p>
        </div>
        <MoiTorrijosLogo />
      </div>
      <div className="footer-column">
        <h3>Vínculos Importantes</h3>
        <ul>
          <li>
            <a href="https://www.meetup.com/WordPress-Meetup-Ciudad-de-Panama/">
              Grupo de WordPress de Panamá
            </a>
          </li>
          <li>
            <a href="https://www.meetup.com/React-Panama/">
              Grupo de ReactJS Panamá
            </a>
          </li>
          <li>
            <a href="https://2020.centroamerica.wordcamp.org/">
              WordCamp Centro América 2020
            </a>
          </li>
          <li>
            <a href="https://reactlaconf.co/">React Conf Colombia</a>
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
      © { new Date().getFullYear() } Juan Moisés Torrijos
      todos los derechos reservados. Ciudad de Panamá {' '}
      <span role="img" aria-label="Panama Flag">🇵🇦</span>
    </p>
  </div>
)

export default Footer