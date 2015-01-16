# Each new term in the Fibonacci sequence is generated by adding the
# previous two terms. By starting with 1 and 2, the first 10 terms will be:
#
# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
#
# By considering the terms in the Fibonacci sequence whose values do not exceed
# four million, find the sum of the even-valued terms.
#
# https://projecteuler.net/problem=2

# generates fibonacci-like arrays whose members do not exceed a limit
# user may define first two numbers, standard fibonacci sequence is the default
def sequence_to(limit, a = 0, b = 1)
  # initialize array to hold sequence
  sequence = [a, b]
  loop do
    # push the sum of the last two elements of the aray onto the array
    sequence.push(sequence.last(2).inject(:+))
    # if the sequence has exceeded the limit break from the loop
    # and pop the last element
    break if sequence.last > limit && sequence.pop
  end
  # return sequence
  sequence
end

def sum_of_even_elements(array)
  array.inject(0) do |a, e|
    a += e if e.even?
    a
  end
end

# solution to project euler 2
puts sum_of_even_elements(sequence_to(4_000_000))
# lucas numbers variation
puts sum_of_even_elements(sequence_to(4_000_000, 2, 1))