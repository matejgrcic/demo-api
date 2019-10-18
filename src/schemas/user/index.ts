import { Schema } from 'mongoose';

export default new Schema({
    name: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    creditCard: {
        type: String,
    },
});
