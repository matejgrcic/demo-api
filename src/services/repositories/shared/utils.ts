import { Document } from 'mongoose';

export const toObject = <T>(record: Document): T => {
    const object = record.toObject();
    delete object.__v;
    delete object._id;
    return object as T;
}
