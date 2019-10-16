import http from 'http';
import app from './app';

const port = '1950';

const server = http.createServer(app);
server.listen(port);
