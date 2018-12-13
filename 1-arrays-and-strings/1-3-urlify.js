// 1-3 Write a method to replace all spaces in a string '%20'. You may assume
// that the string has sufficient space at the end to hold additional
// characters, and that you are given the true length of the string. (Note:
// if implementing in Java, please use a character array so that you can
// perform this operation in place.)

// To ensure that the difficulty of the problem approximates the Java version,
// a string array is required. Notice that the num of spaces can be obtained by
// subtracting the string length by the second argument and dividing by 2.

// For example [a 0 b c 0 d 0 0 0 0], where 0s represent spaces. There are two
// spaces that occur before the padding of zeroes begins after index 5.
// This makes sense because for every space character, the algo requires a
// replacement of three characters : '%', '2', '0'. (However, it will be more
// useful to not divide by 2.)

// d will need to be written to the last idx. So the loop should begin with
// len - 1 and move backward.

// i = 5 (len - 1)
// idx to write to: 9, which is equal to i + numOfSpaces (4).
//  0 1 2 3 4 5 6 7 8 9
// [a 0 b c 0 d 0 0 0 0] =>
// [a 0 b c 0 d 0 0 0 d]

// i = 4
// idx to write to: 6-8, which is equal to i + numOfSpaces (4).
// Afterward, numOfSpaces needs to be decremented by 2.
//  0 1 2 3 4 5 6 7 8 9
// [a 0 b c 0 d 0 0 0 0] =>
// [a 0 b c 0 d % 2 0 d]

// i = 3
// idx to write to: 5, which is equal to i + numOfSpaces (2).
//  0 1 2 3 4 5 6 7 8 9
// [a 0 b c 0 d % 2 0 d] =>
// [a 0 b c 0 c % 2 0 d]

// And so on.

// T: O(n)
// S: O(1)
function urlify(strArr, len) {
  let numOfSpaces = strArr.length - len;
  let count = 0;
  for (let i = len - 1; i >= 0; i--) {
    let idx = i + numOfSpaces;
    if (strArr[i] !== " ") {
      strArr[idx] = strArr[i];
    } else {
      numOfSpaces = numOfSpaces - 2;
      strArr[idx] = "0";
      strArr[idx - 1] = "2";
      strArr[idx - 2] = "%";
    }
  }

  return strArr;
}

module.exports = urlify;
