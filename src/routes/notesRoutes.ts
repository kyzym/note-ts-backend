import express from 'express';
import {
  createNote,
  getAllNotes,
  removeNote,
  updateNote,
} from '../services/notesService.js';
import { noteSchema } from '../validation/noteValidation.js';
import { validation } from '../middlewares/validation.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';

const router = express.Router();

router.get(
  '/notes',
  ctrlWrapper(async (req, res) => {
    const notes = await getAllNotes();
    res.json(notes);
  })
);

router.post(
  '/notes',
  validation(noteSchema),
  ctrlWrapper(async (req, res) => {
    await createNote(req.body);
    res.status(201).send();
  })
);

router.delete(
  '/notes/:id',
  ctrlWrapper(async (req, res) => {
    await removeNote(req.params.id);
    res.status(204).send();
  })
);

router.patch(
  '/notes/:id',
  validation(noteSchema),
  ctrlWrapper(async (req, res) => {
    await updateNote(req.params.id, req.body);
    res.status(204).send();
  })
);

export default router;
