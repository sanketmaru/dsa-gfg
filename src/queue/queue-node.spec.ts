import { QueueNodeImpl } from "./queue-node";

test("basic queue test using a linked list", () => {
  const queue = new QueueNodeImpl();
  queue.add(1);
  queue.poll();
  expect(queue.isEmpty()).toBe(true);
});

test("insert 5 elements and remove 1, length should be 4", () => {
  const queue = new QueueNodeImpl();
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
});
