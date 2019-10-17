import { TripModel } from '../../../schemas';
import Trip from '../../../models/trip';


export const getTripById = async (id: number): Promise<Trip | null> => {
    const trip = await TripModel.findOne({ id });
    if (!trip) {
        return null;
    }
    return trip.toObject() as Trip;
};

export const addTrip = async (trip: Trip): Promise<void> => {
    const document = new TripModel(trip);
    await document.save();
};

export const updateTripCapacity = async (id: number, value: number): Promise<void> => {
    await TripModel.findOneAndUpdate({ id }, { $inc: { capacity: value } });
};
