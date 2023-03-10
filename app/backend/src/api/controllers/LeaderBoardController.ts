import { Response, Request } from 'express';
import IServiceLeaderBoard from '../interfaces/IServiceLeaderBoard';

export default class LeaderBoardController {
  private _service: IServiceLeaderBoard;

  constructor(service: IServiceLeaderBoard) {
    this._service = service;
  }

  async getInfo(req: Request, res: Response) {
    const result = await this._service.getInfo();
    return res.status(200).json(result);
  }
}
