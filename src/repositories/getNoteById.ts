import { notes } from '../data/notesData.js';

export const getNoteById = (id: string) => notes.find((note) => note.id === id);
