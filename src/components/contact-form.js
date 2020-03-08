import React from 'react'
import { useFormik } from 'formik'
import '../styles/_contact-form.sass'
import SendIcon from '../components/icons/send-icon'
//TODO: Validation
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      tema: 'Quiero decir hola',
      tuNombre: '',
      tuCorreo: '',
      telephone: '',
      message: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values))
    }
  })
  return (
    <form
      className="contactform"
      onSubmit={formik.handleSubmit}
    >
      <div className="inner-form">
        <label htmlFor="tema">
          Escoge un tema<br />
          <select
            name="tema"
            value={formik.values.tema}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="Quiero decir hola">Quiero decir hola</option>
            <option value="Necesito un sitio web">Necesito un sitio web</option>
            <option value="Necesito una app">Necesito una app</option>
            <option value="Quiero hablar de Negocios">Quiero hablar de Negocios</option>
          </select>
        </label>
        <label htmlFor="tuNombre">
          Cuál es tu nombre{' '}
          <span className="small">(necesario)</span>
          <input 
            type="text"
            name="tuNombre"
            placeholder="Maria Antonieta de las Nieves"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tuNombre}
          />
        </label>
        <label htmlFor="tuCorreo">
          Cuál es tu correo{' '}
          <span className="small">(necesario)</span>
          <input 
            type="email"
            name="tuCorreo"
            placeholder="maria.antonieta@delasnieves.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tuCorreo}
          />
        </label>
        <label htmlFor="telephone">
          Cuál es tu teléfono{' '}
          <span className="small">(opcional)</span>
          <input
            type="tel"
            name="telephone"
            placeholder="+(507) 6677-8899"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telephone}
          />
        </label>
        <label htmlFor="message" className="span2">
          Escribe tu mensaje:
          <textarea
            name="message"
            placeholder="Hola Moi necesito un sitio web 😁..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {formik.values.message}
          </textarea>
        </label>
      </div>
      <button className="primary-button" type="submit">
        <SendIcon />
        Enviar
      </button>
    </form>
  )
}

export default ContactForm
