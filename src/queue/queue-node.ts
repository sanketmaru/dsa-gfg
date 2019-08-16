/*This is a function problem.You only need to complete the function given below*/
/*The structure of the node of the queue is*/

class QueueNode {
    public data: number;
    public next: QueueNode | null;
    constructor(a: number) {
        this.data = a;
        this.next = null;
    }
}
// tslint:disable-next-line: max-classes-per-file
class MyQueue {
    public front: QueueNode | null = null;
    public rear: QueueNode | null = null;

    // This function should add an item at
    // rear
    public push(a: number) {
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

    // This function should remove front
    // item from queue and should return
    // the removed item.
    public pop() {
        if (this.front == null) {
            return -1;
        }
        // Your code here
        if (this.rear === this.front) {
            const data = this.front.data;
            this.front = this.rear = null;
            return data;
        }
        const temp = this.front;
        this.front = temp.next;
        return temp.data;
    }
}
