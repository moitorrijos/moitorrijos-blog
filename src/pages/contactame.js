import React from 'react'
import MainLayout from '../components/main-layout'
import Header from '../components/header'
import WhatsappIcon from '../components/icons/whatsapp-icon'
import '../styles/_contactame.sass'

const ContactPage = () => {
  function showHoneypot() {
    console.log('Honeypot goes here...')
  }
  return (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="full-width-content">
        <h1 className="centered">Contáctame</h1>
        <div className="centered-text">
          <p>
            ¿Necesitas una tarea urgente?
            <br/>
            <button className="whatsapp" onClick={showHoneypot}>
              Haz click aquí para conversar conmigo por WhatsApp{' '}
              <WhatsappIcon />
            </button>
            <br/>
            O llena el formulario abajo y te contactaré muy pronto.
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
  )
}

export default ContactPage