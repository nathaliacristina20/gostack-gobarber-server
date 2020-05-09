import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailability from './ListProviderMonthAvailability';

let listProviderMonthAvailability: ListProviderMonthAvailability;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvailability', () => {
    beforeEach(() => {
        fakeAppointmentsRepository = new FakeAppointmentsRepository();
        listProviderMonthAvailability = new ListProviderMonthAvailability(
            fakeAppointmentsRepository,
        );
    });

    it('should be able to list the month availability from provider', async () => {
        await fakeAppointmentsRepository.create({
            provider_id: '1',
            date: new Date(2020, 3, 20, 8, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            date: new Date(2020, 4, 20, 8, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            date: new Date(2020, 4, 21, 8, 0, 0),
        });

        const availability = await listProviderMonthAvailability.execute({
            provider_id: '1',
            year: 2020,
            month: 5,
        });

        expect(availability).toEqual(
            expect.arrayContaining([
                {
                    day: 19,
                    available: true,
                },
                {
                    day: 20,
                    available: false,
                },
                {
                    day: 21,
                    available: false,
                },
                {
                    day: 22,
                    available: true,
                },
            ]),
        );
    });
});
