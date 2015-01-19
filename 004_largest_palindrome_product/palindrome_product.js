//A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
//Find the largest palindrome made from the product of two 3-digit numbers.
//
//https://projecteuler.net/problem=4

//test to see if a number is a palindrome
'use strict';

function isPalindrome(num) {
    var i,
        numString = num.toString(),         //number to string
        numStringLen = numString.length,    //length of the string
        halfNumString = numStringLen / 2,   //haft length of the string
        firstHalf = '',                     //empty strings to hold first 
        secondHalfReverse = '';             //and reversed second halfs of the string

    //"push" first half of string into firstHalf
    //ignoring character in the middle if there is one
    for (i = 0; i < halfNumString; i += 1) {
        firstHalf += numString[i];
    }
    //same process here, only reversed
    for (i = numStringLen - 1; i >= halfNumString; i -= 1) {
        secondHalfReverse += numString[i];
    }
    // if the halves are the same, it's a palindrome
    if (firstHalf === secondHalfReverse) {
        return true;
    }
    return false;
}

//finds the largest prime number that is a product of
//any two numbers and all numbers below them
function largestPalindromeProduct(num1, num2) {
    var i,
        j,
        product,
        largestPalindrome = 0;

    //find the all products of num1 and num2 and all non negative numbers below them
    for (i = num1; i > 0; i -= 1) {
        for (j = num2; j > 0; j -= 1) {
            product = i * j;
            //if the product is a palindrome and larger
            //than the current value of largestPalindrome it is assigned to largestPalindrome
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }
    return largestPalindrome;
}

console.log(largestPalindromeProduct(999, 999));
console.log(isPalindrome(906609));
