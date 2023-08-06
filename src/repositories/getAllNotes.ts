import { NoteModel } from '../validation/noteValidation.js';

export const getAllNotes = async () => {
  return await NoteModel.find().sort({ createdAt: -1 });
};
