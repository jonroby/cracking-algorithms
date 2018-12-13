// https://en.wikipedia.org/wiki/Insertion_sort
// i ← 1
// while i < length(A)
//     j ← i
//     while j > 0 and A[j-1] > A[j]
//         swap A[j] and A[j-1]
//         j ← j - 1
//     end while
//     i ← i + 1
// end while

function insertionSort(arr) {
  let i = 1;
  while (i < arr.length) {
    let j = i;
    while (j > 0 && arr[j-1] > arr[j]) {
      let swap = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = swap;
      j = j - 1;
    }
    i = i + 1;
  }
  return arr;
}

module.exports = insertionSort;
