import { deleteNote } from '../repositories/notesRepository.js';

export const removeNote = (id: string) => deleteNote(id);
