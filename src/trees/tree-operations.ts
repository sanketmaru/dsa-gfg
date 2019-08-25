import { Queue } from "../queue/queue";
import TreeNode from "./tree-node";
/**
 * This is implementation of operations on a Tree
 */
export class TreeOperations<T> {

    /**
     * You are given a tree and you need to do the level order traversal on this tree.
     * Level order traversal of a tree is breadth-first traversal for the tree.
     * Testcase1: The tree is
     *         1
     *      /      \
     *    3       2
     * So, the level order would be 1 3 2
     * Testcase2: The tree is
     *                           10
     *                        /        \
     *                     20         30
     *                  /       \
     *               40       60
     * So, the level order would be 10 20 30 40 60
     * @param node
     */
    public levelOrder(node: TreeNode<T>): void {
        const queue = new Queue<TreeNode<T>>();
        queue.add(node);
        while (!queue.isEmpty()) {
            const tempNode: TreeNode<T> | undefined = queue.poll();
            if (tempNode) {
                const left = tempNode.left;
                const right = tempNode.right;
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
    /**
     * Given a Binary Tree, your task is to print its level order traversal such that each level is separated by $.
     * For the below tree the output will be 1 $ 2 3 $ 4 5 6 7 $ 8 $.
     *           1
     *        /     \
     *      2        3
     *    /    \     /   \
     *   4     5   6    7
     *     \
     *      8
     * @param node
     */
    public levelOrderByLine(node: TreeNode<T>): void {
        const queue = new Queue<TreeNode<T>>();
        queue.add(node);
        while (true) {
            let size = queue.size();
            if (size === 0) {
               break;
            }
            while (size > 0) {
                const tempNode = queue.poll();
                if (!tempNode) {
                    continue;
                }
                console.log(tempNode.data + " ");
                const left = tempNode.left;
                const right = tempNode.right;
                if (left != null) {
                    queue.add(left);
                }
                if (right != null) {
                    queue.add(right);
                }
                size--;
            }
            console.log("$ ");
        }
    }

    /**
     * Complete the function to print spiral order traversal of a tree.
     * Testcase1: The tree is
     *         1
     *      /      \
     *    3       2
     * So, the spiral level order would be 1 3 2
     * Testcase2: The tree is
     *                            10
     *                         /        \
     *                      20         30
     *                   /       \
     *                40       60
     *                /         \
     *             50   55    70  80
     * So, the spiral level order would be 10 20 30 60 40
     */
    public spiral(node: TreeNode<T>): void {

    }

    public height(node: TreeNode<T>): number {
        return 0;
    }
}
