import { NextFunction, Request, Response } from 'express';
import TeamService from '../services/TeamService';

const teamsService = new TeamService();

const MatchesHandler = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamId, awayTeamId } = req.body;

  if (homeTeamId === awayTeamId) {
    return res.status(422).json({ message:
      'It is not possible to create a match with two equal teams' });
  }

  const allTeams = await teamsService.getAll();
  const filteredTeams = allTeams.filter((team) => homeTeamId === team.id || awayTeamId === team.id);

  if (filteredTeams.length !== 2) {
    return res.status(404).json({ message:
      'There is no team with such id!' });
  }

  next();
};

export default MatchesHandler;
