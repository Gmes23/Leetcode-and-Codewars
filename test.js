var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]
console.log(tahoe.join(', '))

// Doing this does not alter the array
var peaks = ["Tallac", "Ralston", "Rose"] 
var [last] = [...peaks].reverse()
console.log(last) // Rose
console.log(peaks.join(', ')) // Tallac, Ralston, Rose