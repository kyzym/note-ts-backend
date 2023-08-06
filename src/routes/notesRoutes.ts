import express from 'express';
import { createNoteCtrl } from '../controllers/createNoteCtrl.js';
import { handleGetAllNotes } from '../controllers/getAllNotesCtrl.js';
import { getNoteByIdCtrl } from '../controllers/getNoteByIdCtrl.js';
import { getStatsCtrl } from '../controllers/getStatsCtrl.js';
import { removeNoteCtrl } from '../controllers/removeNoteCtrl.js';
import { updateNoteCtrl } from '../controllers/updateNoteCtrl.js';
import { ctrlWrapper } from '../middlewares/ctrlWrapper.js';
import { validation } from '../middlewares/validation.js';
import { noteSchema } from '../validation/noteValidation.js';

const router = express.Router();

router.get('/notes', ctrlWrapper(handleGetAllNotes));

router.get('/notes/stats', ctrlWrapper(getStatsCtrl));

router.get('/notes/:id', ctrlWrapper(getNoteByIdCtrl));

router.post('/notes', validation(noteSchema), ctrlWrapper(createNoteCtrl));

router.delete('/notes/:id', ctrlWrapper(removeNoteCtrl));

router.patch('/notes/:id', validation(noteSchema), ctrlWrapper(updateNoteCtrl));

export default router;
