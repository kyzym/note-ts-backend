import { NoteModel } from '../validation/noteValidation.js';

export const getNoteById = async (id: string) => {
  return await NoteModel.findById(id);
};
