// eslint-disable-next-line @typescript-eslint/interface-name-prefix

declare namespace Express {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    export interface Request {
        user: {
            id: string;
        };
        connectedUsers: {
            [key: string]: string;
        };
        io: import('socket.io').Server;
    }
}
