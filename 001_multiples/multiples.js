/* https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples
 * of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * 
 * Find the sum of all the multiples of 3 or 5 below 1000. */

//accepts array of multiples and optional endPoint, default is 1000

function multipleOf(multiples, endPoint) {
    'use strict';
    var i,
        limit = endPoint || 1000, //defaults to 1000, if user doesn't specify
        sortedMultiples = multiples.sort(), // sorted array should return sooner
        arr = [];
        // callback for .some method
    function isMultiple(e) {
        if (i % e === 0) {
            return true;
        }
    }
    for (i = 1; i < limit; i += 1) {
        //pushes i to arr if i is a multiple of any member of the array
        if (sortedMultiples.some(isMultiple)) {
            arr.push(i);
        }
    }
    return arr;
}
        //sums values of array returned by multipleOf function
var answer = multipleOf([3, 5]).reduce(function (a, b) {
    'use strict';
    return a + b;
});

console.log(answer);

