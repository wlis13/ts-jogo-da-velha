import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_req: Request, res: Response) =>
  res.status(StatusCodes.ACCEPTED).json({ message: 'sussukita gosta de jogar chrash' }));

export default router;
