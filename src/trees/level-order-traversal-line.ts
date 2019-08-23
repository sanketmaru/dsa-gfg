// package trees;

// import java.util.LinkedList;
// import java.util.Queue;

// Given a Binary Tree, your task is to print its level order traversal such that each level is separated by $.
// For the below tree the output will be 1 $ 2 3 $ 4 5 6 7 $ 8 $.

//           1
//        /     \
//      2        3
//    /    \     /   \
//   4     5   6    7
//     \
//      8


// class Node {
//     int data;
//     Node left, right;
//     Node(int item)
//     {
//         data = item;
//         left = right = null;
//     }
// }

// class Level_Order_Traverse_Line
// {
//     static void levelOrder(Node node) 
//     {
//         Queue<Node> queue = new LinkedList<Node>();
//         queue.add(node);
//         while(true) {
//             int size = queue.size();
//             if (size == 0) {
//                break; 
//             }
//             while(size > 0) {
//                 Node tempNode = queue.poll();
//                 System.out.print(tempNode.data + " ");
//                 Node left = tempNode.left;
//                 Node right = tempNode.right;
//                 if(left != null) {
//                     queue.add(left);
//                 }
//                 if(right != null) {
//                     queue.add(right);
//                 }
//                 size--;
//             }
//             System.out.print("$ ");
//         }
        
//     }
// }