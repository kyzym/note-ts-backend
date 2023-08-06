import { notes } from '../data/notesData';

export const getNoteById = (id: string) => notes.find((note) => note.id === id);
