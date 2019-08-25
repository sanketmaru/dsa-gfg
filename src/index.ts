import { Queue } from "./queue/queue";
import { Stack } from "./stack/stack";

console.log("Creating stacks");

const stack = new Stack();
stack.push(1);
stack.push(2);

console.log("stack items", stack);

console.log("Creating Queue");
const queue = new Queue();
queue.add(2);
queue.add(3);

console.log("queue items", queue);
