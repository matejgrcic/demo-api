import { getTicketByEmailAndTripId } from '../../services/repositories/ticket';

export default async (email: string, tripId: number): Promise<boolean> =>
    !!await getTicketByEmailAndTripId(email, tripId);
