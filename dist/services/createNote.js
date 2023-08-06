import { v4 as uuidv4 } from 'uuid';
import { formatDate } from '../helpers/formatDate.js';
import { findDatesInContent, removeDatesFromContent, } from '../helpers/parseDatesFromContent.js';
import { addNote } from '../repositories/addNote.js';
export const createNote = async (noteData) => {
    const dates = findDatesInContent(noteData.content);
    const content = removeDatesFromContent(noteData.content);
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
