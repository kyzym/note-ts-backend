import { addNote, deleteNote, getNoteById, notes, } from '../repositories/notesRepository.js';
export async function getAllNotes() {
    return notes;
}
export const createNote = (note) => addNote(note);
export const removeNote = (id) => deleteNote(id);
export const updateNote = (id, updatedFields) => {
    const note = getNoteById(id);
    if (note) {
        Object.assign(note, updatedFields);
    }
};
