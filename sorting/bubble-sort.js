function bubbleSort(arr) {
  let noSwap = false;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = true;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

console.log(bubbleSort([14, 13, 27, 35, 10, 56, 101]));
