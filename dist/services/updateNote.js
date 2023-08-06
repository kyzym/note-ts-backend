import { getNoteById } from '../repositories/notesRepository.js';
export const updateNote = (id, updatedFields) => {
    const note = getNoteById(id);
    if (note) {
        Object.assign(note, updatedFields);
    }
};
