import Matches from '../../database/models/MatchesModel';

export default interface IServiceMatches {
  getAll(): Promise<Matches[]>
}
