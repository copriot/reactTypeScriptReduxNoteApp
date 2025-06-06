import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { tags: string[] } = {
  tags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag(state, action: PayloadAction<string>) {
      if (state.tags.includes(action.payload)) return;

      state.tags.push(action.payload);
    },
  },
});

export const { addTag } = tagsSlice.actions;
export default tagsSlice.reducer;
