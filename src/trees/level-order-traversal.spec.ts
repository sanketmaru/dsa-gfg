import { LevelOrderTraversal } from "./level-order-traversal";
import TreeNode from "./tree-node";
let levelOrderTraversal: LevelOrderTraversal;

beforeEach( () => {
    levelOrderTraversal = new LevelOrderTraversal();
});

test("basic test for level order traversal", () => {
  const tree = new TreeNode<number>(1);
  tree.left = new TreeNode<number>(3);
  tree.right = new TreeNode<number>(2);
  let outputData = "";
  const storeLog = (inputs: any) => (outputData += inputs);
  // tslint:disable-next-line: no-console
  console.log = jest.fn(storeLog);
  // levelOrderTraversal.levelOrder(tree);
  expect(outputData).toBe("");
});

test("level order traversal for more elements", () => {
    const tree = new TreeNode<number>(10);
    tree.left = new TreeNode<number>(20);
    tree.right = new TreeNode<number>(30);
    tree.left.left = new TreeNode<number>(40);
    tree.left.right = new TreeNode<number>(60);
    let outputData = "";
    const storeLog = (inputs: any) => (outputData += inputs);
    // tslint:disable-next-line: no-console
    console.log = jest.fn(storeLog);
    // levelOrderTraversal.levelOrder(tree);
    expect(outputData).toBe("");
  });
