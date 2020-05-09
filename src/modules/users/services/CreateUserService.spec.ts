import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;

describe('CreateUser', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();
    });
    it('should be able to create a new user', async () => {
        const createUser = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );
        const user = await createUser.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        expect(user).toHaveProperty('id');
    });

    it('should not be able to create a new user with same email from another', async () => {
        const createUser = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );
        await createUser.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        });

        await expect(
            createUser.execute({
                name: 'John Doe',
                email: 'johndoe@example.com',
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
