import { getAllNotes } from '../repositories/getAllNotes.js';
import { Request, Response } from 'express';

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
