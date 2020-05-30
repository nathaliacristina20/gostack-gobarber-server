import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

class AppointmentController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const user_id = request.user.id;
        const { provider_id, date } = request.body;

        const createAppointment = container.resolve(CreateAppointmentService);
        const { appointment, notification } = await createAppointment.execute({
            date,
            user_id,
            provider_id,
        });

        const ownerSocket = request.connectedUsers[provider_id];

        if (ownerSocket) {
            request.io.to(ownerSocket).emit('notification', notification);
        }

        return response.json(appointment);
    }
}

export default AppointmentController;
