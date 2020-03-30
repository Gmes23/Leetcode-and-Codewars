/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let larIndex = nums.indexOf(Math.max(...nums))
    let lar = Math.max(...nums)
    for(let i=0; i<nums.length; i++) {
        if(nums[i]*2 > lar && nums[i] != lar) {
            return -1
        }
    }
    return larIndex
};

console.log(dominantIndex([7]))

/*
Runtime: 44 ms, faster than 99.08% of JavaScript 
online submissions for Largest Number At Least Twice of Others.
Memory Usage: 33.8 MB, less than 66.67% of JavaScript online 
submissions for Largest Number At Least Twice of Others.
*/