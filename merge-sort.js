// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  const halfInd = Math.ceil(arr.length / 2);

  // Recursively sort the left half
  const leftHalf = mergeSort(arr.slice(0, halfInd));

  // Recursively sort the right half
  const rightHalf = mergeSort(arr.slice(halfInd));

  // Merge the halves together and return
  return merge(leftHalf, rightHalf);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const mergedArr = [];

  // Point to the first value of each array
  let ind1 = 0
  let ind2 = 0;

  // While there are still values in each array...
  while (ind1 < arrA.length || ind2 < arrB.length) {
    // Compare the first values of each array
    if (arrA[ind1] < arrB[ind2] || arrB[ind2] === undefined) {
    // Add the smaller value to the return array
      mergedArr.push(arrA[ind1]);

    // Move the pointer to the next value in that array
      ind1++;
    } else {
      mergedArr.push(arrB[ind2]);
      ind2++;
    }
  }

  // Return the return array
  return mergedArr;
}

module.exports = [merge, mergeSort];
