import { Request, Response } from 'express';
import { getAllNotes } from '../repositories/getAllNotes.js';

export async function handleGetAllNotes(req: Request, res: Response) {
  const notes = await getAllNotes();

  res.json({
    status: 'success',
    code: 200,
    data: {
      notes,
    },
  });
}
