import { ModelStatic, QueryTypes } from 'sequelize';
import IServiceLeaderBoard from '../interfaces/IServiceLeaderBoard';
import Matches from '../../database/models/MatchesModel';
import boardQuery from '../utils/boardQuery';
import ErrorStatus from '../../errors/ErrorStatus';
import ILeaderBoard from '../interfaces/ILeaderBoard';

export default class LeaderBoard implements IServiceLeaderBoard {
  protected model: ModelStatic<Matches> = Matches;

  async getInfo(): Promise<ILeaderBoard[] | object[]> {
    const result = await this.model.sequelize?.query(boardQuery, { type: QueryTypes.SELECT });

    if (!result) throw new ErrorStatus('404', 'Error trying to load the leaderboard');

    return result;
  }
}
