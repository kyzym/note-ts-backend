import { Note } from '../models/noteModels.js';
import { NoteModel } from '../validation/noteValidation.js';

export const findAndUpdateNote = async (
  id: string,
  updatedNote: Partial<Note>
) => {
  return await NoteModel.findByIdAndUpdate(id, updatedNote, { new: true });
};
