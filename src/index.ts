import 'dotenv/config';
import server from './server/server';

const { PORT } = process.env;

server.listen(PORT, () => console.info(`Escutando na porta ${PORT}`));
