import { findDatesInContent, removeDatesFromContent, } from '../helpers/parseDatesFromContent.js';
import { getNoteById } from '../repositories/getNoteById.js';
export const updateNote = async (id, updatedFields) => {
    const note = await getNoteById(id);
    if (note && updatedFields.content !== undefined) {
        const dates = findDatesInContent(updatedFields.content);
        const content = removeDatesFromContent(updatedFields.content);
        const updatedNote = {
            ...updatedFields,
            dates,
            content,
        };
        Object.assign(note, updatedNote);
        return note;
    }
    else {
        return null;
    }
};
