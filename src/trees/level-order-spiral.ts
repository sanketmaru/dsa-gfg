


import { Queue } from "../queue/queue";
import TreeNode from "./tree-node";
export class Spiral<T> {
    public printSpiral(node: TreeNode<T>) {
        const queue = new Queue<TreeNode<T>>();
        queue.add(node);
        while (!queue.isEmpty()) {
            const tempNode = queue.poll();
            if (!tempNode) {
                continue;
            }
            const size = queue.size();
            for (let i = 0; i < size; i++) {
                console.log(tempNode.data + " ");
                const left = tempNode.left;
                const right = tempNode.right;
                if (left != null) {
                    queue.add(left);
                }
                if (right != null) {
                    queue.add(right);
                }
            }
        }
    }
}
