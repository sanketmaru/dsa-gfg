// Implement a Queue using Array. Your task is only to complete the functions push and pop.
class MyQueue {
    public front: number = 0;
    public rear: number = 0;
    public arr: number[] = [];

    constructor() {
        this.front = 0;
        this.rear = 0;
    }

    /* The method push to push element
	   into the queue */
    public push(a: number) {
        this.arr[this.front++] = a;
    }
    /* The method pop which return the 
       element poped out of the queue*/
    public pop() {
        // Your code
        if (this.front === this.rear) {
            return -1;
        }
        return this.arr[this.rear++];
// 	    if(arr.length <= 0) {
// 	        return -1;
// 	    }
// 		int element = arr[front];
// 		++front;
// 		int tempArr[] = new int[arr.length];
// 		for(int i=front,j=0;i<=arr.length - 1;i++,j++) {
// 		    tempArr[j] = arr[i];
// 		}
// 		arr = tempArr;
// 		rear = arr.length - 1;
// 		return element;
    }
}
