import { createSlice } from "@reduxjs/toolkit";

import { taskAdded } from "../redux/thunks";

const INITIAL_STATE = "";

const slice = createSlice({
  name: "text",
  initialState: INITIAL_STATE,

  reducers: {
    textChanged(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [taskAdded.pending]() {
      return INITIAL_STATE;
    },
  },
});

export default slice.reducer;
export const { textChanged } = slice.actions;
