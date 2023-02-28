import Teams from '../../database/models/TeamsModel';
// import ITeam from './ITeam';

export default interface IServiceTeam {
  getAll(): Promise<Teams[]>
  getById(id: number): Promise<Teams>;
}
