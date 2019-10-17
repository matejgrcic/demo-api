import { TripModel } from '../../../schemas';
import Trip from '../../../models/trip';
import { toObject } from '../shared/utils';


export const getTripById = async (id: number): Promise<Trip | null> => {
    const trip = await TripModel.findOne({ id });
    if (!trip) {
        return null;
    }
    return toObject<Trip>(trip);
};

export const getAllAvailableTrips = async (): Promise<Trip[]> => {
    const trips = await TripModel.find({ startDate: { $gt: new Date() } });
    if (!trips) {
        return [];
    }
    return trips.map((trip) => toObject<Trip>(trip));
};

export const addTrip = async (trip: Trip): Promise<void> => {
    const document = new TripModel(trip);
    await document.save();
};

export const updateTripCapacity = async (id: number, value: number): Promise<void> => {
    await TripModel.findOneAndUpdate({ id }, { $inc: { capacity: value } });
};
