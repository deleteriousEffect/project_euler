# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?
#
# https://projecteuler.net/problem=3

require 'prime'

def largest_prime_factor_of(num)
  m = Math.sqrt(num)
  largest_prime = 0
  # Starting at 3, check every second number for primacy
  # and if it is a factor of num and assign passing numbers to largest_prime.
  (3...m.round).step(2) do |i|
    largest_prime = i if Prime.prime?(i) && num % i == 0
  end
  largest_prime
end

puts largest_prime_factor_of(600_851_475_143)
