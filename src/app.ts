import express from 'express';
import bodyParser from 'body-parser';
import initMongoDatabase from './config/initMongoDb';
import initRoutes from './routes';
import errorHandler from './middleware/error';

initMongoDatabase();

const app = express();
app.use(bodyParser.json());

initRoutes(app);
app.use(errorHandler);

export default app;
