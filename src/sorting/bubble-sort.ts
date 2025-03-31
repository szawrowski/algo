/**
 * @fileoverview Bubble Sort algorithm.
 * @author szawrowski
 * @license MIT
 * @see https://en.wikipedia.org/wiki/Bubble_sort
 */

import '@algo/extensions/array.ts';

/**
 * Sorts an array using the Bubble Sort algorithm.
 *
 * @template T The type of elements in the array.
 * @param {T[]} array - The array to be sorted. The sorting is done in-place.
 * @returns {T[]} The original array, now sorted.
 */
export const bubbleSort = <T>(array: T[]): T[] => {
  const length = array.length;
  let swapped: boolean;

  for (let i = 0; i < length; i++) {
    swapped = false;

    for (let j = 0; j < length - 1; j++) {
      // Compare adjacent elements and swap if needed
      if (array[j] > array[j + 1]) {
        // Swap elements if they are in the wrong order
        array.swapElements(j, j + 1);
        swapped = true;
      }
    }
    // Exit early if no elements were swapped in the inner loop
    if (!swapped) {
      break;
    }
  }
  return array;
};
