import express from 'express';
import { getAllNotes } from '../services/getAllNotes.js';
import { noteSchema } from '../validation/noteValidation.js';
import { validation } from '../middlewares/validation.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { getNoteById } from '../repositories/notesRepository.js';
import { createNote } from '../services/createNote.js';
import { removeNote } from '../services/removeNote.js';
import { updateNote } from '../services/updateNote.js';

const router = express.Router();

router.get(
  '/notes',
  ctrlWrapper(async (_, res) => {
    const notes = await getAllNotes();
    res.json(notes);
  })
);

router.get(
  '/notes/:id',
  ctrlWrapper(async (req, res) => {
    const note = await getNoteById(req.params.id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).send('Note not found');
    }
  })
);

router.post(
  '/notes',
  validation(noteSchema),
  ctrlWrapper(async (req, res) => {
    const note = await createNote(req.body);
    res.status(201).json(note);
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
    const updatedNote = await updateNote(req.params.id, req.body);
    res.status(200).json(updatedNote);
  })
);

export default router;
