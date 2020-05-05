import { Router } from 'express';
import AuthenticateService from '@modules/users/services/AuthenticateUserService';

import { container } from 'tsyringe';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticatorUser = container.resolve(AuthenticateService);

    const { user, token } = await authenticatorUser.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });
});

export default sessionsRouter;
