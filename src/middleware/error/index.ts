import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';

export default (error: Error, _: Request, resp: Response) => {
    // TODO: logging
    resp
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
            message: 'Internal error occured.',
            stack: error.stack,
        });
};
