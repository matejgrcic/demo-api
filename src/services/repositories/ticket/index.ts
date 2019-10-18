import { TicketModel } from '../../../schemas';
import Ticket from '../../../models/ticket';
import { toObject } from '../shared/utils';

export const getTicketsByEmail = async (email: string): Promise<Ticket[]> => {
    const tickets = await TicketModel.find({ email });
    if (!tickets) {
        return [];
    }
    return tickets.map((ticket) => toObject<Ticket>(ticket));
};

export const getTicketByEmailAndTripId = async (
    email: string, tripId: number,
): Promise<Ticket | null> => {
    const ticket = await TicketModel.findOne({ email, tripId });
    if (!ticket) {
        return null;
    }
    return toObject<Ticket>(ticket);
};

export const addTicket = async (ticket: Ticket): Promise<void> => {
    const document = new TicketModel(ticket);
    await document.save();
};

export const removeTicket = async (ticket: Ticket): Promise<void> => {
    await TicketModel.findOneAndDelete(ticket);
};
