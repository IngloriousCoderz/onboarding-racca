import { combineReducers } from "@reduxjs/toolkit";

import text from "./text";
import tasks from "./tasks";

export default combineReducers({ text, tasks });

// const INITIAL_STATE = {};

// export default function todoList(state = INITIAL_STATE, action) {
//   return {
//     text: text(state.text, action),
//     tasks: tasks(state.tasks, action),
//   };
// }
