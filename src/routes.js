import { Router } from 'express';
import multer from 'multer';
import User from './app/models/User';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', async (req, res) => {
  return res.json({ message: 'NodeJS Docker ON' });
});

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

routes.get('/schedule', ScheduleController.index);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/usertest', async (req, res) => {
  const user = await User.create({
    name: 'Docker User Teste',
    email: 'teste@teste.com',
    password_hash: '123456789',
  });
  return res.json(user);
});

export default routes;
