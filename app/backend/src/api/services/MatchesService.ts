import { ModelStatic } from 'sequelize';
import Teams from '../../database/models/TeamsModel';
import Matches from '../../database/models/MatchesModel';
import IServiceMatches from '../interfaces/IServiceMatches';

export default class MatchesService implements IServiceMatches {
  protected model: ModelStatic<Matches> = Matches;

  async getAll(): Promise<Matches[]> {
    return this.model.findAll({
      include: [{ model: Teams,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, { model: Teams,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
      ],
    });
  }

  async getMatchesByProgress(status: boolean): Promise<Matches[]> {
    return this.model.findAll({
      where: {
        inProgress: status,
      },
      include: [{ model: Teams,
        as: 'homeTeam',
        attributes: ['teamName'],
      }, { model: Teams,
        as: 'awayTeam',
        attributes: ['teamName'],
      },
      ],
    });
  }

  async finishMatch(id: number): Promise<object> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  }

  async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}
