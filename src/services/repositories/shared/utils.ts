import { Document } from 'mongoose';

// eslint-disable-next-line import/prefer-default-export
export const toObject = <T>(record: Document): T => {
    const object = record.toObject();
    // eslint-disable-next-line no-underscore-dangle
    delete object.__v;
    // eslint-disable-next-line no-underscore-dangle
    delete object._id;
    return object as T;
}
