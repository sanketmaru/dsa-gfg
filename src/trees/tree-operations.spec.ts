import TreeNode from "./tree-node";
import { TreeOperations } from "./tree-operations";

let treeOps: TreeOperations<number>;

beforeEach( () => {
    treeOps = new TreeOperations<number>();
});

test("basic test for level order traversal", () => {
  const tree = new TreeNode<number>(1);
  tree.left = new TreeNode<number>(3);
  tree.right = new TreeNode<number>(2);
  let outputData = "";
  const storeLog = (inputs: any) => (outputData += inputs);
  console.log = jest.fn(storeLog);
  treeOps.levelOrder(tree);
  expect(outputData).toBe("1 3 2 ");
});

test("level order traversal for more elements", () => {
    const tree = new TreeNode<number>(10);
    tree.left = new TreeNode<number>(20);
    tree.right = new TreeNode<number>(30);
    tree.left.left = new TreeNode<number>(40);
    tree.left.right = new TreeNode<number>(60);
    let outputData = "";
    const storeLog = (inputs: any) => (outputData += inputs);
    console.log = jest.fn(storeLog);
    treeOps.levelOrder(tree);
    expect(outputData).toBe("10 20 30 40 60 ");
});

test("basic test for level order traversal", () => {
    const tree = new TreeNode<number>(1);
    tree.left = new TreeNode<number>(3);
    tree.right = new TreeNode<number>(2);
    let outputData = "";
    const storeLog = (inputs: any) => (outputData += inputs);
    console.log = jest.fn(storeLog);
    treeOps.levelOrderByLine(tree);
    expect(outputData).toBe("1 $ 3 2 $ ");
});

test("level order traversal for more elements", () => {
    const tree = new TreeNode<number>(10);
    tree.left = new TreeNode<number>(20);
    tree.right = new TreeNode<number>(30);
    tree.left.left = new TreeNode<number>(40);
    tree.left.right = new TreeNode<number>(60);
    let outputData = "";
    const storeLog = (inputs: any) => (outputData += inputs);
    console.log = jest.fn(storeLog);
    treeOps.levelOrderByLine(tree);
    expect(outputData).toBe("10 $ 20 30 $ 40 60 $ ");
});

test("height of binary tree should be 3", () => {
    const tree = new TreeNode<number>(10);
    tree.left = new TreeNode<number>(20);
    tree.right = new TreeNode<number>(30);
    tree.left.left = new TreeNode<number>(40);
    tree.left.right = new TreeNode<number>(60);
    let outputData = "";
    const storeLog = (inputs: any) => (outputData += inputs);
    console.log = jest.fn(storeLog);
    treeOps.levelOrderByLine(tree);
    expect(outputData).toBe("10 20 30 60 40 ");
});

test("print spiral form of binary tree", () => {
    const tree = new TreeNode<number>(10);
    tree.left = new TreeNode<number>(20);
    tree.right = new TreeNode<number>(30);

    const leftNode = new TreeNode<number>(40);
    leftNode.left = new TreeNode<number>(50);
    leftNode.right = new TreeNode<number>(55);
    tree.left.left = leftNode;

    const rightNode = new TreeNode<number>(60);
    rightNode.left = new TreeNode<number>(70);
    rightNode.right = new TreeNode<number>(80);
    tree.left.right = rightNode;

    let outputData = "";
    const storeLog = (inputs: any) => (outputData += inputs);
    console.log = jest.fn(storeLog);
    treeOps.spiral(tree);
    expect(outputData).toBe("10 20 30 60 40 50 55 70 80");
});

test("print spiral form of binary tree", () => {
    const tree = new TreeNode<number>(10);
    tree.left = new TreeNode<number>(20);
    tree.right = new TreeNode<number>(30);
    tree.left.left = new TreeNode<number>(40);
    tree.left.right = new TreeNode<number>(60);
    let outputData = "";
    const storeLog = (inputs: any) => (outputData += inputs);
    console.log = jest.fn(storeLog);
    treeOps.spiral(tree);
    expect(outputData).toBe("10 20 30 60 40 ");
});
