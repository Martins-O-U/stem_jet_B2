const RegisterPersons = require('./RegisterModel');
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    RegisterPersons.findAllPersons()
        .then(person => {
            res.status(200).json(person)
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        })
});


router.post("/", (req, res) => {
    const { name, email } = req.body;
    const output = `
            <h4>Hello ${name}</h4>
            <p>Here is a WhatsApp group link managed by StemJet, we can't wait to meet you.</p>
            <p><span>click to join </span> https://chat.whatsapp.com/CpEbiGN42qX3aotUqDKXEZ</p>  
            `;
    if (name && email) {
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
            to: `${email}`,
            subject: 'Message From StemJet Web App',
            html: output
        };
        RegisterPersons.insertPersons(req.body)
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return res.status(500).json({ error: error.message });
            }

            return res.status(200).json({
                message: 'Join-us message sent successfully!',
            });
        })
    } else {
        res.json({ message: "Please provide all needed columns (Name and Email)" })
    }
})




module.exports = router;
