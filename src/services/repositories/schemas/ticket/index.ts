import { Schema } from 'mongoose';

export default new Schema({
    tripId: {
        type: Number,
    },
    email: {
        type: String,
    },
});
