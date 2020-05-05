import { Router } from 'express';

import SessionsControler from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsControler();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
