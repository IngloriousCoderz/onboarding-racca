import { createAction } from "@reduxjs/toolkit";

export const textChanged = createAction("text/textChanged");
export const taskAdded = createAction("todo-list/taskAdded");
export const taskToggled = createAction("tasks/taskToggled");
export const taskDeleted = createAction("tasks/taskDeleted");
