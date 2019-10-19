import moment from 'moment';
import { getTripById, updateTripCapacity } from '../../services/repositories/trip'
import { removeTicket } from '../../services/repositories/ticket'
import { UpdateCapacity } from './shared';
import { isTicketCancelable } from './utils';


export default async (tripId: number, email: string) => {
    const trip = await getTripById(tripId);
    if (!trip) {
        throw new Error('Invalid trip id.');
    }
    if (isTicketCancelable(moment(trip.startDate), moment())) {
        throw new Error('Cancellation time is finished.');
    }
    const ticket = {
        tripId,
        email,
    };
    await Promise.all([
        await updateTripCapacity(tripId, UpdateCapacity.increase),
        await removeTicket(ticket),
    ])
}
