import { Response, Request } from 'express';
import IServiceUser from '../interfaces/IServiceUser';

export default class UserController {
  private _service: IServiceUser;

  constructor(service: IServiceUser) {
    this._service = service;
  }

  async login(req: Request, res: Response) {
    const result = await this._service.login(req.body);

    return res.status(200).json(result);
  }

  async loginRole(req:Request, res:Response) {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const result = await this._service.loginRole(authorization);
    if (!result) return res.status(401).json('Token must be a valid token');

    return res.status(200).json({ role: result });
  }
}
