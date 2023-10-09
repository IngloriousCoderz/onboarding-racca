import { expect, test } from "vitest";

import counter, { incremented, reset } from "./counter.reducer";

test("it should decrement by passing a negative amount", () => {
  // given
  const stateBefore = 0;
  const action = incremented(-3);
  const stateAfter = -3;

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toBe(stateAfter);
});

test("it should increment by a certain amount", () => {
  const stateBefore = 0;
  const action = incremented(2);
  const stateAfter = 2;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should reset", () => {
  const stateBefore = 3;
  const action = reset();
  const stateAfter = 0;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should accumulate multiple actions", () => {
  const stateBefore = 0;
  const actions = [incremented(2), incremented(3)];
  const stateAfter = 5;

  const state = actions.reduce(counter, stateBefore);

  expect(state).toBe(stateAfter);
});

test("it should ignore any other action", () => {
  const stateBefore = 3;
  const action = { type: "coffee/made", payload: 2 };
  const stateAfter = 3;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});

test("it should initialize the state", () => {
  const stateBefore = undefined;
  const action = { type: "coffee/made", payload: 2 };
  const stateAfter = 0;

  const state = counter(stateBefore, action);

  expect(state).toBe(stateAfter);
});
