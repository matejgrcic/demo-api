import * as express from 'express';
import HttpStatus from 'http-status-codes';
import _fetchTrips from '../../usecases/trip/fetchTrips';
import _buyTicket from '../../usecases/ticket/buyTicket';
import _cancelTicket from '../../usecases/ticket/cancelTicket';
import _extractUserFromToken from '../../usecases/shared/extractUserFromToken';
import createErrorDescription from '../utils';

// eslint-disable-next-line import/prefer-default-export
export const getAllTrips = async (_: express.Request, res: express.Response) => {
    try {
        const tickets = await _fetchTrips();
        res.status(HttpStatus.OK).json(tickets);
        return;
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(createErrorDescription(error));
    }
};

const extractTokenFromHeader = (authHeader: string) => authHeader.split(' ')[1];

export const buyTicket = async (req: express.Request, res: express.Response) => {
    const {
        authorization,
    } = req.headers;
    const { id } = req.params;

    const token = extractTokenFromHeader(authorization!);
    try {
        const user = await _extractUserFromToken(token);
        await _buyTicket(parseInt(id, 10), user.email);
        res.sendStatus(HttpStatus.OK);
        return;
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(createErrorDescription(error));
    }
};

export const cancelTicket = async (req: express.Request, res: express.Response) => {
    const {
        authorization,
    } = req.headers;
    const { id } = req.params;

    const token = extractTokenFromHeader(authorization!);
    try {
        const user = await _extractUserFromToken(token);
        await _cancelTicket(parseInt(id, 10), user.email);
        res.sendStatus(HttpStatus.OK);
        return;
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(createErrorDescription(error));
    }
};
