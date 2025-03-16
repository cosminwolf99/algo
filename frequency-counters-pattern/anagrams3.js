function anagrams(arr) {
 const collection = {};
 const words = arr.split(" ");

 for (const word of words) {
    const sortedWord = word.split("").sort().join("");

    if (collection[sortedWord] === undefined) {
        collection[sortedWord] = [word];
    } else {
       collection[sortedWord].push(word);
    }
 }

  for (const prop in collection) {
      if (collection[prop].length <= 1) delete collection[prop]
  }

  return collection;
}
   
console.log(anagrams("cosmin merge la sala nimsoc alas turceasca card drac"))

/*
output:
{
  cimnos: [ 'cosmin', 'nimsoc' ],
  aals: [ 'sala', 'alas' ],
  acdr: [ 'card', 'drac' ]
}

*/