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
    deleteNote(state, action: PayloadAction<string>) {
      //note'un index'ini buluyoruz
      const i = state.notes.findIndex((note) => note.id === action.payload);
      //splice ile notu siliyoruz
      state.notes.splice(i, 1);
    },
    updateNote(state, action: PayloadAction<Note>) {
      //note'un index'ini buluyoruz
      const i = state.notes.findIndex((note) => note.id === action.payload.id);
      //splice ile notu güncelliyoruz
      state.notes.splice(i, 1, action.payload);
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
