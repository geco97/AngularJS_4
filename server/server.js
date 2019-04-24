const http = require('http');
const app = require('./app');
const port = process.env.port || 5055;

const server = http.createServer(app).listen(port);