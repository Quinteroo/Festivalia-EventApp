const nodemailer = require('nodemailer');
require("dotenv").config()


function createEventEmail(userMail, eventTitle) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "hello.quinteroo@gmail.com",
      pass: `${process.env.API_TEST_NODEMAILER}`,
    },
  });

  const mailOptions = {
    from: "hello.quinteroo@gmail.com",
    to: `${userMail}`,
    subject: '🎉 Nuevo Evento Creado!',
    text: `Hola! estamos encantados de que hayas creado el evento ${eventTitle}! No te olvides de gestionar la comunidad y de tenerlo todo listo!`
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
    }
  });

}

module.exports = { createEventEmail }