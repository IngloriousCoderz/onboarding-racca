import { test, expect } from "vitest";
import text, { textChanged } from "./text.slice";

test("it should change the text", () => {
  const stateBefore = "Some text";
  const action = textChanged("Some other text");
  const stateAfter = "Some other text";

  const state = text(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should ignore any other action", () => {
  const stateBefore = "Some text";
  const action = { type: "coffee/made", payload: 2 };

  const state = text(stateBefore, action);

  expect(state).toBe(stateBefore);
});

test("it should initialize the state", () => {
  const stateBefore = undefined;
  const action = { type: "coffee/made", payload: 2 };
  const stateAfter = "";

  const state = text(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});
