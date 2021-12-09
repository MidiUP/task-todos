import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TodoController from './app/controllers/TodoController';
import AuthMiddleware from './app/middlewares/Auth'

const routes = new Router();

//Users
routes.get('/users', UserController.get)
routes.get('/users/:id', UserController.getById)
routes.post('/users', UserController.create)

//Session
routes.post('/login', SessionController.login)

routes.use(AuthMiddleware)

//Users autenticated
routes.put('/users', UserController.update)
routes.delete('/users', UserController.delete)

//Todos autenticated
routes.get('/todos', TodoController.get);
routes.post('/todos', TodoController.create);

export default routes;