import { notes } from '../data/notesData';
import { Note } from '../models/noteModels';

export const addNote = (note: Note) => notes.unshift(note);
