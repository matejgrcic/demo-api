import { Schema } from 'mongoose';

export default new Schema({
    id: {
        type: Number,
        unique: true,
    },
    company: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    capacity: {
        type: Number,
        minimum: 0,
    },
});
