import { Schema } from 'mongoose';

export default new Schema({
    date: {
        type: Date,
    },
    order: {
        type: Number,
    },
    destination: {
        type: String,
    },
});
