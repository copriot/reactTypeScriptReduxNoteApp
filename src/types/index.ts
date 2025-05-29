export type Note = {
  id: string;
  title: string;
  markDown: string;
  tags: string[];
};

//Note tipinden id özelligini kaldırıp kullanıyor Omit
export type NoteData = Omit<Note, "id">;
