function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var other = function(TreeNode) {
    console.log(TreeNode.left, TreeNode.right)
}

TreeNode([1,2,3]);
other()