import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  return res.status(200).send('hello dev');
});

export { server };
