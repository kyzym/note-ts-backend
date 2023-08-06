import { formatDate } from '../helpers/formatDate.js';
import {
  findDatesInContent,
  removeDatesFromContent,
} from '../helpers/parseDatesFromContent.js';
import { NoteInput } from '../models/noteModels.js';
import { addNote } from '../repositories/addNote.js';

export const createNote = async (noteData: NoteInput) => {
  const dates = findDatesInContent(noteData.content);
  const content = removeDatesFromContent(noteData.content);
  const { content: _, ...restNoteData } = noteData;

  const note = {
    created: formatDate(new Date()),
    dates,
    content,
    ...restNoteData,
  };
  return addNote(note);
};
