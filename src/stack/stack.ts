// Implement a Stack using Array. Your task is to complete the functions below.
// You are required to complete two methods push which take one argument an integer 'x' to be pushed into the stack
// and pop which returns a integer poped out from the stack.
/**
 * this is Stack Class.
 */
export class Stack<T> {
    public top: number;
    public arr: T[] = [];
    constructor() {
        this.top = -1;
    }

    /** The method push to push element into the stack
     * @param {number} a - this is a value.
     * @return {void}
     */
    public push(a: T): void {
        if (!a) {
            // tslint:disable-next-line: no-console
            console.debug("Please push a proper value");
            return;
        }
        ++this.top;
        this.arr[this.top] = a;
    }

    /**
     * The method pop which will return the top element from the stack
     * @return {T} popped element
     */
    public pop(): T | undefined {
        // Your code here
        if ( this.top === -1) {
            return undefined;
        }
        const topElement = this.arr[this.top];
        this.arr = this.arr.filter( (elem, index) => {
            return index !== this.top;
        });
        this.top = this.top - 1;
        return topElement;
    }

    /**
     * This method will return if stack is empty or not
     * @return {boolean} true or false
     */
    public isEmpty(): boolean {
        return this.top < 0;
    }

    /**
     * This will return the size of the stack
     * @return {number} size
     */
    public size(): number {
        const size = this.top + 1;
        return size;
    }

    /**
     * This function returns the values in a stack
     * @returns {T[]}
     */
    public values(): T[] {
        const tempArr: T[] = [];
        for (let i = this.top; i >= 0; i--) {
            tempArr.push(this.arr[i]);
        }
        return tempArr;
    }
}
