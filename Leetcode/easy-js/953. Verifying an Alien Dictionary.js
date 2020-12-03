

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */

 
words = ["hello","leetcode"];
order = "hlabcdefgijkmnopqrstuvwxyz"
var isAlienSorted = function(words, order) {
    for(let i=0; words.length > i;i++) {
        const a = words[i+1]
        const b = words[i]
        const maxLen = Math.max(a.length, b.length)
        for(let j=0;j<maxLen;j++) {
            const indexA = order.indexOf(a[j])
            const indexB = order.indexOf(b[j])
            if (indexA > indexB) {
                return console.log('true')
            } else if (indexA < indexB) {
                j=maxLen
            }
        }
    }
    return console.log('false')

};

isAlienSorted(words, order)