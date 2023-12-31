import { getAllNotes } from '../repositories/getAllNotes.js';

export const getStats = async () => {
  const notes = await getAllNotes();

  const archivedCount = notes.filter((note) => note.isArchived).length;
  const nonArchivedCount = notes.length - archivedCount;

  return {
    totalArchived: archivedCount,
    totalNonArchived: nonArchivedCount,
  };
};
