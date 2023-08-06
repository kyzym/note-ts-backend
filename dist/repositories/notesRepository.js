export const notes = [
    {
        id: '1',
        name: 'Заметка 1',
        date: '2021-08-05',
        category: 'Работа',
        content: 'Содержимое заметки 1',
    },
    {
        id: '1',
        name: 'Заметка 1',
        date: '2021-08-05',
        category: 'Работа',
        content: 'Содержимое заметки 1',
    },
    {
        id: '1',
        name: 'Заметка 1',
        date: '2021-08-05',
        category: 'Работа',
        content: 'Содержимое заметки 1',
    },
    {
        id: '1',
        name: 'Заметка 1',
        date: '2021-08-05',
        category: 'Работа',
        content: 'Содержимое заметки 1',
    },
    {
        id: '6',
        name: 'Заметка 6',
        date: '2021-08-05',
        category: 'Работа',
        content: 'Содержимое заметки 6',
    },
    {
        id: '7',
        name: 'Заметка 7',
        date: '2021-08-05',
        category: 'Работа',
        content: 'Содержимое заметки 7',
    },
];
export const getNoteById = (id) => notes.find((note) => note.id === id);
export const addNote = (note) => notes.push(note);
export const deleteNote = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1)
        notes.splice(index, 1);
};
