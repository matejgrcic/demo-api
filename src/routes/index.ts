import { Router, Express } from 'express';
import { setupDevDatabase } from '../controllers/setup';
import userRoutes from './user';
import tripRoutes from './trip';

const router = Router();

const createApiRoute = (name: string) => `/api${name}`;

router.get(createApiRoute('/setup'), setupDevDatabase);
router.use(createApiRoute('/user'), userRoutes);
router.use(createApiRoute('/trips'), tripRoutes);

export default (app: Express) => app.use(router);
