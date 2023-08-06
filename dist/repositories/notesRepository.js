import { notes } from '../data/notesData.js';
export const getNoteById = (id) => notes.find((note) => note.id === id);
export const addNote = (note) => notes.unshift(note);
export const deleteNote = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1)
        notes.splice(index, 1);
};
