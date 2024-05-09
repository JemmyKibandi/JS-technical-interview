function inorderSuccessor(root, targetNode) {
  if (targetNode.right != null) {
    let inorderSucc = leftMostNode(targetNode.right);
    console.log(inorderSucc.val); // answer
  }
  if (targetNode.right == null) {
    let rightMost = rightMostNode(root);
    if (rightMost == targetNode)
      console.log("No inorder successor! Right most node.\n");
    else findSuccessor(root, targetNode);
  }
}

function findSuccessor(root, targetNode) {
  if (root == null) return null;
  let temp;
  if (
    root == targetNode ||
    (temp = findSuccessor(root.left, targetNode)) != null ||
    (temp = findSuccessor(root.right, targetNode)) != null
  ) {
    if (temp != null) {
      if (root.left == temp) {
        console.log(root.val); // answer
        return;
      }
    }
    return root;
  }
  return null;
}

function leftMostNode(node) {
  while (node != null && node.left != null) node = node.left;
  return node;
}
function rightMostNode(node) {
  while (node != null && node.right != null) node = node.right;
  return node;
}

// Driver code
class BinaryTree {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

let tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.left.left.left = new BinaryTree(6);
tree.right = new BinaryTree(3);

let targetNode = tree.left.right; // node 5
console.log(inorderSuccessor(tree, targetNode));
