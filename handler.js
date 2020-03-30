const AWS = require('aws-sdk')
const SES = new AWS.SES()
const miCorreo = 'moitorrijos@gmail.com'
const miWebsite = 'https://moitorrijos.com'

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
  const formData = event.body

  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': miWebsite,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    }
    callback(null, response)
  })
}
