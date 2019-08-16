import { Queue } from "./queue/queue";
import { Stack } from "./stack/stack";

// tslint:disable-next-line: no-console
console.log("Creating stacks");

const stack = new Stack();
stack.push(1);
stack.push(2);

// tslint:disable-next-line: no-console
console.log("stack items", stack);

// tslint:disable-next-line: no-console
console.log("Creating Queue");
const queue = new Queue();
queue.push(2);
queue.push(3);

// tslint:disable-next-line: no-console
console.log("queue items", queue);
