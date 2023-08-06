import { Request, Response } from 'express';
import NotFound from 'http-errors';
import { updateNote } from '../services/updateNote.js';

export const updateNoteCtrl = async (req: Request, res: Response) => {
  const { id } = req.params;

  const updatedNote = await updateNote(id, req.body);
  console.log(updatedNote);
  if (!updatedNote) {
    throw NotFound(`note with id:${id} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    message: `updated note with id:${id}`,
    data: {
      updatedNote,
    },
  });
};
