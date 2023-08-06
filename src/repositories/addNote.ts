import { notes } from '../data/notesData.js';
import { Note } from '../models/noteModels.js';

export const addNote = (note: Note) => notes.unshift(note);
