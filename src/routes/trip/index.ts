import { Router } from 'express';
import { getAllTrips, buyTicket, cancelTicket } from '../../controllers/trip';
import asyncWrap from '../shared/asyncWrapper';
import authMiddleware from '../../middleware/auth';
import canUserCancelTicket from '../../usecases/ticket/canUserCancelTicket'

const router = Router();

const canCancelTicket = async (payload: any, params: any): Promise<boolean> =>
    canUserCancelTicket(payload.email, params.id);

const canBuyTicket = async (payload: any, params: any): Promise<boolean> =>
    !await canUserCancelTicket(payload.email, params.id);

router.get('/', asyncWrap(getAllTrips));
router.post('/:id/buy', [authMiddleware(canBuyTicket)], asyncWrap(buyTicket));
router.post('/:id/cancel', [authMiddleware(canCancelTicket)], asyncWrap(cancelTicket));

export default router;
