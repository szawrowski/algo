import { describe, it } from 'jsr:@std/testing/bdd';
import { expect } from 'jsr:@std/expect';
import { bubbleSort } from '@algo/sorting/bubble-sort.ts';

describe('Bubble Sort', () => {
  it('sorts an array of numbers', () => {
    expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with one element', () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it('handles repeated elements', () => {
    expect(bubbleSort([4, 2, 2, 4, 1])).toEqual([1, 2, 2, 4, 4]);
  });

  it('works with negative numbers', () => {
    expect(bubbleSort([-3, -1, -4, -2])).toEqual([-4, -3, -2, -1]);
  });

  it('works with strings', () => {
    expect(bubbleSort(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
  });

  it('handles already sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles all identical elements', () => {
    expect(bubbleSort([7, 7, 7, 7, 7])).toEqual([7, 7, 7, 7, 7]);
  });

  it('handles large arrays', () => {
    const array = Array.from({ length: 1000 }, (_, i) => 1000 - i);
    const sortedArray = Array.from({ length: 1000 }, (_, i) => i + 1);
    expect(bubbleSort(array)).toEqual(sortedArray);
  });

  it('works with objects by custom sorting', () => {
    const array = [{ val: 3 }, { val: 1 }, { val: 2 }];
    const sortedArray = [{ val: 1 }, { val: 2 }, { val: 3 }];
    expect(bubbleSort(array.map(o => o.val))).toEqual(sortedArray.map(o => o.val));
  });
});
