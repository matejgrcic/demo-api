import { Router } from 'express';
import { body } from 'express-validator';
import { registerUser, loginUser, showUsersTickets } from '../../controllers/user';
import asyncWrap from '../shared/asyncWrapper';
import { validateEmail, validatePassword } from '../validators';
import isValidRequest from '../../middleware/validation';

const router = Router();

const userValidation = [
    validateEmail(body),
    validatePassword(body),
];

router.post('/register', userValidation, isValidRequest, asyncWrap(registerUser));
router.post('/login', userValidation, isValidRequest, asyncWrap(loginUser));
router.get('/tickets', asyncWrap(showUsersTickets));

export default router;
