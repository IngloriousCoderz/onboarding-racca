import { expect, test } from "vitest";

import { Counter } from "./counter.class";

test("it should decrement by passing a negative amount", () => {
  const counter = new Counter();
  counter.increment(-3);

  expect(counter.value).toBe(-3);
});

test("it should increment by a certain amount", () => {
  const counter = new Counter();
  counter.increment(2);

  expect(counter.value).toBe(2);
});

test("it should reset", () => {
  const counter = new Counter();
  counter.reset();

  expect(counter.value).toBe(0);
});
