import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateAppointment', () => {
    it('should be able to create a new user', async () => {
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        const createUser = new CreateUserService(fakeAppointmentsRepository);
        const user = await createUser.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        expect(user).toHaveProperty('id');
    });

    it('should not be able to create a new user with same email from another', async () => {
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        const createUser = new CreateUserService(fakeAppointmentsRepository);
        await createUser.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        expect(
            createUser.execute({
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
