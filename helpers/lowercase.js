function lowercase(letter) {
  const asciiValue = letter.charCodeAt();

  // 'A' -> 65, 'Z' -> 90
  if (asciiValue >= 65 && asciiValue <= 90) {
    // 'a' -> 97
    return String.fromCharCode(asciiValue + 32); 
  } else {
    return letter;
  }
}

module.exports = lowercase;
