// Your task is to implement  2 stacks in one array efficiently .
class TwoStack {
    public size: number;
    public top1: number;
    public top2: number;
    public arr: number[] = [];
    constructor() {
        this.size = 100;
        this.top1 = -1;
        this.top2 = this.size;
    }
}

// tslint:disable-next-line: max-classes-per-file
export class Stacks {
    // sq is the object of class TwoStack
    /* The method push to push element into the stack 2 */
    public push1(x: number, sq: TwoStack) {
        sq.top1 = sq.top1 + 1;
        sq.arr[sq.top1] = x;
    }
    /* The method push to push element into the stack 2*/
    public push2(x: number, sq: TwoStack) {
        sq.top2 = sq.top2 - 1;
        sq.arr[sq.top2] = x;
    }
    /* The method pop to pop element from the stack 1 */
    // Return the popped element
    public pop1(sq: TwoStack) {
        if (sq.top1 === -1) {
            return -1;
        }
        const topElement = sq.arr[sq.top1];
        sq.top1--;
        return topElement;
    }
    /* The method pop to pop element from the stack 2 */
    // Return the popper element
    public pop2(sq: TwoStack) {
        if (sq.top2 === 100) {
            return 100;
        }
        const topElement = sq.arr[sq.top2];
        sq.top2++;
        return topElement;
    }
}
