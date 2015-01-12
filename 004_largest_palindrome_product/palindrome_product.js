//A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
//Find the largest palindrome made from the product of two 3-digit numbers.
//
//https://projecteuler.net/problem=4

//test to see if a number is a palindrome
function isPalindrome (num) {
    var i,
        numString = num.toString(),         //number to string
        numStringLen = numString.length,    //length of the string
        halfNumString = numStringLen / 2,   //haft length of the string
        firstHalf = '',                     //empty strings to hold first 
        secondHalfReverse = '';             //and reversed second halfs of the string

    for (i = 0; i < halfNumString; i += 1) { //"push" first half of string into firstHalf
        firstHalf += numString[i];           //ignoring character in the middle if there is one
    }
                                             //same process here, only reversed
    for (i = numStringLen -1; i >= halfNumString; i -= 1) {
        secondHalfReverse += numString[i];
    }
    if (firstHalf === secondHalfReverse) {
        return true;
    }
    return false;
}

function largestPalindromeProduct(num1, num2) {
    var i,
        j,
        product,
        largestPalindrome = 0;

    for (i = num1; i > 0; i -= 1) {
        for (j = num2; j > 0; j -= 1) {
            product = i * j;
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }
    return largestPalindrome;
}

console.log(largestPalindromeProduct(999, 999));
console.log(isPalindrome(906609));