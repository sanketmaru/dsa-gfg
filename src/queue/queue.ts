import { Stack } from "../stack/stack";

// Implement a Queue using Array. Your task is only to complete the functions push and pop.
/* This is Queue class using array */
export class Queue<T> {
    public front: number = 0;
    public rear: number = 0;
    public arr: T[];

    constructor(size: number = 10) {
        this.front = 0;
        this.rear = 0;
        this.arr = new Array(size);
    }

    /** The method add to push element into the queue
     * @param {number} a - this is a value.
     * @return {void}
     */
    public add(a: T): void {
        this.arr[this.rear++] = a;
    }

    /** The method pop which return the element poped out of the queue
     * @return {T} element which is removed
     */
    /* */
    public poll(): T | undefined {
        // Your code
        if (this.front === this.rear) {
            return;
        }
        const elem = this.arr[this.front];
        delete this.arr[this.front];
        this.front++;
        return elem;
    }

    /**
     * The method to check if queue is empty or not
     * @return {boolean} true or false
     */
    public isEmpty(): boolean {
        return this.rear - this.front === 0 ? true : false;
    }

    /**
     * The method to return size of the queue
     * @return {boolean} true or false
     */
    public size(): number {
        return this.rear - this.front;
    }

    /**
     * This function return the values of the queue
     * @return {T[]} array of values
     */
    public values(): T[] {
        const tempArr: T[] = [];
        for (let i = this.front; i < this.rear; i++) {
            tempArr.push(this.arr[i]);
        }
        return tempArr;
    }

    /**
     * This function Reverses a Queue
     * @returns {T[]} array of values
     */
    public reverse(): T[] {
        const stack = new Stack<T>();
        this.values().forEach( (val) => {
            stack.push(val);
        });
        return stack.values();
    }
}
