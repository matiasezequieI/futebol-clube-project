import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET || 'eugostodebatata';

const validateToken = (token: string) => {
  const uncryptedUser = jwt.verify(token, secret);
  return uncryptedUser;
};

const TokenHandler = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  if (authorization.length < 16) {
    return res.status(401)
      .json({ message: 'Token must be a valid token' });
  }

  const uncryptedUser = validateToken(authorization);

  if (!uncryptedUser) return res.status(401).json({ message: 'Token must be a valid token' });

  next();
};

export default TokenHandler;
