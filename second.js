function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Divide: find the middledle point
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Conquer: recursively sort both halves
  const sortedLt = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Combine: merge the sorted halves
  return merge(sortedLt, sortedRight);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from left and right arrays
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining elements from left array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add remaining elements from right array
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", array);
console.log("Sorted array:", mergeSort(array));