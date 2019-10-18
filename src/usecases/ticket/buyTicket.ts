import { getTripById, updateTripCapacity } from '../../services/repositories/trip'
import { addTicket } from '../../services/repositories/ticket'
import Trip from '../../models/trip';
import { UpdateCapacity } from './shared';

const isCapacityFull = (trip: Trip) => trip.capacity === 0;

export default async (tripId: number, email: string) => {
    const trip = await getTripById(tripId);
    if (!trip) {
        throw new Error('Invalid trip id.')
    }
    if (isCapacityFull(trip)) {
        throw new Error('Trip\'s capacity is full.')
    }
    const ticket = {
        tripId,
        email,
    };
    await Promise.all([
        await updateTripCapacity(tripId, UpdateCapacity.decrease),
        await addTicket(ticket),
    ])
}
