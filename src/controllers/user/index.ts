import * as express from 'express';
import HttpStatus from 'http-status-codes';
import _registerUser from '../../usecases/user/regusterUser';
import _loginUser from '../../usecases/user/loginUser';

export const registerUser = async (req: express.Request, res: express.Response) => {
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
export const loginUser = async (req: express.Request, res: express.Response) => {
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
