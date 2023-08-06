import { getNoteById } from '../repositories/notesRepository.js';
import { Note } from '../models/noteModels.js';

export const updateNote = (id: string, updatedFields: Partial<Note>) => {
  const note = getNoteById(id);
  if (note) {
    Object.assign(note, updatedFields);
  }
};
