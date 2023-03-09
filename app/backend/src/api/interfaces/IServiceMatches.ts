import Matches from '../../database/models/MatchesModel';

export default interface IServiceMatches {
  getAll(): Promise<Matches[]>
  getMatchesByProgress(status: boolean): Promise<Matches[]>
  finishMatch(id: number): Promise<object>
  updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>
  createMatch(homeTeamId: number, awayTeamId: number, homeTeamGoals: number, awayTeamGoals: number):
  Promise<Matches>
}
