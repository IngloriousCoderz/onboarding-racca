import { TASK_ADDED, TEXT_CHANGED } from "./action-types";

const INITIAL_STATE = "";

export default function text(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEXT_CHANGED:
      return action.payload;

    case TASK_ADDED:
      return INITIAL_STATE;

    default:
      return state;
  }
}
