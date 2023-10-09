/* eslint-disable no-magic-numbers */
import { createSlice } from "@reduxjs/toolkit";

import { taskAdded } from "../redux/04-slices/action-creators";

const INITIAL_STATE = [];

const slice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,

  reducers: {
    taskToggled(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
    },

    taskDeleted(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
  },

  extraReducers: {
    [taskAdded](state, action) {
      const maxId = state.length ? state[state.length - 1].id : 0;
      state.push({ id: maxId + 1, text: action.payload });
    },
  },
});

export default slice.reducer;
export const { taskToggled, taskDeleted } = slice.actions;
