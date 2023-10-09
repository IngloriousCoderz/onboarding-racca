import {
  TEXT_CHANGED,
  TASK_ADDED,
  TASK_TOGGLED,
  TASK_DELETED,
} from "./action-types";
import { textChanged } from "./action-creators";

import text from "./text";
import tasks from "./tasks";

const INITIAL_STATE = {
  text: "",
  tasks: [],
};

export default function todoList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEXT_CHANGED:
      return {
        ...state,
        text: text(state.text, action),
      };

    case TASK_ADDED: {
      return {
        ...state,
        text: text(state.text, textChanged("")),
        tasks: tasks(state.tasks, action),
      };
    }

    case TASK_TOGGLED:
      return {
        ...state,
        tasks: tasks(state.tasks, action),
      };

    case TASK_DELETED:
      return {
        ...state,
        tasks: tasks(state.tasks, action),
      };

    default:
      return state;
  }
}
