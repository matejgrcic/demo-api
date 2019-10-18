import mongoose from 'mongoose';
import userSchema from './user';
import ticketSchema from './ticket';
import tripSchema from './trip';

const USER_MODEL_NAME = 'User';
const TICKET_MODEL_NAME = 'Ticket';
const TRIP_MODEL_NAME = 'Trip';

export const UserModel = mongoose.model(USER_MODEL_NAME, userSchema);
export const TicketModel = mongoose.model(TICKET_MODEL_NAME, ticketSchema);
export const TripModel = mongoose.model(TRIP_MODEL_NAME, tripSchema);
