import jwt from 'jsonwebtoken';
import config from '../../../config';

export const createLoginToken = (email: string): string => jwt.sign(
    { email },
    config.auth.jwtSecretKey,
    { expiresIn: config.auth.tokenDuration },
);

export const verifyLoginToken = (token: string): any => jwt.verify(
    token,
    config.auth.jwtSecretKey,
);
