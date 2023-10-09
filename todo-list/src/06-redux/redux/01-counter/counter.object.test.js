import { beforeEach, expect, test } from "vitest";

import { counter } from "./counter.object";

beforeEach(() => {
  counter.reset();
});

test("it should decrement by passing a negative amount", () => {
  counter.increment(-3);

  expect(counter.value).toBe(-3);
});

test("it should increment by a certain amount", () => {
  counter.increment(2);

  expect(counter.value).toBe(2);
});

test("it should reset", () => {
  counter.reset();

  expect(counter.value).toBe(0);
});
