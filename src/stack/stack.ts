// Implement a Stack using Array. Your task is to complete the functions below.
// You are required to complete two methods push which take one argument an integer 'x' to be pushed into the stack
// and pop which returns a integer poped out from the stack.
/**
 * this is Stack Class.
 */
export class Stack {
    public top: number;
    public arr: number[] = [];
    constructor() {
        this.top = -1;
    }

    /** The method push to push element into the stack
     * @param {number} a - this is a value.
     * @return {void}
     */
    public push(a: number) {
        if (!a) {
            // tslint:disable-next-line: no-console
            console.debug("Please push a proper value");
            return;
        }
        this.top = this.top + 1;
        this.arr[this.top] = a;
    }

    /* The method pop which return
      the element poped out of the stack*/
    public pop() {
        // Your code here
        if ( this.top === -1) {
            return -1;
        }
        const topElement = this.arr[this.top];
        this.arr = this.arr.filter( (elem, index) => {
            return index !== this.top;
        });
        this.top = this.top - 1;
        return topElement;
    }
}
