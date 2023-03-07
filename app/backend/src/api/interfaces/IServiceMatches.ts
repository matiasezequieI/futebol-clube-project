import Matches from '../../database/models/MatchesModel';

export default interface IServiceMatches {
  getAll(): Promise<Matches[]>
  getMatchesByProgress(status: boolean): Promise<Matches[]>
  finishMatch(id: number): Promise<object>
}
