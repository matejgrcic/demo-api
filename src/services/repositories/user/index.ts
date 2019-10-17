import { UserModel } from '../../../schemas';
import User from '../../../models/user';


export const getUserByEmail = async (email: string): Promise<User | null> => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        return null;
    }
    return user.toObject() as User;
};

export const addUser = async (user: User): Promise<void> => {
    const document = new UserModel(user);
    await document.save();
};
