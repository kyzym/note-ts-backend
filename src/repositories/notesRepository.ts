import { notes } from '../data/notesData.js';
import { Note } from '../models/noteModels.js';

export const getNoteById = (id: string) => notes.find((note) => note.id === id);
export const addNote = (note: Note) => notes.unshift(note);
export const deleteNote = (id: string) => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) notes.splice(index, 1);
};
