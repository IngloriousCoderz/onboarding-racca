import { createReducer } from "@reduxjs/toolkit";

import { taskAdded, textChanged } from "./action-creators";

const INITIAL_STATE = "";

export default createReducer(INITIAL_STATE, {
  [textChanged](state, action) {
    return action.payload;
  },

  [taskAdded]() {
    return INITIAL_STATE;
  },
});
