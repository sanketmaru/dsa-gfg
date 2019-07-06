package trees;

import java.util.LinkedList;
import java.util.Queue;

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


class Node
{
    int data;
    Node left, right;
    Node(int item)
    {
        data = item;
        left = right = null;
    }
}

class Level_order_traversal
{
    static void levelOrder(Node node) 
    {
        Queue<Node> queue = new LinkedList<Node>(); 
        queue.add(node);
        while(!queue.isEmpty()) {
            Node tempNode = queue.poll();
            Node left = tempNode.left;
            Node right = tempNode.right;
            System.out.print(tempNode.data + " ");
            if(left != null) {
                queue.add(left);    
            }
            if(right != null) {
                queue.add(right);    
            }
        }
    }
}