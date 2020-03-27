/**
 * @param {string} 
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").reverse().join(' ').replace(/\s+/g, " ").trim()
};
console.log(reverseWords(" the sky   is blue"))

/*
This question is from leetcode, submitting your questions will yield statistic of 
your equation and compare it to others, here is this algo statistic

Reverse Words in a String.
Memory Usage: 35.3 MB, less than 27.27% 
of JavaScript online submissions for Reverse Words in a String.
*/