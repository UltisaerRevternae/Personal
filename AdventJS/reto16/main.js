function transformTree(tree) {
  function buildTree(index) {
    if (index >= tree.length || tree[index] === null) {
      return null;
    }

    let node = {
      value: tree[index],
      left: null,
      right: null,
    };

    node.left = buildTree(2 * index + 1);
    node.right = buildTree(2 * index + 2);

    return node;
  }

  return buildTree(0);
}

let arr = [3, 1, 0, 8, 12, null, 1];
let root = transformTree(arr);
console.log(root);
