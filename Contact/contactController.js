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
        host: 'mail.privateemail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'contact@martinsonyedikachi.com',
            pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: 'contact@martinsonyedikachi.com',
        to: 'martinsonyedikachi@gmail.com',
        subject: 'Message From StemJet Web App',
        html: output
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.status(500).json(error);
        }

        return res.status(200).json({
            message: 'Contact message sent successfully!',
        });
    });

};

module.exports = {
    sendMail,
};
