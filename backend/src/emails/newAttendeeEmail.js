const nodemailer = require('nodemailer');
require("dotenv").config()


function newAttendeeEmail(userMail, eventTitle, eventLocation, eventDate, eventDescription) {
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
    subject: '🚀🚀🚀 Asistencia a evento confirmada!',
    html: `
      <p>¡Hola! Estamos encantados de que hayas decidido unirte a nuestra comunidad!</p>
      <p>Queda confirmada tu asistencia al evento:</p>
      <h1>${eventTitle}</h1>
      <h2>${eventDate}</h2>
      <h2>${eventLocation}</h2>
      <p>${eventDescription}</p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
    }
  });

}

module.exports = { newAttendeeEmail }