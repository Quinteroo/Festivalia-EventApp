const nodemailer = require('nodemailer');
require("dotenv").config()


function newUserEmail(userMail) {
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
    subject: '🎉🧡💚 Bienvenid@!',
    text: `Hola! estamos encantados de que hayas decidido unirte a nuestra comunidad!`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
    }
  });

}

module.exports = { newUserEmail }