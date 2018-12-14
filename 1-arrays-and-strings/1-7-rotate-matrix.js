// 1-7 Given an image represented by NxN matrix, where each pixel is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?

// Book solution.

// 1   2   3   4
// 5   6   7   8
// 9   10  11  12
// 13  14  15  16

// 13  9   5   1
// 14  6   7   2
// 15  10  11  3
// 16  12  8   4

// T: O(n)
// S: O(1)
function rotateMatrix(matrix) {
  let n = matrix.length;
  for (let layer = 0; layer < n; layer++) {
    let first = layer;
    let last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;
      let swap = matrix[first][i];
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = swap;
    }
  }

  // Original try (with i swapped out with j)
  // for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
  //   for (let j = 0; j < matrix.length - 1 - i; j++) {
  //     let first = i;
  //     let last = matrix.length - 1 - i;
  //     let offset = i - first;
  //     let swap = matrix[first][j];
  //   }
  // }

  return matrix;
}

module.exports = rotateMatrix;
