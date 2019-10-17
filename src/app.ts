import express from 'express';
import bodyParser from 'body-parser';
import initMongoDatabase from './config/initMongoDb';
import initRoutes from './routes';

initMongoDatabase();

const app = express();
app.use(bodyParser.json());

initRoutes(app);

export default app;
