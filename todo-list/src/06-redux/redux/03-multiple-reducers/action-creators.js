import {
  TEXT_CHANGED,
  TASK_ADDED,
  TASK_TOGGLED,
  TASK_DELETED,
} from "./action-types";

export const textChanged = (text) => ({ type: TEXT_CHANGED, payload: text });
export const taskAdded = (text) => ({ type: TASK_ADDED, payload: text });
export const taskToggled = (id) => ({ type: TASK_TOGGLED, payload: id });
export const taskDeleted = (id) => ({ type: TASK_DELETED, payload: id });
