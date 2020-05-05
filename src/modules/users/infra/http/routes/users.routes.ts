import { Router } from 'express';

import multer from 'multer';

import uploadConfig from '@config/upload';

import UsersControler from '../controllers/UsersController';
import UserAvatarControler from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersControler();
const userAvatarController = new UserAvatarControler();

const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    userAvatarController.update,
);

export default usersRouter;
