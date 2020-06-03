/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    maxpoints = nums.reduce((a,b) => a + b , 0 )
    var max = Math.max(...nums);
    return max;
};

console.log(deleteAndEarn([2,3,4]))