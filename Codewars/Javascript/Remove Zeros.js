/*
4 kyu
Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

ALGORITHMSARRAYSSORTING
*/

function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc

    // the correctly sorted array should be returned.
   // set last zero position to array.length
  // count number of zeros in the array list
  // search from end of array to front
  // if array[i] is non-zero, do nothing
  // if array[i] is zero,  
  //	copy array[i] to temporary variable
  //	shift array[i+1] to array[last zero position - 1] to 1 position left
  //	assign temporary variable to the unoccupied slot
  //	update last zero position
  //	decrement number of zeros to move by 1
  //	if array[i] is not zero, repeat the process for the array[i-1]. 
  //	Repeat the process for array[i] again
  // terminates when i < 0 or number of zeros to move is 0
  
  let lastZeroPos = array.length;
  let zeroCount = 0;  
  for (let j = 0; j < array.length; j++) {
    if (array[j] === '0' || array[j] === 0) {
      zeroCount += 1;
    }
  }
  for (let i = array.length - 1; i >= 0 && zeroCount > 0; i--) {    
    if (array[i] === 0 || array[i] === '0') {
      const temp = array[i];  
      let hasSwap = false;  
      for (let j = i+1; j < lastZeroPos; j++) {
          hasSwap = true;
          array[j-1] = array[j];
      }
      array[lastZeroPos - 1] = temp;  
      lastZeroPos--;
      zeroCount--;
      
      // find the next zero
      if (hasSwap && (array[i] === 0 || array[i] === '0')) { i++; }
    }
  }
  return array;
}

removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])

/*
best answer
function removeZeros(array) {
    var end = array.length;
    for (var i = 0; i < end; i++) {
        if (array[i] === 0 || array[i] === "0") {
            arrayShiftToEnd(array, i);
            i--;
            end--;
        }
    }
    return array;
}

function arrayShiftToEnd(array, n) {
    var end = array[n]
    for(var i = n; i <  array.length; i++) {
        array[i] = array[i + 1]
    }
    array[array.length - 1] = end;

    return array
}

*/