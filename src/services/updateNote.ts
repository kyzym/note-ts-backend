import {
  findDatesInContent,
  removeDatesFromContent,
} from '../helpers/parseDatesFromContent.js';
import { Note, NoteInput } from '../models/noteModels.js';
import { getNoteById } from '../repositories/getNoteById.js';

export const updateNote = async (
  id: string,
  updatedFields: Partial<NoteInput>
) => {
  const note = await getNoteById(id);

  if (note && updatedFields.content !== undefined) {
    const dates = findDatesInContent(updatedFields.content);
    const content = removeDatesFromContent(updatedFields.content);

    const updatedNote: Partial<Note> = {
      ...updatedFields,
      dates,
      content,
    };

    Object.assign(note, updatedNote);

    return note;
  } else {
    return null;
  }
};
