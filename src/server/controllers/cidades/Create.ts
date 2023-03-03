import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
  name: string;
  estado: string;
}

export const validadeBody: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  estado: yup.string().required(),
});

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  res.status(StatusCodes.ACCEPTED).json(req.body);
};
