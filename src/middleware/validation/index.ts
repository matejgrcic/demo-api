import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import HttpStatus from 'http-status-codes';

export default (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next();
        return;
    }
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        message: errors.array(),
    });
};
