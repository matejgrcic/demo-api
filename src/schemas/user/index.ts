import { Schema } from 'mongoose';

export default new Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
});
