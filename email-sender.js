const nodemailer = require('nodemailer');
require('dotenv').config(); // Assurez-vous d'avoir installé dotenv et créé un fichier .env

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  
    }
});

const mailOptions = {
    from: process.env.EMAIL_USER, 
    to: 'beg@gmail.com',
    subject: 'Test d\'envoi d\'email avec Node.js',
    text: 'That was easy !'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
