// import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailability from './ListProviderDayAvailability';

let listProviderDayAvailability: ListProviderDayAvailability;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderDayAvailability', () => {
    beforeEach(() => {
        fakeAppointmentsRepository = new FakeAppointmentsRepository();
        listProviderDayAvailability = new ListProviderDayAvailability(
            fakeAppointmentsRepository,
        );
    });

    it('should be able to list the day availability from provider', async () => {
        await fakeAppointmentsRepository.create({
            provider_id: '1',
            date: new Date(2020, 4, 20, 8, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            date: new Date(2020, 4, 20, 10, 0, 0),
        });

        const availability = await listProviderDayAvailability.execute({
            provider_id: '1',
            day: 20,
            year: 2020,
            month: 5,
        });

        expect(availability).toEqual(
            expect.arrayContaining([
                {
                    hour: 8,
                    available: false,
                },
                {
                    hour: 9,
                    available: true,
                },
                {
                    hour: 10,
                    available: false,
                },
                {
                    hour: 11,
                    available: true,
                },
            ]),
        );
    });
});
