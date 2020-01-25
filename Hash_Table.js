
// Hash table in javascript, example of an associative array in JS

var h = new Object(); // or just {}
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

// show the values stored
for (var k in h) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (h.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + h[k]);
    }
}