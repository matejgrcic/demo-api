import User from 'src/models/user';
import { getUserByEmail, addUser } from '../../services/repositories/user';


const checkIfUserExists = async (email: string): Promise<boolean> => !!await getUserByEmail(email);

const saveUser = (user: User): Promise<void> => addUser(user);

export default async (user: User) => {
    const userExists = await checkIfUserExists(user.email);
    if (userExists) {
        throw new Error('User with this e-mail already exists');
    }
    await saveUser(user);
};
