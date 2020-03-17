// 149. Max Points on a Line

// Given n points on a 2D plane,
// find the maximum number of points that lie on the same straight line.




/*
Example 1:

Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:

^
|
|        o
|     o
|  o  
+------------->
0  1  2  3  4
*/

/*
Example 2:

Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
Explanation:
^
|
|  o
|     o        o
|        o
|  o        o
+------------------->
0  1  2  3  4  5  6
*/

/**
 * @param {number[][]} points
 * @return {number}
 */

var maxPoints = function(points) {

    return points.reduce(function(accumulator, currentValue, currentIndex, array) {
        var chart = {POSITIVE_INFINITY: 0} // This is the chart, we inlcuce 0 beause x:0, y:0
        var samePoint = 1; // This is the initial point, x:1, y:1 


        for( var j = currentIndex + 1; j < points.length; j++) {
            var p2 = points[j];
            
            // array[0] becomes array x which is point x, same for array[1] and y
            if ( p2[0] === currentValue[0] && p2[1] === currentValue[1] ){
                console.log(samePoint++, 'samePoint ++')
            } else {
                var slope =  p2[0] === currentValue[0] ? Number.POSITIVE_INFINITY :  10000000*(p2[0] - currentValue[0]) / (p2[1] - currentValue[1])  
                console.log(slope,  'slope ')
                chart[slope] =  ( chart[slope] || 0 ) + 1;

                console.log(chart[slope], 'chart[slope]')
            }
            // console.log(points[j])
        }
        return console.log(   Math.max(accumulator, ...Object.keys(chart).map(k => chart[k] + samePoint))  );
    },0)
};

// var maxPoints = function(points) {
//     var calculateSlope = function(x1, y1, x2, y2) {
//         var slope =  (y1 - y2) / (x2 - x1)
//     }

//     return slope;
// }

// STILL NEED TO REVIEW 
// one of the responses returns NaN

maxPoints([[0,0], [0,0]]);
// maxPoints([1,2,3]);