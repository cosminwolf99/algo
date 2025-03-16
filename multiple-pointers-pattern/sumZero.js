function sumZero(arr) {
 let left = 0;
 let right = arr.length - 1;

 while (left < right) {
     if (arr[left] + arr[right] === 0) {
       return [arr[left], arr[right]];
     } else if (arr[left] + arr[right] > 0) {
        right--;
     } else {
        left++;
     }
 }
}

console.log(sumZero([-2,-3,-5,5,1,2,3,4]));