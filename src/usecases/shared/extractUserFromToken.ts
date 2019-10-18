import { verifyLoginToken } from '../../services/util/authorization';
import { getUserByEmail } from '../../services/repositories/user';
import User from '../../models/user';

export default async (token: string): Promise<User> => {
    const { email } = verifyLoginToken(token);
    const user = await getUserByEmail(email);
    if (!user) {
        throw new Error('User doesn\t exists.');
    }
    return user;
}
