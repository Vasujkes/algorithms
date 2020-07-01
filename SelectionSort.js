const SelectionSort = (arr) => {
  let minIndex;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;
    for (let y = i + 1; y < arr.length; y++) {
      if (arr[y] < arr[minIndex]) {
        minIndex = y;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};
console.log(SelectionSort([7, 5, 13, 2, 4, 3, 9, 12]));
console.log(SelectionSort([9, 7, 5, 4, 3, 1]));
console.log(SelectionSort([1, 2, 33, 124, 3, 4, 6, 5]));
