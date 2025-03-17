function maxSubArraySum(arr, num) {
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

   return maxSum
}


// input: [2,6,9,2,1,8,5,6,3], 3
console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))