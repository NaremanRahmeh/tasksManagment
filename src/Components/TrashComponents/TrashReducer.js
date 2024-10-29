import { createSlice } from "@reduxjs/toolkit";

const initialTrash = [];

const trashSlice = createSlice({
    name: 'trash',
    initialState: initialTrash,
    reducers: {
      addToTrash: (state, action) => {
        state.push(action.payload);
      },
    },
  });

  export const { addToTrash } = trashSlice.actions;

  export default trashSlice.reducer