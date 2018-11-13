const http = require('http');
const app = require('./app');
require('dotenv').load();

const name = process.env.NAME || 'The web server';

const port = process.env.PORT || 3000;

const server = http.createServer(app);

console.log(name + ' started on port ' + port);

server.listen(port);