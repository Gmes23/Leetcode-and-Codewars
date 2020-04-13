/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const numsRow = nums.length;
    const numsCol = nums[0].length;
    const output = [];
    
    let flatNums = null;
    
    // return original if new dimension doesn't match 
    if (r * c !== numsRow * numsCol) return nums;
    
    // deconstruct the original array and reconstruct new array
    flatNums = nums.reduce((acc, curr) => acc.concat(curr), []);
    
    for (let i = 0; i < r; i++) 
        output.push(flatNums.splice(0, c));
    
    return output;
};

console.log(matrixReshape( [[4,5],[5,6]], 1,4 ));