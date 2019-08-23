/*The structure of the node of the queue is*/

/**
 * This is Queue Node
 */
class QueueNode<T> {
    public data: T;
    public next: QueueNode<T> | null;
    constructor(a: T) {
        this.data = a;
        this.next = null;
    }
}
/**
 * This class is implementation of Queue using linked list
 */
// tslint:disable-next-line: max-classes-per-file
export class QueueNodeImpl<T> {
    public front: QueueNode<T> | null = null;
    public rear: QueueNode<T> | null = null;

    /**
     * This function should add an item at rear
     * @param a
     */
    public add(a: T) {
        // Your code here
        const temp = new QueueNode(a);
        if (this.front == null) {
            this.front = temp;
            this.rear = this.front;
        } else {
            if (this.rear) {
                this.rear.next = temp;
            }
            this.rear = temp;
        }
    }

    /**
     * This function should remove front item from queue and
     * return the removed item
     * @return {T} item removed
     */
    public poll(): T | undefined {
        if (this.front == null) {
            return undefined;
        }
        if (this.rear === this.front) {
            const data = this.front.data;
            this.front = this.rear = null;
            return data;
        }
        const temp = this.front;
        this.front = temp.next;
        return temp.data;
    }

    /**
     * The method to check if queue is empty or not
     * @return {boolean} true or false
     */
    public isEmpty(): boolean {
        return this.front === this.rear ? true : false;
    }

    /**
     * The method to return size of the queue
     * @return {boolean} true or false
     */
    public size(): number {
        if (this.front === null) {
            return 0;
        }
        let size = 1;
        let temp = this.front;
        while (temp.next != null) {
            size++;
            temp = temp.next;
        }
        return size;
    }

    /**
     * This function return the values of the queue
     * @return {T[]} array of values
     */
    public values(): T[] {
        const tempArr: T[] = [];
        if (this.front === null) {
            return [];
        }
        let temp = this.front;
        tempArr.push(temp.data);
        while (temp.next != null) {
            temp = temp.next;
            tempArr.push(temp.data);
        }
        return tempArr;
    }
}
