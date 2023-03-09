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
    const status = Boolean(inProgress === 'true');

    const resultByStatus = await this._service.getMatchesByProgress(status);
    return res.status(200).json(resultByStatus);
  }

  async finishMatch(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);

    const result = await this._service.finishMatch(numberId);
    return res.status(200).json(result);
  }

  async updateMatch(req:Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const numberId = Number(id);

    await this._service.updateMatch(numberId, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  }

  async createMatch(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    const newMatch = await this._service.createMatch(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );

    res.status(201).json(newMatch);
  }
}
