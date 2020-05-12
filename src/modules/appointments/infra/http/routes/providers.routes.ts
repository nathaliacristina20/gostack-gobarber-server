import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';

import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';

import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const providersRouter = Router();
const providersController = new ProvidersController();

const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerAppointmentsController = new ProviderAppointmentsController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
    '/:provider_id/month-availability',
    providerMonthAvailabilityController.index,
);
providersRouter.get(
    '/:provider_id/day-availability',
    providerDayAvailabilityController.index,
);

providersRouter.get('/me', providerAppointmentsController.index);

export default providersRouter;
