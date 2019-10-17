import { Request, Response, NextFunction } from 'express';

export default (asyncFn: Function) =>
    (req: Request, res: Response, next: NextFunction) =>
        Promise.resolve(asyncFn(req, res, next)).catch(next);
