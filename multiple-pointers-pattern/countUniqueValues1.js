function countUniqueValues(arr){
  let counterObject = {};


  for (const element of arr) {
     if(!counterObject[element]) {
        counterObject[element] = 1;
     } else {
        counterObject[element]++;
     }
  }

 return Object.keys(counterObject).length;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));