# If we list all the natural numbers below 10 that are multiples of 3 or 5, 
# we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.
# 
# https://projecteuler.net/problem=1

# Returns array of numbers below the limit that are
# multiples of 3 and 5.
multipesOf3and5 = (limit = 10) ->
    arr = [1...limit]
    multipesArr = []
    for number in arr
        if number % 3 == 0 or number % 5 == 0
            multipesArr.push(number)
    multipesArr

# Adds all elements in the multipesOf3and5 array together.
multipesOf3and5sum = multipesOf3and5(1000).reduce (a, b) ->
    a + b

console.log(multipesOf3and5sum)
