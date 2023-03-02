import { NextFunction, Request, Response } from 'express';

const LoginHandler = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const ERR_MESSAGE = 'Invalid email or password';

  if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });

  const regex = /^\w+@[a-zA-Z_]+?/;

  if (!regex.test(email)) return res.status(401).json({ message: ERR_MESSAGE });

  if (password.length < 6) {
    return res.status(401).json({ message: ERR_MESSAGE });
  }

  next();
};

export default LoginHandler;
