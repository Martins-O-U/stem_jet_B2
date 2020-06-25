const dotenv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const contact = require('./Contact/index')
const jetblogs = require('./Components/Blogs/index')

const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.engine('handlebars', exphbs());
server.set('view engine', 'handlebars');

server.use(
    cors({
        origin: "https://stemjet.netlify.app",
        methods: "POST"
    })
);
server.use(helmet());
server.use(express.json());
server.use('/api', jetblogs);
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use('/contact', contact)


server.get('/', (req, res) => {
    return res.json({ message: 'API is up ' });
});

module.exports = server;
