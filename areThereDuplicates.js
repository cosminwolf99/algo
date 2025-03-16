// function areThereDuplicates(...args) {
//     args.sort();

//     let left = 0;
//     let right = 1;

//     while (right < args.length) {
//         if (args[left] === args[right]) {
//             return true
//         }
//         left++;
//         right++;
//     }

//     return false
// }


// function areThereDuplicates(...args) {
//     args.sort((a, b) => {
//       if (a < b) return -1;
//       if (a > b) return 1;
//       return 0;
//     });
   
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//       if (args[start] === args[next]) {
//         return true;
//       }
//       start++;
//       next++;
//     }
//     return false;
//   }

  // function areThereDuplicates() {
  //   console.log(new Set(arguments));
  //   console.log(arguments.length);
  //   return new Set(arguments).size !== arguments.length;
  // }

  // function areThereDuplicates(...args) {
  // const sortedArguments = args.sort();
  // let i = 0;

  // for (let j  = 1; j < sortedArguments.length; j++) {
  //     if (sortedArguments[i] === sortedArguments[j]) {
  //          return true
  //     } else {
  //       i++
  //     }
  // }

  // return false
  // }

function areThereDuplicates(...arr) {
  const collection = {};

  for (const element of arr) {
      collection[element] = ++collection[element] || 1
  }

  for (key in collection) {
      if (collection[key] > 1) return true
  }

  return false
}


console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 