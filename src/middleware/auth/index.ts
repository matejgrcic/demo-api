import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';
import { verifyLoginToken } from '../../services/util/authorization';

const checkIsBearerToken = (auth: string) => auth.startsWith('Bearer');

const extractTokenFromHeader = (authHeader: string) => authHeader.split(' ')[1];

const decodeToken = (token: string) => verifyLoginToken(token);

const getToken = (authHeader: string) => {
    const token = extractTokenFromHeader(authHeader);
    return decodeToken(token);
}

export default (hasPrivileges: (payload: any, params: any) => Promise<boolean>) =>
    async (req: Request, resp: Response, next: NextFunction) => {
        const { authorization } = req.headers;
        const { params } = req;
        if (authorization && checkIsBearerToken(authorization)) {
            const tokenPayload = getToken(authorization);
            if (await hasPrivileges(tokenPayload, params)) {
                next();
                return;
            }
            resp.sendStatus(HttpStatus.BAD_REQUEST);
            return;
        }
        resp.sendStatus(HttpStatus.FORBIDDEN);
    }
