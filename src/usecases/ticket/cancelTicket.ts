import moment from 'moment';
import config from '../../config'
import { getTripById, updateTripCapacity } from '../../services/repositories/trip'
import { removeTicket } from '../../services/repositories/ticket'
import { UpdateCapacity } from './shared';

const isTicketCancelable = (tripDate: Date): boolean =>
    moment(tripDate)
        .subtract(config.businessRules.ticketCancelPeriod,'hour').isBefore(moment())

export default async (tripId: number, email: string) => {
    const trip = await getTripById(tripId);
    if (!trip) {
        throw new Error('Invalid trip id.');
    }
    if (isTicketCancelable(trip.startDate)) {
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
