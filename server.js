const dotenv = require('dotenv').config();
const express = require('express');
const jetblog = require('./components/Blog/index')

const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/api', jetblog)

server.get('/', (req, res) => {
    return res.json({ message: 'API is up ' });
});

module.exports = server;
