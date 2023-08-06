import { Request, Response } from 'express';
import NotFound from 'http-errors';
import { removeNote } from '../services/removeNote.js';

export const removeNoteCtrl = async (req: Request, res: Response) => {
  const note = await removeNote(req.params.id);
  const { id } = req.params;

  if (!note) {
    throw NotFound(`note with id:${id} not found`);
  }

  res.status(200).json({
    status: 'success',
    message: `note with id:${id} deleted`,
    data: {
      note,
    },
  });
};
