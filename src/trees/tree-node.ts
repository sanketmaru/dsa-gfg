export default class TreeNode<T> {
    public data: T;
    public left: TreeNode<T> | null;
    public right: TreeNode<T> | null;
    constructor(item: T) {
        this.data = item;
        this.left = this.right = null;
    }

}
