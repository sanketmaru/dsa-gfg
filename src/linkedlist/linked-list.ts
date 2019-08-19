// Insertion in a linked list

class LinkedListNode {
    public data: number;
    public next: LinkedListNode | null;

    constructor(a: number) {
        this.data = a;
        this.next = null;
    }
}

// tslint:disable-next-line: max-classes-per-file
export class LinkedList {
    public head: LinkedListNode | null = null;
    public tail: LinkedListNode | null = null;
    // insert at beginning
    public add(a: number) {
        const temp = new LinkedListNode(a);
        if (this.head == null) {
            this.head = temp;
            return;
        }
        temp.next = this.head;
        this.head = temp;
    }
    // insert at end
    public insertAtEnd(a: number) {
        const temp = new LinkedListNode(a);
        if (this.head == null ) {
            this.head = temp;
            this.tail = this.head;
            return;
        }
        if (this.tail) {
            this.tail.next = temp;
        }
        this.tail = temp;
    }
    public values() {
        const val = [];
        let temp = this.head;
        while (temp != null) {
            val.push(temp.data);
            temp = temp.next;
        }
        return val;
    }
    // get count of nodes in a linked list
    public count(): number {
        let count = 0;
        if (this.head === null) {
            return count;
        }
        count = 1;
        let temp: LinkedListNode = this.head;
        while (temp.next != null) {
            ++count;
            temp = temp.next;
        }
        return count;
    }
    public getNth() {
        
    }
}
