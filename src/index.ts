import server from './server/server';

const PORT = 3001;

server.listen(PORT, () => console.info(`Escutando na porta ${PORT}`));
