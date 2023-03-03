import express from 'express';
import router from './routes';

const server = express();

server.use(express.json());

server.use('/cidades', router);

export default server;
