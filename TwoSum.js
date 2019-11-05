// 1. Two Sum
// Easy

// 12310

// 429

// Favorite

// Share
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// @param is a documentation format in this instance it indicates that nums will be an array of numbers
// @param target will be just a number and @return means the function should return a array that has numbers
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// so with nums will be an array of numbers , the function should take the target and then look threw the array for
// two numbers that added up equal the target number

// given a target number return the position of the two numbers in the nums array that equal the target var


// var twoSum = function (nums, target) {

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == target) {
//             return console.log(nums[i]);
//         } else {
//             return console.log("not found");
//         }
//     }

// };

// var twoSum = function (nums, target) {
//     var map = [];
//     var indexnum = [];

//     for (var i = 0; i < nums.length; i++) {
//         // != Returns true if the operands are not equal.
//         // The map() method creates a new array with the results of calling a function for every array element.
//         // The map() method calls the provided function once for each element in an array, in order.
//         // Note: map() does not execute the function for array elements without values.
//         // Note: this method does not change the original array.
//         // The value null represents the intentional absence of any object value. It is one of
//         if (map[nums[i]] != null) {
//             // if mapping threw the numbers in nums array return true
//             var index = map[nums[i]];
//             indexnum[0] = index;
//             indexnum[1] = x;
//             break;
//         }
//         else {
//             map[target - nums[i]] = i;
//         }
//     }
//     return indexnum;
// }

// twoSum([10, 20, 10, 40, 50, 60, 70], 50);

//calls the function in javascript

//Dynamic programming is both a mathematical optimization method and a computer programming method. The method was developed by Richard Bellman in the 1950s and has found applications in numerous fields, from aerospace engineering to economics. In both contexts it refers to simplifying a complicated problem by breaking it down into simpler sub-problems in a recursive manner. While some decision problems cannot be taken apart this way, decisions that span several points in time do often break apart recursively. Likewise, in computer science, if a problem can be solved optimally by breaking it into sub-problems and then recursively finding the optimal solutions to the sub-problems, then it is said to have optimal substructure.

var twoSum = function(nums, target) {
    //use dynamic programming, store the variables in an empty object
    var comp = [];
     
    for(let i=0; i<nums.length; i++){ 
        console.log(i)
        console.log("comp[nums[i]] ", comp[nums[i]] )
            if( comp[nums[i]] >= 0){
                console.log("numbers in object comp", comp);
                console.log("numbers in object comp", comp[nums[i]]);
                console.log(i)

                return console.log( [comp[ nums[i] ] , i] )
            }
        // for every nums[i] 
        comp[target-nums[i]] = i
        console.log(comp)
    }
};

// 9-4 : 0
// 9-5 : 1
// 9-6 : 2

twoSum([7,5,4], 9)
