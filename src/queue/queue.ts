// Implement a Queue using Array. Your task is only to complete the functions push and pop.
/* This is Queue class */
export class Queue<T> {
    public front: number = 0;
    public rear: number = 0;
    public arr: T[] = [];

    constructor() {
        this.front = 0;
        this.rear = 0;
    }

    /** The method add to push element into the queue
     * @param {number} a - this is a value.
     * @return {void}
     */
    public add(a: T): void {
        this.arr[this.front++] = a;
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
        const elem = this.arr[this.rear++];
        delete this.arr[this.rear++];
        return elem;
    }
    /**
     * The method to check if queue is empty or not
     * @return {boolean} true or false
     */
    public isEmpty(): boolean {
        return this.arr.length === 0 ? true : false;
    }
}
