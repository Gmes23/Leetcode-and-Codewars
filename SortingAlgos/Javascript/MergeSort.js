/*
Merge Sort is a sorting algorithm, which is commonly used in computer science. Merge Sort is a divide and conquer algorithm. It works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem. So Merge Sort first divides the array into equal halves and then combines them in a sorted manner.

*/

function mergeSort(arr) {
    // Check if the array can be split
    if (arr.length < 2) return arr;
    // Get middle index
    var middle = Math.floor(arr.length / 2);
    // Split array into two sides
    var leftSide = arr.slice(0, middle);
    var rightSide = arr.slice(middle, arr.length);
    // Use recursion to continue splitting
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {
    // Create a new array
    var result = [];
    // Check if left array and right array are empty
    while(left.length && right.length) {
        // Find lower value
        if(left[0] <= right[0]) {
            /*
              The shift() method removes the first element 
              from an array and returns that removed element. 
              This method changes the length of the array. 
              The push() method adds one or more elements to 
              the end of an array and returns the new length 
              of the array.
            */
           // Add left value 
            result.push(left.shift());
        } else {
            // Add right value
            result.push(right.shift());
        }
    }

    // Merge left array
    while(left.length) result.push(left.shift());
    // Merge right array
    while(right.length) result.push(right.shift());
    // Return the result array
    console.log(result, 'result')
    return result;
}

console.log(mergeSort([5,2,342,2,21,41]));