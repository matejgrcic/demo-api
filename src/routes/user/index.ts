import { Router } from 'express';
import { registerUser, loginUser, showUsersTickets } from '../../controllers/user';
import asyncWrap from '../shared/asyncWrapper';

const router = Router();

router.post('/register', asyncWrap(registerUser));
router.post('/login', asyncWrap(loginUser));
router.post('/tickets', asyncWrap(showUsersTickets));

export default router;
