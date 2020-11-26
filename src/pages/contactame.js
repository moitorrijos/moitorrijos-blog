import React from "react"
import MainLayout from "../components/main-layout"
import Header from "../components/header"
import WhatsappIcon from "../components/icons/whatsapp-icon"
import ContactForm from "../components/contact-form"
import "../styles/_contactame.sass"

const ContactPage = () => (
  <MainLayout title="Contáctame">
    <Header />
    <div className="main-content">
      <div className="full-width-content">
        <h1 className="centered">Contáctame</h1>
        <div className="small-centered">
          <p>
            ¿Necesitas una tarea urgente?
            <br />
            <a
              className="whatsapp"
              href="https://wa.me/50766794458?text=Hola%20Moi%2C%20necesito%20un%20sitio%20web!"
              target="_blank"
              rel="noopener noreferrer"
            >
              click aquí para hablar por WhatsApp{" "}
              <WhatsappIcon />
            </a>
            <br />o llena el formulario abajo y te contactaré muy pronto.
          </p>
        </div>
        <div className="medium-centered">
          <ContactForm />
        </div>
      </div>
    </div>
  </MainLayout>
)

export default ContactPage
