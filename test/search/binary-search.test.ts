import { describe, it } from 'jsr:@std/testing/bdd';
import { expect } from 'jsr:@std/expect';
import { binarySearch } from '@algo/search/binary-search.ts';

describe('Binary Search', () => {
  it('finds existing elements', () => {
    const array = [1, 3, 5, 7, 9, 11];
    expect(binarySearch(array, 1)).toEqual(0);
    expect(binarySearch(array, 5)).toEqual(2);
    expect(binarySearch(array, 11)).toEqual(5);
  });

  it('returns -1 for missing elements', () => {
    const array = [2, 4, 6, 8, 10];
    expect(binarySearch(array, 1)).toEqual(-1);
    expect(binarySearch(array, 5)).toEqual(-1);
    expect(binarySearch(array, 12)).toEqual(-1);
  });

  it('works on an empty array', () => {
    expect(binarySearch([], 64)).toEqual(-1);
  });

  it('works with strings', () => {
    const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
    expect(binarySearch(words, 'apple')).toEqual(0);
    expect(binarySearch(words, 'date')).toEqual(3);
    expect(binarySearch(words, 'grape')).toEqual(5);
    expect(binarySearch(words, 'kiwi')).toEqual(-1);
  });

  it('works with negative numbers', () => {
    const array = [-10, -5, 0, 5, 10];
    expect(binarySearch(array, -10)).toEqual(0);
    expect(binarySearch(array, 0)).toEqual(2);
    expect(binarySearch(array, 10)).toEqual(4);
    expect(binarySearch(array, -7)).toEqual(-1);
  });

  it('works with repeated elements', () => {
    const array = [1, 2, 2, 2, 3, 4, 5];
    const index = binarySearch(array, 2);
    expect(array[index]).toEqual(2);
  });

  it('works on boundary values', () => {
    const array = [10, 20, 30, 40, 50];
    expect(binarySearch(array, 10)).toEqual(0);
    expect(binarySearch(array, 50)).toEqual(4);
    expect(binarySearch(array, 25)).toEqual(-1);
  });

  it('works with a single-element array', () => {
    expect(binarySearch([7], 7)).toEqual(0);
    expect(binarySearch([7], 3)).toEqual(-1);
  });

  it('works with a two-element array', () => {
    expect(binarySearch([5, 10], 5)).toEqual(0);
    expect(binarySearch([5, 10], 10)).toEqual(1);
    expect(binarySearch([5, 10], 7)).toEqual(-1);
  });
});
