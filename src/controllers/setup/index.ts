import * as express from 'express';
import HttpStatus from 'http-status-codes';
import setupDevDb from '../../setup/setupDevDb';
import createErrorDescription from '../utils';

// eslint-disable-next-line import/prefer-default-export
export const setupDevDatabase = (_: express.Request, res: express.Response) => {
    try {
        setupDevDb();
        res.sendStatus(HttpStatus.OK);
    } catch(error) {
        res.status(HttpStatus.BAD_REQUEST).json(createErrorDescription(error));
    }
};
