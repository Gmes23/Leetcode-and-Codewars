/*
1281. Subtract the Product and Sum of Digits of an Integer
Easy

Given an integer number n, return the difference between
 the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21

*/



/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {

    //  First we make n(an interger) to an array by simply adding brackets to
    // it like so [n], this way we can use join which will turn everything into
    // a string , since everything is a string in an array we can use Array.from
    //  shallow-copied Array instance from an array-like or iterable object. If its
    //  a string it will output every character in the string indivually, we then map
    // threw it using Number will conver everything to an Integer

    arrNums = Array.from([n].join('')).map(Number);

    multiply = arrNums.reduce( (a,b) => a * b);

    addition = arrNums.reduce( (a,b) => a + b);

    return multiply - addition;
};

console.log(subtractProductAndSum(693))

/*
This question is from leetcode, submitting your questions will yield statistic of 
your equation and compare it to others, here is this algo statistic

Runtime: 48 ms, faster than 93.50% of JavaScript online submissions
for Subtract the Product and Sum of Digits of an Integer.
Memory Usage: 34 MB, less than 100.00% of JavaScript online 
submissions for Subtract the Product and Sum of Digits of an Integer.
*/