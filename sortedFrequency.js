function sortedFrequency(arr, num){
  const collection = {};

  for (const element of arr) {
    collection[element] = ++collection[element] || 1
  }
  
  for (key in collection) {
    if (Number(key) === num) return collection[key]
  }
  return -1
}



/*
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
*/

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1 
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1