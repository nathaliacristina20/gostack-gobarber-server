// import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let listProviderMonthAvailability: ListProviderMonthAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvailabilityService', () => {
    beforeEach(() => {
        fakeAppointmentsRepository = new FakeAppointmentsRepository();
        listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
            fakeAppointmentsRepository,
        );
    });

    it('should be able to list the month availability from provider', async () => {
        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 8, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 9, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 10, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 11, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 12, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 13, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 14, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 15, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 16, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 20, 17, 0, 0),
        });

        await fakeAppointmentsRepository.create({
            provider_id: '1',
            user_id: '12',
            date: new Date(2020, 4, 21, 10, 0, 0),
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
                    available: false,
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
                    available: false,
                },
            ]),
        );
    });
});
