// 1-6 Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2b1c5a3. If the compressed string would not become smaller than the
// original string, your method should return the original string. You can
// assume the string has only uppercase and lowercase letters.

// The first possibility is to get a count of all letters and an order of
// letters and iterate through the letters and appending its count. To make
// it more interesting, I won't do this, even though the space complexity
// for the solution below is still the same.

// T: O(n)
// S: O(n)

function stringCompression(str) {
  let newStr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += 1;
    if (str[i] !== str[i + 1]) {
      newStr.push(str[i]);
      newStr.push(count);
      count = 0;
    }
  }

  if (str.length <= newStr.length) {
    return str;
  } else {
    return newStr.join("");
  }
}

// Lessons
// - Consider both checking ahead (str[i] and str[i+1]) as well as
//   checking behind (str[i] and str[i-1]). Especially if you find
//   one is leading to cumbersome code.

module.exports = stringCompression;
