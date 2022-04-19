const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const characterRoutes = require('./modules/character/routes/characterRoutes');
const authRoutes = require('./modules')
const sequelize = require('./database/sequelize');
require('./database/associations');

// This will be our aplication entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = express()

// Log requests to the console
app.use(logger('dev'));

// Parse incoming request data (http://127.0.0.1:3000/)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

app.use('/characters', characterRoutes);
app.use('/auth', authRoutes)

//Configure the port with which I am going to work
const port = parseInt(process.env.PORT,10) || 8000;
app.set('port', port);

// I establish the connection with the database
sequelize().then(() => console.log('DB Conection Successful'))

const server = http.createServer(app);
server.listen(port);

module.exports = app;