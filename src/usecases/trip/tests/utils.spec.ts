import { expect } from 'chai';
import moment from 'moment';
import { isTicketCancelable } from '../utils';

describe('Trip usecases utils', () => {
    describe('isTicketCancelable', () => {
        it('should return true if there is more than 1 hour to trip start', () => {
            const tripStart = moment();
            tripStart.set({ hour: 12, minute: 0, second: 0, millisecond: 0 });
            const currentDate = moment();
            currentDate.set({ hour:10, minute: 30, second: 0, millisecond: 0 });

            expect(isTicketCancelable(tripStart, currentDate)).to.be.equal(true);
        });

        it('should return true if there is more than 1 hour to trip start - EDGE CASE', () => {
            const tripStart = moment();
            tripStart.set({ hour: 12, minute: 0, second: 0, millisecond: 0 });
            const currentDate = moment();
            currentDate.set({ hour:10, minute: 59, second: 59, millisecond: 999 });

            expect(isTicketCancelable(tripStart, currentDate)).to.be.equal(true);
        });

        it('should return false if there is less than 1 hour to trip start', () => {
            const tripStart = moment();
            tripStart.set({ hour: 12, minute: 0, second: 0, millisecond: 0 });
            const currentDate = moment();
            currentDate.set({ hour: 11, minute: 0, second: 0, millisecond: 0 });

            expect(isTicketCancelable(tripStart, currentDate)).to.be.equal(false);
        });

    });
});