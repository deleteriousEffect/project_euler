# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?
#
# https://projecteuler.net/problem=3

# Return true if a number is prime.
isPrime = (num) ->
    m = Math.sqrt(num)

    false if num < 2
    return false for i in [3..m] by 2 when num % i == 0
    true

# Find the largest prime factor of a given number.
largestPrimeFactorOf = (num) ->
    m = Math.sqrt(num)

    largestPrime = i for i in [3..m] by 2 when isPrime(i) and num % i == 0
    largestPrime

console.log(largestPrimeFactorOf(600851475143))
