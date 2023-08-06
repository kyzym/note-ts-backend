import { NoteModel } from '../validation/noteValidation.js';

export const deleteNote = async (id: string): Promise<boolean> => {
  const result = await NoteModel.findByIdAndRemove(id);

  return result !== null;
};
