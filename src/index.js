import app from './app';
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';

const server = http.createServer(app); //pasar el servidor express a http
const httpServer = server.listen(3000);
const io = new WebsocketServer(httpServer); //para los clientes

console.log('Server running on port 3000');