export interface Note {
  id: string;
  name: string;
  createdAt: string;
  content: string;
  dates: string[];
  category: string;
  isArchived: boolean;
}

export interface NoteInput {
  name: string;
  content: string;
  category: string;
  isArchived: boolean;
}
