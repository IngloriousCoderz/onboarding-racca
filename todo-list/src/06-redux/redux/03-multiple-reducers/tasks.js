/* eslint-disable no-magic-numbers */
import { TASK_ADDED, TASK_DELETED, TASK_TOGGLED } from "./action-types";

const INITIAL_STATE = [];

export default function tasks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TASK_ADDED: {
      const maxId = state.length ? state[state.length - 1].id : 0;
      return [...state, { id: maxId + 1, text: action.payload }];
    }

    case TASK_TOGGLED:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );

    case TASK_DELETED:
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}
