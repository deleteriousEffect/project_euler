#
#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
#Find the sum of all the multiples of 3 or 5 below 1000.
#
#https://projecteuler.net/problem=1
#
#     |Range starting at one and ending before 1000
#     |         |Accumulator with an ititial value of 0
#     |         |            |Sets sum to accumulator's initial value (0)
#     |         |            |    |num is set to the current number in the range
#     |         |            |    |    |add num to sum
#     |         |            |    |    |          |but only if num is a multiple of 3 or 5
#     |         |            |    |    |          |                                 |return sum
#     v         v            v    v    v          v                                 v
puts (1...1000).inject(0) { |sum, num| sum += num if num % 3 == 0 or num % 5 == 0 ; sum}
