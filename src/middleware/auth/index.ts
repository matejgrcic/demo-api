import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';
import { verifyLoginToken } from '../../services/util/authorization';

const checkIsBearerToken = (auth: string) => auth.startsWith('Bearer');

const extractTokenFromHeader = (authHeader: string) => authHeader.split(' ')[1];

const decodeToken = (token: string) => verifyLoginToken(token);

export default (hasPrivileges: (payload: any, params: any) => Promise<boolean>) =>
    async (req: Request, resp: Response, next: NextFunction) => {
        const { authorization } = req.headers;
        const { params } = req;
        if (authorization && checkIsBearerToken(authorization)) {
            const token = extractTokenFromHeader(authorization);
            const tokenPayload = decodeToken(token);
            if (await hasPrivileges(tokenPayload, params)) {
                next();
            } else {
                resp.sendStatus(HttpStatus.UNAUTHORIZED);
                return;
            }
        }
        resp.sendStatus(HttpStatus.FORBIDDEN);
    }
