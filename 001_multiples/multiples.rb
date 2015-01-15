#
# If we list all the natural numbers below 10 that are multiples of 3 or 5,
# we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.
#
# https://projecteuler.net/problem=1

def multiples(numbers)
  numbers.inject(0) do |a, e|
    # sum the elements into the accumulator
    # if they are divisible by 3 or 5
    a += e if e % 3 == 0 || e % 5 == 0
    a
  end
end

puts multiples(1...1000)
