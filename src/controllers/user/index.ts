import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import _registerUser from '../../usecases/user/regusterUser';
import _loginUser from '../../usecases/user/loginUser';
import _extractUserFromToken from '../../usecases/shared/extractUserFromToken';
import _fetchPurchasedTickets from '../../usecases/user/fetchPurchasedTickets';

export const registerUser = async (req: Request, res: Response) => {
    const {
        name,
        password,
        email,
        creditCard,
    } = req.body;

    const user = {
        name,
        password,
        email,
        creditCard,
    };
    try {
        await _registerUser(user);
        res.sendStatus(HttpStatus.OK);
        return;
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(error);
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const {
        password,
        email,
    } = req.body;

    try {
        const token = await _loginUser(email, password);
        res.status(HttpStatus.OK).json(token);
        return;
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(JSON.stringify(error));
    }
};

const extractTokenFromHeader = (authHeader: string) => authHeader.split(' ')[1];

export const showUsersTickets = async (req: Request, res: Response) => {
    const {
        authorization,
    } = req.headers;

    const token = extractTokenFromHeader(authorization!);
    try {
        const user = await _extractUserFromToken(token);
        const tickets = await _fetchPurchasedTickets(user.email);
        res.status(HttpStatus.OK).json(tickets);
        return;
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(error);
    }
};
