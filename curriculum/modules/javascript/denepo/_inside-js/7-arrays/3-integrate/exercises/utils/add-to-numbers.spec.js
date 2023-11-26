import { addToNumbers } from './add-to-numbers.js';

describe('addToNumbers:  adds a single number each number in an array', () => {
  it('does nothing to an empty array', () => {
    const returned = addToNumbers([], 1);
    expect(returned).toEqual([]);
  });
  it('can add positive numbers to an array', () => {
    const returned = addToNumbers([-1, 0, 1], 4);
    expect(returned).toEqual([3, 4, 5]);
  });
  it('can add negative numbers to an array', () => {
    const returned = addToNumbers([-1.5, 0, 1, 1.5], -2);
    expect(returned).toEqual([-3.5, -2, -1, -0.5]);
  });
  it('can add decimal numbers to an array', () => {
    const returned = addToNumbers([-1, -1.5, 0, 1, 1.5], 1.5);
    expect(returned).toEqual([0.5, 0, 1.5, 2.5, 3]);
  });
  it('can add zero to an array', () => {
    const returned = addToNumbers([-1, -1.5, 0, 1, 1.5], 0);
    expect(returned).toEqual([-1, -1.5, 0, 1, 1.5]);
  });
  it('returns a new array', () => {
    const arg = [1, 2, 3];
    const returned = addToNumbers(arg, 2);
    expect(arg !== returned).toEqual(true);
  });
  it('has no side-effects', () => {
    const arg = [1, 2, 3];
    addToNumbers(arg, 4);
    expect(arg).toEqual([1, 2, 3]);
  });
});
