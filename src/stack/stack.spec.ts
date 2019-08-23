import { Stack } from "./stack";

test("basic stack test using a array", () => {
  const stack = new Stack();
  stack.push(1);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});

test("insert 5 elements and remove 1, length should be 4", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.pop();
  expect(stack.size()).toEqual(4);
  expect(stack.values()).toEqual([4, 3, 2, 1]);
});
