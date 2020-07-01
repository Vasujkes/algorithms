const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--)
    for (let j = arr.length - i; j > 0; j--)
      if (arr[j] < arr[j - 1]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
  return arr;
};

console.log(bubbleSort([7, 5, 13, 2, 4, 3, 9, 12]));
console.log(bubbleSort([9, 7, 5, 4, 3, 1]));
console.log(bubbleSort([1, 2, 33, 124, 3, 4, 6, 5]));
