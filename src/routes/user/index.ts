import { Router } from 'express';
import { registerUser, loginUser } from '../../controllers/user';
import asyncWrap from '../shared/asyncWrapper';

const router = Router();

router.post('/register', asyncWrap(registerUser));
router.post('/login', asyncWrap(loginUser));

export default router;
