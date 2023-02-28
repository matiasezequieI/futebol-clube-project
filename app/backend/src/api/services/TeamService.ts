import { ModelStatic } from 'sequelize';
import Teams from '../../database/models/TeamsModel';
import IServiceTeam from '../interfaces/IServiceTeam';

export default class TeamService implements IServiceTeam {
  protected model: ModelStatic<Teams> = Teams;

  async getAll(): Promise<Teams[]> {
    return this.model.findAll();
  }

  async getById(id: number): Promise<Teams> {
    const team = <Teams> await this.model.findOne({ where: { id } });
    return team;
  }
}
