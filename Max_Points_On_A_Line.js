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
    // for( var j = 0; j < points.length; j++) {
    //     console.log(points[j])
    // }
    return points.reduce(function(accumulator, currentValue, currentIndex, array) {
        var map = {POSITIVE_INFINITY: 0}
        var samePoint = 1;

        for( var j = 0; j < points.length; j++) {
            console.log(points[j])
        }
    },0)
};

var maxPoints = function(points) {
    var calculateSlope = function(x1, y1, x2, y2) {
        var slope =  (y1 - y2) / (x2 - x1)
    }

    return slope;
}

maxPoints([[1,1],[2,2],[3,3]]);
// maxPoints([1,2,3]);