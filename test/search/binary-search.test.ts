import { assertEquals } from '@std/assert';
import { binarySearch } from '@algo/search/binary-search.ts';

Deno.test('binarySearch finds existing elements', () => {
  const array = [1, 3, 5, 7, 9, 11];
  assertEquals(binarySearch(array, 1), 0);
  assertEquals(binarySearch(array, 5), 2);
  assertEquals(binarySearch(array, 11), 5);
});

Deno.test('binarySearch returns -1 for missing elements', () => {
  const array = [2, 4, 6, 8, 10];
  assertEquals(binarySearch(array, 1), -1);
  assertEquals(binarySearch(array, 5), -1);
  assertEquals(binarySearch(array, 12), -1);
});

Deno.test('binarySearch works on an empty array', () => {
  assertEquals(binarySearch([], 42), -1);
});

Deno.test('binarySearch works with strings', () => {
  const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
  assertEquals(binarySearch(words, 'apple'), 0);
  assertEquals(binarySearch(words, 'date'), 3);
  assertEquals(binarySearch(words, 'grape'), 5);
  assertEquals(binarySearch(words, 'kiwi'), -1);
});

Deno.test('binarySearch works with negative numbers', () => {
  const array = [-10, -5, 0, 5, 10];
  assertEquals(binarySearch(array, -10), 0);
  assertEquals(binarySearch(array, 0), 2);
  assertEquals(binarySearch(array, 10), 4);
  assertEquals(binarySearch(array, -7), -1);
});

Deno.test('binarySearch works with repeated elements', () => {
  const array = [1, 2, 2, 2, 3, 4, 5];
  const index = binarySearch(array, 2);
  assertEquals(array[index], 2);
});

Deno.test('binarySearch works on boundary values', () => {
  const array = [10, 20, 30, 40, 50];
  assertEquals(binarySearch(array, 10), 0);
  assertEquals(binarySearch(array, 50), 4);
  assertEquals(binarySearch(array, 25), -1);
});

Deno.test('binarySearch works with a single-element array', () => {
  assertEquals(binarySearch([7], 7), 0);
  assertEquals(binarySearch([7], 3), -1);
});

Deno.test('binarySearch works with a two-element array', () => {
  assertEquals(binarySearch([5, 10], 5), 0);
  assertEquals(binarySearch([5, 10], 10), 1);
  assertEquals(binarySearch([5, 10], 7), -1);
});
