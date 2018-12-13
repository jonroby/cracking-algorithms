// 1-1 Implement an algorithm to determine if a string has all unique characters.
// What if you can't use additional data structures?

// T: O(n)
// S: O(n)
const isUnique = str => {
  const letters = {};
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    letters[letter] = true;
  }

  const keys = Object.keys(letters);
  for (let i = 0; i < keys[i]; i++) {
    if (keys[i] > 1) return false;
  }

  return true;
}
