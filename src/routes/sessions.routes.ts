import { Router } from 'express';

import AuthenticateService from '../services/AuthenticateService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const authenticatorUser = new AuthenticateService();

        const { user, token } = await authenticatorUser.execute({
            email,
            password,
        });

        delete user.password;

        return response.json({ user, token });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default sessionsRouter;
