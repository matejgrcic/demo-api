import { TicketModel } from '../../../schemas';
import Ticket from '../../../models/ticket';


export const getTicketsByEmail = async (email: string): Promise<Ticket[]> => {
    const tickets = await TicketModel.find({ email });
    if (!tickets) {
        return [];
    }
    return tickets.map((ticket) => ticket.toObject()) as Ticket[];
};

export const getTicketByEmailAndTripId = async (
    email: string, tripId: number,
): Promise<Ticket | null> => {
    const ticket = await TicketModel.findOne({ email, tripId });
    if (!ticket) {
        return null;
    }
    return ticket.toObject() as Ticket;
};

export const addTicket = async (ticket: Ticket): Promise<void> => {
    const document = new TicketModel(ticket);
    await document.save();
};
