import { Router } from 'express';
import { getAllTrips } from '../../controllers/trip';
import asyncWrap from '../shared/asyncWrapper';

const router = Router();

router.get('/', asyncWrap(getAllTrips));

export default router;
