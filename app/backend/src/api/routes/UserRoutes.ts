import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import LoginHandler from '../middlewares/LoginHandler';
import UserService from '../services/UserService';

const userRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);

userRoutes.post('/', LoginHandler, (req: Request, res:Response) =>
  userController.login(req, res));

export default userRoutes;
