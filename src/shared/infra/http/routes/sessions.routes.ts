import { Router } from 'express';

import AuthenticateService from '../../../../modules/appointments/services/AuthenticateService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body;

    const authenticatorUser = new AuthenticateService();

    const { user, token } = await authenticatorUser.execute({
        email,
        password,
    });

    delete user.password;

    return response.json({ user, token });
});

export default sessionsRouter;
