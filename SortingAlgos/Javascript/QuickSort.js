/*
  Quick Sort is a divide and conquer algorithm.
  It creates two empty arrays to hold elements less than the pivot value and elements
  greater than the pivot value, and then recursively sort the sub arrays. 
  There are two basic operations in the algorithm, 
  swapping items in place and partitioning a section of the array.

  Time complexity of Quick Sort is O(nLogn). 
  - with a worst case of O(n2).
  The space complexity is O(nLogn). (Doesn’t require any extra storage)
*/

function quickSort(arr) {
    // Checks that we have an array greater than 2 
    if (arr.length === 1) { 
        return arr;
    }

    // our pivot(element) is the last element in the array
    var pivot = arr[arr.length - 1];
    // We then set two empty arrays
    var leftArr = [];
    var rightArr = [];

    // Starting from the pivot we compare is the current element in the array is less then 
    // our pivot and place it on a left array, if its equal to or greater we place it on the 
    // right array 
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    // As long as the left array and right array is greater than one element we keep 
    // running quicksort recusively
    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
        // our pivot can be the last element so we keep quick sorting until the left array length is zero
    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
        // our pivot could have move to the front so we have conditional to quick sort to the right array as well
    } else {
        return [pivot, ...quickSort(rightArr)];
    }
}

console.log(quickSort([344,200,400,600,100]));