import { getNoteById } from '../repositories/notesRepository.js';
import { parseDatesFromContent } from '../helpers/parseDatesFromContent.js';
export const updateNote = async (id, updatedFields) => {
    const note = await getNoteById(id);
    if (note && updatedFields.content !== undefined) {
        const { dates, content } = parseDatesFromContent(updatedFields.content);
        const updatedNote = {
            ...updatedFields,
            dates,
            content,
        };
        Object.assign(note, updatedNote);
        return note;
    }
};
