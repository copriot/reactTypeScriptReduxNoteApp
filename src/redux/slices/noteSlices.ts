import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteData } from "../../types";
import { v4 } from "uuid";
const initialState: { notes: Note[] } = {
  notes: [],
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    //PayloadAction:Redux'ta action'un payload'ının tipini belirtmek için kullanılır
    addNote(state, action: PayloadAction<NoteData>) {
      //NoteData tipindeki payload'ı id ekleyip Note tipine çevirmek için
      const newNote: Note = {
        ...action.payload,
        id: v4(),
      };
      //state'e yeni notu eklemek için push luyoruz
      state.notes.push(newNote);
    },
  },
});

export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
