function findAllDuplicates(arr) {
  const collection = {};
  const duplicates = [];

  for (const element of arr) {
    collection[element] = ++collection[element] || 1;
  }

  for (const key in collection) {
    if (collection[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
