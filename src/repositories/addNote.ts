import { Note } from '../models/noteModels.js';
import { NoteModel } from '../validation/noteValidation.js';

export const addNote = async (note: Note): Promise<Note> => {
  return await NoteModel.create(note);
};
