const LinkedList = require("../linked-list");
const palindrome = require("../2-6-palindrome");
const listValues = require("../list-values");

describe("palindrome", () => {
  test("returns true for palindromes", () => {
    let l = new LinkedList();
    l.appendToTail("r");
    l.appendToTail("a");
    l.appendToTail("c");
    l.appendToTail("e");
    l.appendToTail("c");
    l.appendToTail("a");
    l.appendToTail("r");
    const result = palindrome(l);
    const expected = true;

    expect(result).toEqual(expected);
  });

  test("returns false for non-palindromes", () => {
    let l = new LinkedList();
    l.appendToTail("r");
    l.appendToTail("a");
    l.appendToTail("c");
    l.appendToTail("e");
    l.appendToTail("c");
    l.appendToTail("a");
    l.appendToTail("b");
    const result = palindrome(l);
    const expected = false;

    expect(result).toEqual(expected);
  });

  test("returns false for non-palindromes", () => {
    let l = new LinkedList();
    l.appendToTail("r");
    l.appendToTail("a");
    l.appendToTail("c");
    l.appendToTail("e");
    l.appendToTail("c");
    l.appendToTail("a");
    l.appendToTail("b");
    const result = palindrome(l);
    const expected = false;

    expect(result).toEqual(expected);
  });

  test("returns false for abca", () => {
    let l = new LinkedList();
    l.appendToTail("a");
    const result = palindrome(l);
    const expected = true;

    expect(result).toEqual(expected);
  });

  test("returns true for abba", () => {
    let l = new LinkedList();
    l.appendToTail("a");
    const result = palindrome(l);
    const expected = true;

    expect(result).toEqual(expected);
  });

  test("returns true for 0 letter words", () => {
    let l = new LinkedList();
    const result = palindrome(l);
    const expected = true;

    expect(result).toEqual(expected);
  });
});
