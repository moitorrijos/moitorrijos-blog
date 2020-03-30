import React, { useState } from "react"
import { useFormik } from "formik"
import SendIcon from "../components/icons/send-icon"
import axios from 'axios'
import "../styles/_contact-form.sass"
const url = 'https://j7qtz60nm7.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer'

const ContactForm = () => {
  const [ message, setMessage ] = useState('')
  const [ confirmation, setConfirmation ] = useState('success')
  const formik = useFormik({
    initialValues: {
      tema: "Quiero decir hola",
      tuNombre: "",
      tuCorreo: "",
      telephone: "",
      message: "",
      saludos: "",
    },
    onSubmit: async (values) => {
      const errorMessage = 'Disculpa, ha ocurrido un error. Inténtalo de nuevo más tarde o contáctame por WhatsApp con el botón de arriba.'
      try {
        const response = await axios.post(url, values)
        if (response.statusCode === 200) {
          setConfirmation('success')
          setMessage('Gracias, el mensaje ha sido enviado')
        } else {
          setConfirmation('error')
          setMessage(errorMessage)
        }
        return await response.json(); // parses JSON response into native JavaScript objects
      } catch(error) {
        setConfirmation('error')
        setMessage(errorMessage)
        console.log(error)
      }
    },
  })
  return (
    <form className="contactform" onSubmit={formik.handleSubmit}>
      <div className="inner-form">
        <label htmlFor="tema">
          Escoge un tema
          <br />
          <select
            name="tema"
            value={formik.values.tema}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="Quiero decir hola">Quiero decir hola</option>
            <option value="Necesito un sitio web">Necesito un sitio web</option>
            <option value="Necesito una app">Necesito una app</option>
            <option value="Quiero hablar de Negocios">
              Quiero hablar de Negocios
            </option>
          </select>
        </label>
        <label htmlFor="tuNombre">
          Cuál es tu nombre <span className="small">(necesario)</span>
          <input
            type="text"
            name="tuNombre"
            placeholder="Maria Antonieta de las Nieves"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tuNombre}
            required="required"
          />
        </label>
        <label htmlFor="tuCorreo">
          Cuál es tu correo <span className="small">(necesario)</span>
          <input
            type="email"
            name="tuCorreo"
            placeholder="maria.antonieta@delasnieves.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tuCorreo}
            required="required"
          />
        </label>
        <label htmlFor="telephone">
          Cuál es tu teléfono <span className="small">(opcional)</span>
          <input
            type="tel"
            name="telephone"
            placeholder="+(507) 6677-8899"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telephone}
          />
        </label>
        <label className="saludos" htmlFor="tuCorreo">
          Escribe un saludo <span className="small">(necesario)</span>
          <input
            type="email"
            name="saludos"
            placeholder="maria.antonieta@delasnieves.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.saludo}
          />
        </label>
        <label htmlFor="message" className="span2">
          Escribe tu mensaje:
          <textarea
            name="message"
            placeholder="Hola Moi necesito un sitio web 😁..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            required="required"
          />
        </label>
      </div>
      <button
        type="submit"
        className="primary-button"
        disabled={formik.isSubmitting}
      >
        <SendIcon />
        Enviar
      </button>
      {(message && 
        <div className={`message ${confirmation}`}>
          <p>{ message }</p>
        </div>
      )}
    </form>
  )
}

export default ContactForm
