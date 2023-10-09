/* eslint-disable no-magic-numbers */
import { createReducer } from "@reduxjs/toolkit";

import { taskAdded, taskDeleted, taskToggled } from "./action-creators";

const INITIAL_STATE = [];

export default createReducer(INITIAL_STATE, {
  [taskAdded](state, action) {
    const maxId = state.length ? state[state.length - 1].id : 0;
    state.push({ id: maxId + 1, text: action.payload });
  },

  [taskToggled](state, action) {
    const index = state.findIndex((task) => task.id === action.payload);
    state[index].completed = !state[index].completed;
  },

  [taskDeleted](state, action) {
    return state.filter((task) => task.id !== action.payload);
  },
});
