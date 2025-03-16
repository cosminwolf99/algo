function maxSubArraySum(arr, num) {
<<<<<<< HEAD
   let maxSum = 0;
   let tempSum = 0;

   for (let i = 0; i < num; i++) {
       maxSum += arr[i]
   }

   tempSum = maxSum;

   for (let j = num; j < arr.length; j++) {
         tempSum = tempSum - arr[j - num] + arr[j];
         maxSum = Math.max(maxSum, tempSum)
   }
=======
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
>>>>>>> 258d798 (add more recursive solutions)

  return maxSum;
}

// input: [2,6,9,2,1,8,5,6,3], 3
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
