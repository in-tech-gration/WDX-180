import { describe, it, expect } from "vitest";

import fizzBuzz from './fizzBuzz'

describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
    expect(fizzBuzz([1, 2, 3])).toBe('1, 2, Fizz')
    expect(fizzBuzz([1, 2, 3, 5])).toBe('1, 2, Fizz, Buzz')
    expect(fizzBuzz([1, 2, 3, 5, 6])).toBe('1, 2, Fizz, Buzz, Fizz')
    expect(fizzBuzz([1, 2, 3, 5, 6, 10])).toBe(
      '1, 2, Fizz, Buzz, Fizz, Buzz'
    )
    expect(fizzBuzz([1, 2, 3, 5, 6, 10, 15])).toBe(
      '1, 2, Fizz, Buzz, Fizz, Buzz, FizzBuzz'
    )
    expect(fizzBuzz([1, 2, 1, 2, 1, 2])).toBe(
      '1, 2, 1, 2, 1, 2'
    )
  })
})