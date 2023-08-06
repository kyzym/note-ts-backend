import {
  findDatesInContent,
  removeDatesFromContent,
} from '../helpers/parseDatesFromContent.js';
import { Note, NoteInput } from '../models/noteModels.js';
import { findAndUpdateNote } from '../repositories/findAndUpdateNote.js';

export const updateNote = async (
  id: string,
  updatedFields: Partial<NoteInput>
) => {
  if (updatedFields.content !== undefined) {
    const dates = findDatesInContent(updatedFields.content);
    const content = removeDatesFromContent(updatedFields.content);

    const updatedNote: Partial<Note> = {
      ...updatedFields,
      dates,
      content,
    };

    return await findAndUpdateNote(id, updatedNote);
  } else {
    return null;
  }
};
