// 4-2 Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.

function createMinimalBST(arr, bst) {
  let mid = Math.floor(arr.length / 2);
  bst.insert(arr[mid]);

  if (arr.slice(0, mid).length > 0) {
    createMinimalBST(arr.slice(0, mid), bst);
  }

  if (arr.slice(mid).length > 0) {
    createMinimalBST(arr.slice(mid + 1), bst);
  }

  return bst;
}

module.exports = createMinimalBST;
