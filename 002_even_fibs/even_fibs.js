//Each new term in the Fibonacci sequence is generated 
//by adding the previous two terms. By starting with 1 and 2, 
//the first 10 terms will be:
//
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
//By considering the terms in the Fibonacci sequence whose values 
//do not exceed four million, find the sum of the even-valued terms.
//
//https://projecteuler.net/problem=2

'use strict';
//returns Fibonacci sequence as an array
function fibsTo(limit) {
    var a = 0, // a and b are the first to number of the Fibonacci sequence
        b = 1,
        c,
        arr = [0];

    while (arr[arr.length - 1] <= limit) {   //check if last element in arr is larger than limit
        arr.push(b);
        c = a + b; // c is the sum of the last two number of the sequence
        a = b;     // a is now the second to last number of the sequence
        b = c;     // b is now the last member of the sequence
        if (arr[arr.length - 1] > limit) {  //pop last element from array if it's larger than limit and break out of loop
            arr.pop();
            break;
        }
    }
    return arr;
}

// takes and array and returns an array of the even elements in that array
function evens(arr) {
    var i,
        limit = arr.length,
        evenArr = [];

    for (i = 0; i <= limit; i += 1) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}

var evenFibs = evens(fibsTo(4000000));

// sums all the elements in the evenFibs array
console.log(evenFibs.reduce(function (a, b) {
    return a + b;
}));
