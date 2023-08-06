import { Request, Response } from 'express';
import NotFound from 'http-errors';
import { getNoteById } from '../repositories/getNoteById';

export const getNoteByIdCtrl = async (req: Request, res: Response) => {
  const note = await getNoteById(req.params.id);

  if (!note) {
    throw NotFound(`note with id: ${req.params.id} not found`);
  }

  if (note) {
    res.json({
      status: 'success',
      code: 200,
      data: {
        note,
      },
    });
  }
};
