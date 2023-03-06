import { Response, Request } from 'express';
import IServiceMatches from '../interfaces/IServiceMatches';

export default class MatchesController {
  private _service: IServiceMatches;

  constructor(service: IServiceMatches) {
    this._service = service;
  }

  async getAll(req: Request, res:Response) {
    const { inProgress } = req.query;

    if (!inProgress) {
      const result = await this._service.getAll();
      return res.status(200).json(result);
    }

    const status = Boolean(inProgress);
    const resultByStatus = await this._service.getMatchesByProgress(status);
    return res.status(200).json(resultByStatus);
  }
}
