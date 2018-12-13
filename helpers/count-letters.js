function countLetters(str) {
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    letters[letter] = letters[letter] ? letters[letter] + 1 : 1;
  }
  return letters;
}

module.exports = countLetters;
