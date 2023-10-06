import { test, expect } from "vitest";
import todoList, {
  taskAdded,
  taskDeleted,
  taskToggled,
  textChanged,
} from "./todo-list";

test("it should change the form text", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = textChanged("Some other text");
  const stateAfter = {
    text: "Some other text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should add a task given the text", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = taskAdded("New task");
  const stateAfter = {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
      { id: 4, text: "New task" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should toggle the 'completed' property on a task given its id", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = taskToggled(2);
  const stateAfter = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should delete a task given its id", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = taskDeleted(2);
  const stateAfter = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should ignore any other action", () => {
  const stateBefore = {
    text: "Some text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = { type: "coffee/made", payload: 2 };

  const state = todoList(stateBefore, action);

  expect(state).toBe(stateBefore);
});

test("it should initialize the state", () => {
  const stateBefore = undefined;
  const action = { type: "coffee/made", payload: 2 };
  const stateAfter = {
    text: "",
    tasks: [],
  };

  const state = todoList(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});
