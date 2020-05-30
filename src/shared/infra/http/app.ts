import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import socketIo from 'socket.io';
import http, { Server } from 'http';
import rateLimiter from './middlewares/rateLimiter';
import '@shared/infra/typeorm';
import '@shared/container';
import routes from './routes';

interface IConnectedUsers {
    [key: string]: string;
}

class App {
    public app: any;

    public server: Server;

    public io: socketIo.Server;

    public connectedUsers: IConnectedUsers = {};

    constructor() {
        this.app = express();
        this.server = new http.Server(this.app);

        this.socket();

        this.middlewares();

        this.routes();

        this.exceptionHandler();

        this.connectedUsers = {};
    }

    socket(): void {
        this.io = socketIo(this.server);

        this.io.on('connection', socket => {
            console.log('Socket.io connected!');

            const { user_id } = socket.handshake.query;

            console.log('Client ', user_id, ' connected');
            this.connectedUsers[user_id] = socket.id;

            console.log('List of connected users ', this.connectedUsers);

            socket.on('desconnect', () => {
                console.log('Client ', user_id, ' desconnected');
                delete this.connectedUsers[user_id];
            });
        });
    }

    middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/files', express.static(uploadConfig.uploadsFolder));
        // this.app.use(Notification);
        this.app.use(rateLimiter);

        this.app.use(
            (request: Request, response: Response, next: NextFunction) => {
                request.io = this.io;
                request.connectedUsers = this.connectedUsers;
                next();
            },
        );
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
