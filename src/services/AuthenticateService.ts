import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateService {
    public async execute({ email, password }: Request): Promise<Response> {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
            throw new Error('Incorrect email/password combination.');
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Incorrect email/password combination.');
        }

        const token = sign({}, '399432c70494241c268d304f37454980', {
            subject: user.id,
            expiresIn: '1d',
        });

        return { user, token };
    }
}

export default AuthenticateService;
