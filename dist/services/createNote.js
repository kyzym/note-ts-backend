import { v4 as uuidv4 } from 'uuid';
import { addNote } from '../repositories/notesRepository.js';
import { formatDate } from '../helpers/formatDate.js';
import { parseDatesFromContent } from '../helpers/parseDatesFromContent.js';
export const createNote = async (noteData) => {
    const { dates, content } = parseDatesFromContent(noteData.content);
    const { content: _, ...restNoteData } = noteData;
    const note = {
        id: uuidv4(),
        createdAt: formatDate(new Date()),
        dates,
        content,
        ...restNoteData,
    };
    return addNote(note);
};
