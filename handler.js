const AWS = require('aws-sdk')
const SES = new AWS.SES()
const miCorreo = 'moitorrijos@gmail.com'
const miWebsite = 'https://www.moitorrijos.com/contactame'

function sendEmail(formData, callback) {
  const emailParams = {
    Source: miCorreo,
    ReplyToAddresses: [formData.tuCorreo],
    Destination: {
      ToAddresses: [miCorreo],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `
            Hola mi es Nombre: ${formData.tuNombre} \n
            Correo: ${formData.tuCorreo} \n
            Quiero hablar de: ${formData.tema} \n
            Mi teléfono es: ${formData.telephone} \n
            Mi mensaje es: ${formData.message}
          `
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Tienes un correo de MoiTorrijos.com 📩'
      }
    }
  }
  SES.sendEmail(emailParams, callback)
}

module.exports.staticSiteMailer = async (event, context, callback) => {
  const formData = event

  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    }
    callback(null, response)
  })
}
