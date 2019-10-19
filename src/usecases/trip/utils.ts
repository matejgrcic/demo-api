import { Moment } from 'moment';
import config from '../../config';

export const isTicketCancelable = (tripDate: Moment, currentDate: Moment): boolean =>
    tripDate.subtract(config.businessRules.ticketCancelPeriod, 'hour').isAfter(currentDate, 'ms');
