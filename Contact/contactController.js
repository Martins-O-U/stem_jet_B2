const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    const { name, number, email, comment } = req.body;
    const output = `
    <p>A Message from StemJet Web App</p>
    <h3>Contact Detail</h3>
    <ul>
        <li>Name: ${name}</li>
        <li>Number: ${number}</li>
        <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${comment}</p>  
    `;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'onyedikachiym@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: 'onyedikachiym@gmail.com',
        to: 'martinsonyedikachi@gmail.com',
        subject: 'Message From StemJet Web App',
        html: output
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

};

module.exports = {
    sendMail,
};