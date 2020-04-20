/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    
    const array = new Array(num_people).fill(0)
    let counter = 1, index = 0
    
    while (candies !== 0){
        if (candies - counter < 0) {
            array[index] += candies
            break
        }
        array[index] += counter
        candies = candies - counter
        counter++
        index++
        index === array.length && (index = 0)
    }
    return array
    
};

console.log(distributeCandies(2,4))