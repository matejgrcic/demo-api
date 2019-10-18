import mongoose from 'mongoose';
import config from './index';

export default async (): Promise<void> => {
    try {
        mongoose.connect(config.app.dbUrl, { useNewUrlParser: true, useFindAndModify: false });
        // eslint-disable-next-line no-console
        console.log('Connected to database');
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Database connection failed.');
    }
};
