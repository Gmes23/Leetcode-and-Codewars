/*
    A bubble sort just goes threw an array 1 by 1 and checks if anything is out of order
    It is slow but doesnt require much space
    0(1) space , O(n^2) time
    check if a swap took place
*/

let unsortedArray = [2, 3, 2, 3, 42, 1, 2];
let swapped;

function bubbleSort(unsortedArray) {
    swapped = false;
    // We use unsortedArray - 1 because in our if conditional, if we didnt,
    // unsortedArray.length will give us an error on when comparing the very last element in the array
    let end = unsortedArray.length - 1;
    for (let i=0; i < end; i++) {
        if (unsortedArray[i] > unsortedArray[i+1]) {
            swapped = true;
            let temp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[i + 1];
            unsortedArray[i + 1] = temp;
        }
    }
    end --;
};

do {
    bubbleSort(unsortedArray);
} while (swapped);

console.log(unsortedArray);
