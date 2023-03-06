import { ModelStatic } from 'sequelize';
import Teams from '../../database/models/TeamsModel';
import Matches from '../../database/models/MatchesModel';
import IServiceMatches from '../interfaces/IServiceMatches';

export default class MatchesService implements IServiceMatches {
  protected model: ModelStatic<Matches> = Matches;

  getAll(): Promise<Matches[]> {
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
}
