import { Queue } from "./queue";

test("basic queue test using a array", () => {
  const queue = new Queue();
  queue.add(1);
  queue.poll();
  expect(queue.isEmpty()).toBe(true);
});

test("insert 5 elements and remove 1, length should be 4", () => {
  const queue = new Queue(10);
  queue.add(1);
  queue.add(2);
  queue.add(3);
  queue.add(4);
  queue.add(5);
  queue.poll();
  expect(queue.size()).toEqual(4);
  expect(queue.values()).toEqual([2, 3, 4, 5]);
  queue.poll();
  expect(queue.values()).toEqual([3, 4, 5]);
  queue.add(6);
  expect(queue.values()).toEqual([3, 4, 5, 6]);
  queue.poll();
  queue.poll();
  expect(queue.values()).toEqual([5, 6]);
  queue.add(7);
  queue.add(8);
  // reverse a queue
  expect(queue.reverse()).toEqual([8, 7, 6, 5]);
});
