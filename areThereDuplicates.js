function areThereDuplicates(...arr) {
  const collection = {};

  for (const element of arr) {
    collection[element] = ++collection[element] || 1;
  }

  for (key in collection) {
    if (collection[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
