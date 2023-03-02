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
}
