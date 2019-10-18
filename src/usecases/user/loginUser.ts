import { getUserByEmail } from '../../services/repositories/user';
import { createLoginToken } from '../../services/util/authorization';


export default async (email: string, password: string): Promise<string> => {
    const user = await getUserByEmail(email);
    if (!user) {
        throw new Error('User with this e-mail doesn\'t exists');
    }
    if (user.password !== password) {
        throw new Error('Invalid password.');
    }
    return createLoginToken(user.email);
};
