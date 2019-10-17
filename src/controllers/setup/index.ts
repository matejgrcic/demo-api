import * as express from 'express';
import HttpStatus from 'http-status-codes';
import setupDevDb from '../../setup/setupDevDb';

// eslint-disable-next-line import/prefer-default-export
export const setupDevDatabase = (_: express.Request, res: express.Response) => {
    setupDevDb();
    res.sendStatus(HttpStatus.OK);
};
