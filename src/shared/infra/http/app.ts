import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import io, { Server } from 'socket.io';
import http from 'http';
import rateLimiter from './middlewares/rateLimiter';
import '@shared/infra/typeorm';
import '@shared/container';
import routes from './routes';

class App {
    public app: any;

    public server: any;

    public io: Server;

    constructor() {
        this.app = express();
        this.server = new http.Server(this.app);

        this.socket();

        this.middlewares();

        this.routes();

        this.exceptionHandler();
    }

    socket(): void {
        this.io = io(this.server);

        this.io.on('connection', socket => {
            console.log('Socket.io connected!');
            // const { user_id } = socket.handshake.query;
            // this.connectedUsers[user_id] = socket.id;

            socket.on('message', function (message: any) {
                console.log(message);
            });

            socket.on('desconnect', () => {
                console.log('Desconnected');
                // delete this.connectedUsers[user_id];
            });
        });
    }

    middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/files', express.static(uploadConfig.uploadsFolder));
        this.app.use(rateLimiter);
    }

    routes(): void {
        this.app.use(routes);
    }

    exceptionHandler(): void {
        this.app.use(errors());

        this.app.use(
            (
                err: Error,
                request: Request,
                response: Response,
                _: NextFunction,
            ) => {
                if (err instanceof AppError) {
                    return response
                        .status(err.statusCode)
                        .json({ status: 'error', message: err.message });
                }

                console.log('Erro', err);

                return response.status(500).json({
                    status: 'error',
                    message: 'Internal server error',
                });
            },
        );
    }
}

export default new App().server;
