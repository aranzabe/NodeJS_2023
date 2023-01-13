require('dotenv').config()

const Server = require('./models/server');

//Lanzamos el servidor.
const server = new Server();
server.listen();

