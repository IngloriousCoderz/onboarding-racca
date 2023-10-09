import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../service/api";

export const tasksRetrieved = createAsyncThunk("tasks/tasksRetrieved", () =>
  api.retrieveTasks()
);

export const taskAdded = createAsyncThunk("tasks/taskAdded", (text) =>
  api.createTask({ text })
);

export const taskToggled = createAsyncThunk(
  "tasks/taskToggled",
  async (id, { getState }) => {
    const task = getState().tasks.find((task) => task.id === id);
    await api.updateTask(id, { completed: !task.completed });
    return id;
  }
);

export const taskDeleted = createAsyncThunk("tasks/taskDeleted", async (id) => {
  await api.deleteTask(id);
  return id;
});
