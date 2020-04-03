const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app')
const AWS = require('aws-sdk')
AWS.config.update({region:'us-east-1'})
const SES = new AWS.SES()
const miCorreo = 'moitorrijos@gmail.com'
const miSitio = 'https://www.moitorrijos.com'
const server = awsServerlessExpress.createServer(app);

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
          Data: `Hola Moi,\n
          Has recibido un correo de ${formData.tuNombre}.\n
          Le gustaría hablar de: ${formData.tema}.\n
          Puedes escribirle a: ${formData.tuCorreo}.\n
          Su teléfono es: ${formData.telephone}.\n
          Su mensaje es: ${formData.message}
          `,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Tienes un correo de MoiTorrijos.com 📩',
      },
    },
  }
  SES.sendEmail(emailParams, callback)
}

exports.handler = (event, context, callback) => {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  awsServerlessExpress.proxy(server, event, context)
  const formData = event
  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': miSitio,
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    }
    callback(null, response)
  })
}
