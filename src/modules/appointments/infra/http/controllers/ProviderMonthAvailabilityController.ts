import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListProviderMonthAvailability from '@modules/appointments/services/ListProviderMonthAvailability';

class ProviderMonthAvailabilityController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { provider_id } = request.params;
        const { month, year } = request.body;

        const listProviderMonthAvailability = container.resolve(
            ListProviderMonthAvailability,
        );
        const availability = await listProviderMonthAvailability.execute({
            provider_id,
            month,
            year,
        });

        return response.json(availability);
    }
}

export default ProviderMonthAvailabilityController;
