// package trees;

// import java.util.LinkedList;
// import java.util.Queue;

// Complete the function to print spiral order traversal of a tree. 

// Testcase1: The tree is
//         1
//      /      \
//    3       2
// So, the spiral level order would be 1 3 2
// Testcase2: The tree is
//                            10
//                         /        \
//                      20         30
//                   /       \
//                40       60
//                /         \
//             50   55    70  80 
// So, the spiral level order would be 10 20 30 60 40

// A Binary Tree node
// class Node
// {
//     int data;
//     Node left, right;
//     Node(int item)
//     {
//         data = item;
//         left = right = null;
//     }
// }

// class Spiral
// {
//     void printSpiral(Node node) {
//         Queue<Node> queue = new LinkedList<Node>(); 
//         queue.add(node);
//         boolean alternate = false;
//         while(!queue.isEmpty()) {
//             Node tempNode = queue.poll();
//             Node left = tempNode.left;
//             Node right = tempNode.right;
//             System.out.print(tempNode.data + " ");
            
//             if (alternate) {
//                 if(right != null) {
//                     queue.add(right);    
//                 }
//                 if(left != null) {
//                     queue.add(left);    
//                 }
//             } else {
//                 if(left != null) {
//                     queue.add(left);    
//                 }
//                 if(right != null) {
//                     queue.add(right);    
//                 }
//             }
//             alternate = !alternate;
//         }
//     }
// }
