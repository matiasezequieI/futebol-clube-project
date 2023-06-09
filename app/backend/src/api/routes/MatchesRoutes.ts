import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import MatchesService from '../services/MatchesService';
import TokenHandler from '../middlewares/TokenHandler';
import MatchesHandler from '../middlewares/MatchesHandler';

const matchesRouter = Router();
const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

matchesRouter.get('/', (req:Request, res:Response) => matchesController.getAll(req, res));
matchesRouter.patch('/:id/finish', TokenHandler, (req:Request, res: Response) =>
  matchesController.finishMatch(req, res));
matchesRouter.patch('/:id', TokenHandler, (req: Request, res: Response) =>
  matchesController.updateMatch(req, res));
matchesRouter.post('/', TokenHandler, MatchesHandler, (req: Request, res: Response) =>
  matchesController.createMatch(req, res));

export default matchesRouter;
