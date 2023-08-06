import { Request, Response } from 'express';
import { createNote } from '../services/createNote.js';

export const createNoteCtrl = async (req: Request, res: Response) => {
  const note = await createNote(req.body);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      note,
    },
  });
};
