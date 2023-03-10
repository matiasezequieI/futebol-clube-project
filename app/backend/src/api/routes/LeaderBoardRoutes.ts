import { Request, Response, Router } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';
import LeaderBoardController from '../controllers/LeaderBoardController';

const routerLeaderBoard = Router();
const leaderBoardService = new LeaderBoardService();
const leaderBoardController = new LeaderBoardController(leaderBoardService);

routerLeaderBoard.get('/home', (req: Request, res: Response) =>
  leaderBoardController.getInfo(req, res));

export default routerLeaderBoard;
