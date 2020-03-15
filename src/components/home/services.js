import React from "react"

import sitios_profesionales from "../../assets/sitios-web-profesionales.svg"
import sitios_rapidos from "../../assets/sitios-web-rapidos.svg"
import sitios_a_la_medida from "../../assets/sitios-a-la-medida.svg"

const Services = () => (
  <div className="services space-between">
    <div className="service">
      <img src={sitios_profesionales} alt="Sitios Web Profesionales" />
      <h3>Sitios Web Profesionales</h3>
      <p>
        Si estás buscando un sitio web para promocionar tu negocio{" "}
        <strong>necesitas un sitio creado profesionalmente.</strong> Gracias a
        mi experiencia de más de 10 años, te puedo garantizar{" "}
        <strong>
          un sitio web completo, hecho a la medida y diseñado para atraer
          visitantes y convertirlos en tus clientes.
        </strong>
      </p>
    </div>
    <div className="service">
      <img src={sitios_rapidos} alt="Sitios Web Rápidos" />
      <h3>Sitios Web Rápidos</h3>
      <p>
        Creo <strong>sitios web con las últimas tecnologías</strong>,
        haciéndolos muy rápidos y aptos para cualquier tamaño de pantalla, desde
        los móviles más pequeño, hasta las pantallas de escritorio.{" "}
        <strong>La experiencia de tus clientes siempre será la mejor.</strong>
      </p>
    </div>
    <div className="service">
      <img src={sitios_a_la_medida} alt="Sitios Web a la Medida" />
      <h3>Sitios Web a la Medida</h3>
      <p>
        Me dedico a crear sitios web 100% a la medida, sin plantillas.{" "}
        <strong>Cada sitio web es único</strong>, centrado en una investigación
        rigurosa de tu negocio, el mercado y tus clientes.{" "}
        <strong>
          Tu sitio web será la mejor vitrina para promocionar tus productos y
          servicios.
        </strong>
      </p>
    </div>
  </div>
)

export default Services
