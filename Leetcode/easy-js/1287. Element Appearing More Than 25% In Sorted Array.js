/**
 * @param {number[]} arr
 * @return {number}
 */

arr = [1,1,2,2,6,6,6,6,7,10];

var findSpecialInteger = function(arr) {
    let counter = 0;
    let acc = 0;
    
    if ( counter < (arr.length * .25)) {
    arr.reduce((acc, currentVal) => { 
        if ( acc == currentVal) {
             counter++ 
             acc = acc;
            } else { 
                counter = 0; 
            } 
        } )

    } else {
        acc;
    }
};

console.log(findSpecialInteger(arr))