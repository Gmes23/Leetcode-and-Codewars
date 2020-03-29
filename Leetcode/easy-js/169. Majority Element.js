/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums.map(n => n * 2)
};

console.log(majorityElement([1,2,3]))