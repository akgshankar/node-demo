//import http from 'http';
const http = require("http");
import app from './server';
const server = http.createServer(app);
//let currentApp = app;
 
server.listen(3000, () => {
    console.log('server is listerting on port 3000');
})