import moment from 'moment';
import User from '../models/user';
import { addUser } from '../services/repositories/user';
import { addTrip } from '../services/repositories/trip';
import Trip from '../models/trip';

const createUser = (email: string): User => ({
    email,
    name: 'foo',
    password: '123',
    creditCard: 'HR123',
});

const saveUserToDb = (user: User) => addUser(user);

const createTrip = (id: number): Trip => ({
    id,
    company: `companyName${Math.floor(Math.random() * 3)}`,
    startDate: moment().add(Math.floor(Math.random() * 3), 'days').toDate(),
    capacity: 10,
});

const saveTripToDb = (trip: Trip) => addTrip(trip);

export default () => {
    ['abc@foo.com', 'aaa@foo.com', 'bar@foo.com'].map(createUser).forEach(saveUserToDb);
    [1, 2, 3].map(createTrip).forEach(saveTripToDb);
};
