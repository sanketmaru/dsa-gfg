// You are given a tree and you need to do the level order traversal on this tree.
// Level order traversal of a tree is breadth-first traversal for the tree.

// Testcase1: The tree is
//         1
//      /      \
//    3       2
// So, the level order would be 1 3 2
// Testcase2: The tree is
//                            10
//                         /        \
//                      20         30
//                   /       \
//                40       60
// So, the level order would be 10 20 30 40 60

import { Queue } from "../queue/queue";
import TreeNode from "./tree-node";

// tslint:disable-next-line: max-classes-per-file
export class LevelOrderTraversal {

    public levelOrder(node: TreeNode<number>) {
        // tslint:disable-next-line: no-bitwise
        // tslint:disable-next-line: no-unused-expression
        const queue = new Queue<TreeNode<number>>();
        queue.add(node);
        while (!queue.isEmpty()) {
            const tempNode: TreeNode<number> | undefined = queue.poll();
            if (tempNode) {
                const left = tempNode.left;
                const right = tempNode.right;
                // tslint:disable-next-line: no-console
                console.log(tempNode.data + " ");
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