import { test, expect } from "vitest";
import tasks from "./tasks";
import { taskAdded, taskDeleted, taskToggled } from "./action-creators";

test("it should add a task given the text", () => {
  const stateBefore = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = taskAdded("New task");
  const stateAfter = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
    { id: 4, text: "New task" },
  ];

  const state = tasks(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should toggle the 'completed' property on a task given its id", () => {
  const stateBefore = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = taskToggled(2);
  const stateAfter = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should delete a task given its id", () => {
  const stateBefore = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = taskDeleted(2);
  const stateAfter = [
    { id: 1, text: "Learn React", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  const state = tasks(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should ignore any other action", () => {
  const stateBefore = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = { type: "coffee/made", payload: 2 };

  const state = tasks(stateBefore, action);

  expect(state).toBe(stateBefore);
});

test("it should initialize the state", () => {
  const stateBefore = undefined;
  const action = { type: "coffee/made", payload: 2 };
  const stateAfter = [];

  const state = tasks(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});
