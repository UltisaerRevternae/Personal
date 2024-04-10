function transformTree(tree) {
  treeNode = (i) => {
    if (i >= tree.length || tree[i] === null) {
      return null
    }
    let node = {
      value : tree[i] ,
      left  : null ,
      right : null
    }
    node.left = treeNode( 2 * i + 1)
    node.right = treeNode( 2 * i + 2)

    return node
  }
  return treeNode(0)
}

let arr = [3, 1, 0, 8, 12, null, 1];
let root = transformTree(arr);
console.log(root);
