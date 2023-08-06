import { notes } from '../data/notesData.js';

export const deleteNote = (id: string): boolean => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    return true;
  }
  return false;
};
