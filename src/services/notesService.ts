import { Note } from '../models/noteModels.js';
import {
  addNote,
  deleteNote,
  getNoteById,
  notes,
} from '../repositories/notesRepository.js';

export async function getAllNotes() {
  return notes;
}
export const createNote = (note: Note) => addNote(note);
export const removeNote = (id: string) => deleteNote(id);
export const updateNote = (id: string, updatedFields: Partial<Note>) => {
  const note = getNoteById(id);
  if (note) {
    Object.assign(note, updatedFields);
  }
};
