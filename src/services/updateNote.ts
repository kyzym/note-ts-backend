import { getNoteById } from '../repositories/notesRepository.js';
import { Note, NoteInput } from '../models/noteModels.js';
import { parseDatesFromContent } from '../helpers/parseDatesFromContent.js';

export const updateNote = async (
  id: string,
  updatedFields: Partial<NoteInput>
) => {
  const note = await getNoteById(id);

  if (note && updatedFields.content !== undefined) {
    const { dates, content } = parseDatesFromContent(updatedFields.content);

    const updatedNote: Partial<Note> = {
      ...updatedFields,
      dates,
      content,
    };

    Object.assign(note, updatedNote);

    return note;
  }
};
