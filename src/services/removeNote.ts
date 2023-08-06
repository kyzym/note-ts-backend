import { deleteNote } from '../repositories/deleteNote.js';

export const removeNote = (id: string) => deleteNote(id);
