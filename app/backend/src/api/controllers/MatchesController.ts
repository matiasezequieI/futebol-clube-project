import { Response, Request } from 'express';
import IServiceMatches from '../interfaces/IServiceMatches';

export default class MatchesController {
  private _service: IServiceMatches;

  constructor(service: IServiceMatches) {
    this._service = service;
  }

  async getAll(_req: Request, res:Response) {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  }
}
