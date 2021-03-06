// 179. Largest Number
// Medium

// 1554

// 187

// Add to List

// Share
// Given a list of non negative integers, 
// arrange them such that they form the largest number.

// Example 1:

// Input: [10,2]
// Output: "210"
// Example 2:

// Input: [3,30,34,5,9]
// Output: "9534330"
// Note: The result may be very large, 
// so you need to return a string instead of an integer.

 /**
 * @param {number[]} nums
 * @return {string}
 */


var largestNumber = function(nums) {
    let digits = Array.from(nums.join('')).map(Number)
    let largestNumber = digits.sort().reverse().join('')
    return largestNumber;
};

//  best answer
/**
 * @param {number[]} nums
 * @return {string}
 */
const compareNum = function(a, b) {
    const strA = a.toString();
    const strB = b.toString();

    return strB.concat(strA) - strA.concat(strB);
}

var largestNumber = function(nums) {
    if (nums.every(e => e === 0))
        return "0";
    
    return nums.sort(compareNum).join('');
};

// Explanation
/*
Approach #1 Sorting via Custom Comparator [Accepted]
Intuition

To construct the largest number, we want to ensure that the most significant digits are occupied by the largest digits.

Algorithm

First, we convert each integer to a string. 
Then, we sort the array of strings.

While it might be tempting to simply sort the numbers in descending order,
 this causes problems for sets of numbers with the same leading digit.
  For example, sorting the problem example in descending order would produce 
  the number 95343039534303, while the correct answer can be achieved by 
  transposing the 33 and the 3030. Therefore, for each pairwise comparison 
  during the sort, we compare the numbers achieved by concatenating the pair 
  in both orders. We can prove that this sorts into the proper order as 
  follows:

Assume that (without loss of generality), 
for some pair of integers aa and bb, our comparator dictates that aa should 
precede bb in sorted order. This means that a\frown b > b\frown aa⌢b>b⌢a
 (where \frown⌢ represents concatenation). For the sort to produce an 
 incorrect ordering, there must be some cc for which bb precedes cc and 
 cc precedes aa. This is a contradiction because a\frown b > b\frown aa⌢b>b⌢a 
 and b\frown c > c\frown bb⌢c>c⌢b implies a\frown c > c\frown aa⌢c>c⌢a. 
 In other words, our custom comparator preserves transitivity, 
 so the sort is correct.

Once the array is sorted, the most "signficant" number will be at the front.
 There is a minor edge case that comes up when the array consists of only
  zeroes, so if the most significant number is 00, we can simply return 00.
   Otherwise, we build a string out of the sorted array and return it.

*/