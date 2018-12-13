// 1-3 Write a method to replace all spaces in a string '%20'. You may assume
// that the string has sufficient space at the end to hold additional
// characters, and that you are given the true length of the string. (Note:
// if implementing in Java, please use a character array so that you can
// perform this operation in place.)

// To ensure that the difficulty of the problem approximates the Java version,
// a string array is required. Time to solve: 1 hour +.

// T: O(n)
// S: O(1)
function urlify(strArr, len) {
  let numOfSpaces = (strArr.length - len) / 2;
  let count = 0;
  for (let i = len - 1; i >= 0; i--) {
    let idx = i + numOfSpaces * 2;
    if (strArr[i] !== " ") {
      strArr[idx] = strArr[i];
    } else {
      numOfSpaces = numOfSpaces - 1;
      strArr[idx] = "0";
      strArr[idx - 1] = "2";
      strArr[idx - 2] = "%";
    }
  }

  return strArr;
}

module.exports = urlify;
