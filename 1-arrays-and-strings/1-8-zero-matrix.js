// 1-8 Write an algorithm such that if an element in an MxN matrix is 0, its
// entire row and column are set to 0.

// There is at least one micro-optimization to this, which is to record only the
// columns and rows (since zeroes could duplicate this).

//

// T: O(mn)
// S: O(1)
function zeroMatrix(matrix) {
  let zeroes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        zeroes.push([i, j]);
      }
    }
  }

  for (let i = 0; i < zeroes.length; i++) {
    let v = zeroes[i][0];
    let h = zeroes[i][1];
    for (let j = 0; j < matrix.length; j++) {
      matrix[v][j] = 0;
      matrix[j][h] = 0;
    }
  }

  return matrix;
}

// Todo: Bit vector implementation.

// Lessons
// - Remember that traversing and mn matrix is only mn and not (mn)^2

module.exports = zeroMatrix;
