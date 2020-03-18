const arrObjs = [ 
    { name: 'harry' , eating: 'bagel'},
    { name: 'test' , eating: 'man'},
];
console.log(arrObjs)
let transformObjs = arrObjs.reduce((acc, value) => {
    acc[value.name] = value;
    return acc;
}, {})

console.log(transformObjs)