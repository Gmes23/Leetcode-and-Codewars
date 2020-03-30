/*

169. Majority Element
Easy

Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/


/**
 * @param {number[]} nums
 * @return {number}
 */

 // solve using hash
var majorityElement = function(nums) {
    const hash = {};

    for (let num of nums) {
        if(!hash[num]) {
            hash[num] = 1;

        } else {
            hash[num]++;

        }
    }

    let counter = 0;
    let keyName = 0;
    for (let key in hash) {
        if(hash[key] > counter ) {
            counter = hash[key];
            keyName = key;
        }
    }

    return keyName;

     
};


//  better answer
/*

The sort() method sorts the elements of an array in place and returns the sorted array.
The default sort order is ascending, built upon converting the elements into strings, 
then comparing their sequences of UTF-16 code units values.
The time and space complexity of the sort cannot be guaranteed as it depends on the implementation

To compare numbers instead of strings, the compare function can simply subtract b from a.

so we sort using a - b.
since the question specifically states that the majority element
will be greater the half the array [n/2], and that the array will always have a majority element
we know using math.floor(nums.length/2) will give us the midddle array
and that will be the element that shows the most.

*/

var majorityElement = function(nums) {
    // sort the array and the middle is the majority
    nums.sort((a,b) => a - b);
    return nums[Math.floor(nums.length/2)];
}; 

console.log(majorityElement([3,3,3,3,2,2,2,2,1]))