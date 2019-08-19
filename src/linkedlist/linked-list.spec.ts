import { LinkedList } from "./linked-list";

test("basic", () => {
  const list = new LinkedList();
  list.add(1);
  list.add(10);
  list.add(5);
  expect(Array.from(list.values())).toMatchObject([5, 10, 1]);
//   expect(list.dequeue()).toBe(1);
//   expect(Array.from(list.values())).toMatchObject([10, 5]);
//   expect(list.dequeue()).toBe(10);
//   expect(list.dequeue()).toBe(5);
//   expect(list.dequeue()).toBe(undefined);
//   expect(Array.from(list.values())).toMatchObject([]);
//   list.add(5);
//   expect(Array.from(list.values())).toMatchObject([5]);
});
