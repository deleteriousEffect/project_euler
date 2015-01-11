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

//returns Fibonacci sequence as an array
function fibsTo(limit) {
    var a = 0,
        b = 1,
        c,
        arr = [0];  

    while (arr[arr.length - 1] <= limit) {   //check if last element in arr is larger than limit
        arr.push(b);
        c = a + b;
        a = b;
        b = c;
        if (arr[arr.length - 1] > limit) {  //pop last element from array if it's larger than limit and break out of loop
            arr.pop();
            break;
        }
    }
    return arr;
}

function evens (arr) {
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

console.log(evens(fibsTo(100)));
