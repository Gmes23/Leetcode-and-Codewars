// Count the number of prime numbers less than a non-negative number, n.

/*
Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

/**
 * @param {number} n
 * @return {number}
 */


var countPrimes = function (n) {
    var isPrime = [],
        result = 0;
    for (var i = 2; i < n; i++) {
        if (isPrime[i] == undefined) {
            isPrime[i] = 1;
            result++;
        }
        for (var j = 2; j * i < n; j++) {
            isPrime[i * j] = 0;
        }
    }
    return result;
};

countPrimes(10);

