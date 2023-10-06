/* eslint-disable no-magic-numbers */
const INITIAL_STATE = {
  text: "",
  tasks: [],
};

const TEXT_CHANGED = "todo-list/textChanged";
const TASK_ADDED = "todo-list/taskAdded";
const TASK_TOGGLED = "todo-list/taskToggled";
const TASK_DELETED = "todo-list/taskDeleted";

export const textChanged = (text) => ({ type: TEXT_CHANGED, payload: text });
export const taskAdded = (text) => ({ type: TASK_ADDED, payload: text });
export const taskToggled = (id) => ({ type: TASK_TOGGLED, payload: id });
export const taskDeleted = (id) => ({ type: TASK_DELETED, payload: id });

export default function todoList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEXT_CHANGED:
      return {
        ...state,
        text: action.payload,
      };

    case TASK_ADDED: {
      const maxId = state.tasks.length
        ? state.tasks[state.tasks.length - 1].id
        : 0;
      return {
        ...state,
        text: "",
        tasks: [...state.tasks, { id: maxId + 1, text: action.payload }],
      };
    }

    case TASK_TOGGLED:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case TASK_DELETED:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
}
