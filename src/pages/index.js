import React from "react"
import MainLayout from '../components/main-layout'
import Hero from '../components/hero'

export default () => (
  <MainLayout>
    <Hero />
    <div className="main-content">
      <h4 className="centered max-ch tall-line regular">
        Hola, mi nombre es <strong>Juan Moisés Torrijos</strong>
        , soy <strong>diseñador y desarrollador</strong>&nbsp;
        de <strong>sitios y aplicaciones para la web</strong>,
        en la Ciudad de Panamá 🇵🇦.
      </h4>
      <h3 className="centered space-between">Mi Propuesta</h3>
      <div className="services">
        <div className="service">
          <h4>Sitios Web Profesionales</h4>
          <p>
            Si estás buscando un sitio web para promocionar tu negocio
            necesitas un sitio creado profesionalmente.
            Gracias a mi experiencia de más de 10 años, te puedo garantizar
            un sitio web completo, hecho a la medida y diseñado para
            atraer visitantes y convertirlos en tus clientes.
          </p>
        </div>
        <div className="service">
          <h4>Sitios Web Rápidos</h4>
          <p>
            Creo sitios web con las últimas tecnologías,
            haciéndolos muy rápidos y aptos para cualquier 
            tamaño de pantalla, desde los móviles más pequeño, 
            hasta las pantallas de escritorio.
            La experiencia de tus clientes siempre será la mejor.
          </p>
        </div>
        <div className="service">
          <h4>Sitios Web a la Medida</h4>
          <p>
            Me dedico a crear sitios web 100% a la medida,
            sin plantillas. Cada sitio web es único,
            centrado en una investigación rigurosa de tu negocio,
            el mercado y tus clientes. Tu sitio web será la mejor
            vitrina para promocionar tus productos y servicios.
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
)
