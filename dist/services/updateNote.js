import { findDatesInContent, removeDatesFromContent, } from '../helpers/parseDatesFromContent.js';
import { findAndUpdateNote } from '../repositories/findAndUpdateNote.js';
export const updateNote = async (id, updatedFields) => {
    if (updatedFields.content !== undefined) {
        const dates = findDatesInContent(updatedFields.content);
        const content = removeDatesFromContent(updatedFields.content);
        const updatedNote = {
            ...updatedFields,
            dates,
            content,
        };
        return await findAndUpdateNote(id, updatedNote);
    }
    else {
        return null;
    }
};
