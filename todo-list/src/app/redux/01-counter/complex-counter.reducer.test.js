import { expect, test } from "vitest";

import counter, { incremented, reset } from "./complex-counter.reducer";

test("it should decrement by passing a negative amount", () => {
  // given
  const stateBefore = { value: 0 };
  const action = incremented(-3);
  const stateAfter = { value: -3 };

  // when
  const state = counter(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});

test("it should increment by a certain amount", () => {
  const stateBefore = { value: 0 };
  const action = incremented(2);
  const stateAfter = { value: 2 };

  const state = counter(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should reset", () => {
  const stateBefore = { value: 3 };
  const action = reset();
  const stateAfter = { value: 0 };

  const state = counter(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});

test("it should accumulate multiple actions", () => {
  const stateBefore = { value: 0 };
  const actions = [incremented(2), incremented(3)];
  const stateAfter = { value: 5 };

  const state = actions.reduce(counter, stateBefore);

  expect(state).toStrictEqual(stateAfter);
});

test("it should ignore any other action", () => {
  const stateBefore = { value: 3 };
  const action = { type: "coffee/made", payload: 2 };

  const state = counter(stateBefore, action);

  expect(state).toBe(stateBefore);
});

test("it should initialize the state", () => {
  const stateBefore = undefined;
  const action = { type: "coffee/made", payload: 2 };
  const stateAfter = { value: 0 };

  const state = counter(stateBefore, action);

  expect(state).toStrictEqual(stateAfter);
});
