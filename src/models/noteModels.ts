export interface Note {
  name: string;
  created?: string;
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
