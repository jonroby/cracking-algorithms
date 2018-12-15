function resultValues(lst) {
  let n = lst._head;
  let values = [];
  while (n !== null) {
    values.push(n._val);
    n = n._next;
  }

  return values;
}

module.exports = resultValues;
