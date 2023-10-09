/* eslint-disable no-magic-numbers */
import { createSlice } from "@reduxjs/toolkit";

import {
  tasksRetrieved,
  taskAdded,
  taskToggled,
  taskDeleted,
} from "../redux/thunks";

const INITIAL_STATE = [];

const slice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,

  extraReducers: {
    [tasksRetrieved.fulfilled](state, action) {
      return action.payload;
    },

    [taskAdded.fulfilled](state, action) {
      state.push(action.payload);
    },

    [taskToggled.fulfilled](state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
    },

    [taskDeleted.fulfilled](state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export default slice.reducer;
