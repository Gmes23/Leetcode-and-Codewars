/*
1408. String Matching in an Array
Easy

Add to List

Given an array of string words. Return all strings in words which is substring of another word in any order. 
String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

Example 1:

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.
Example 2:

Input: words = ["leetcode","et","code"]
Output: ["et","code"]
Explanation: "et", "code" are substring of "leetcode".
Example 3:

Input: words = ["blue","green","bu"]
Output: []
*/



/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.filter((x, i) => {
        for (let j = 0; j < words.length; j++) {
            if (j === i) {
                continue;
            }
            if (words[j].includes(x)) {
                return true;
            }
        }
        return false;
    })
};

console.log(stringMatching(["mass","as","hero","superhero"]))

/*
Runtime: 72 ms, faster than 50.00% of JavaScript online submissions for String Matching in an Array.
Memory Usage: 34.2 MB, less than 100.00% of JavaScript online submissions for String Matching in an Array.
Next challenges:
*/