/*
1189. Maximum Number of Balloons
Easy

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:

Input: text = "nlaebolko"
Output: 1
Example 2:

Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
 

Constraints:

1 <= text.length <= 10^4
text consists of lower case English letters only.
*/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = (S) => {
    return Math.floor(Math.min(
        [...S].filter(c => c === 'b').length,
        [...S].filter(c => c === 'a').length,
        [...S].filter(c => c === 'l').length / 2,
        [...S].filter(c => c === 'o').length / 2,
        [...S].filter(c => c === 'n').length,
    )) || 0;
  };

console.log(maxNumberOfBalloons('loonbalxballpoon'))