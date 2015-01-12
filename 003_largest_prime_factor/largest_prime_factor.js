//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?
//
//https://projecteuler.net/problem=3

function isPrime(num) {
    var i,
        m = Math.sqrt(num);
    if (num < 2) { return false;}
    
    for (i = 3; i < m; i += 2) {
       if (num % i === 0) {
           return false;
        }
    }
    return true;
}

function largestPrimeFactorOf(num) {
    var i,
        m = Math.sqrt(num),
        primeFactorArr = [];

    for (i = 3; i < m; i +=2) {
        if (isPrime(i) && num % i === 0) {
            primeFactorArr.push(i);
        }
    }
    return primeFactorArr.pop();
}

console.log(largestPrimeFactorOf(600851475143));
