import { Router, Express } from 'express';
import { setupDevDatabase } from '../controllers/setup';
import userRoutes from './user';

const router = Router();

const createApiRoute = (name: string) => `/api${name}`;

router.get(createApiRoute('/setup'), setupDevDatabase);
router.use(createApiRoute('/user'), userRoutes);

export default (app: Express) => app.use(router);
