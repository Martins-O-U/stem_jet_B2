const dotenv = require('dotenv').config();
const express = require('express');
const jetblogs = require('./Components/Blogs/index')
const jetcontact = require('./Components/Contact/ContactControl')

const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api', jetblogs);
server.use('/contact', jetcontact);


server.get('/', (req, res) => {
    return res.json({ message: 'API is up ' });
});

module.exports = server;
