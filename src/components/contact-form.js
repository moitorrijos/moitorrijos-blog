import React, { useState } from "react"
import { useFormik } from "formik"
import SendIcon from "../components/icons/send-icon"
import "../styles/_contact-form.sass"
const errorMessage = 'Disculpa, ha ocurrido un error. Inténtalo de nuevo más tarde o contáctame por WhatsApp con el botón de arriba.'


const ContactForm = () => {
  const [ message, setMessage ] = useState('')
  const [ status, setStatus ] = useState('success')
  const formik = useFormik({
    initialValues: {
      tema: "Quiero decir hola",
      tuNombre: "",
      tuCorreo: "",
      telephone: "",
      message: "",
      saludos: ""
    },
    onSubmit: async (values) => {
      try {
        const response = fetch('https://api.formik.com/submit/moitorrijos-contact-form/moitorrijoscom-contact-form', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
        console.log(response)
        if (response.success === 'post call succeed!') {
          setStatus('success')
          setMessage('Gracias, el mensaje ha sido enviado.')
        } else {
          setStatus('error')
          setMessage(errorMessage)
        }
        return await response.json(); // parses JSON response into native JavaScript objects
      } catch(error) {
        setStatus('error')
        setMessage(errorMessage)
        console.error(error)
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
        className={formik.isSubmitting ? 'primary-button sending' : 'primary-button'}
        disabled={formik.isSubmitting}
      >
        <SendIcon />
        {formik.isSubmitting ? 'Enviando' : 'Enviar'}
      </button>
      {(message && 
        <div className={`message ${status}`}>
          <p>{ message }</p>
        </div>
      )}
    </form>
  )
}

export default ContactForm
