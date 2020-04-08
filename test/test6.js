/**
 * @param {number[]} arr
 * @return {number}
 */

arr = [1,1,2,2,6,6,6,6,7,10];

var findSpecialInteger = function(arr) {
    let hashMap = {};
    let max = 1;
    
    for(let i=0; i<arr.length; i++) {
        if(hashMap[arr[i]]) {
            hashMap[arr[i]]++;
        } else {
            hashMap[arr[i]] = 1;
        }
    }
    
    let maxChar = '';
    for (let char in hashMap) {
      if (hashMap[char] >= max) {
          max = Math.max(hashMap[char], max);
          maxChar = char;
      }
    }
    
    return maxChar;
}

console.log(findSpecialInteger(arr))