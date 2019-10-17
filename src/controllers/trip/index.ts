import * as express from 'express';
import HttpStatus from 'http-status-codes';
import _fetchTrips from '../../usecases/trip/fetchTrips';

// eslint-disable-next-line import/prefer-default-export
export const getAllTrips = async (_: express.Request, res: express.Response) => {
    try {
        const tickets = await _fetchTrips();
        res.status(HttpStatus.OK).json(tickets);
        return;
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json(error);
    }
};
