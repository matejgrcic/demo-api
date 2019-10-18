import { getTicketsByEmail } from '../../services/repositories/ticket';

export default async (email: string): Promise<number[]> => {
    const tickets = await getTicketsByEmail(email);
    return tickets.map((ticket) => ticket.tripId);
};
