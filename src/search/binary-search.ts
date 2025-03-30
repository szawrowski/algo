/**
 * @fileoverview Binary Search algorithm.
 * @author szawrowski
 * @license MIT
 * @see https://en.wikipedia.org/wiki/Binary_search_algorithm
 */

/**
 * Performs a binary search on a sorted array to find the index of
 * a target value.
 *
 * @template T The type of elements in the array. Assumed to be comparable.
 * @param {T[]} array - The sorted array to search.
 * @param {T} target - The value to search for.
 * @returns {number} The index of the target value in the array,
 * or -1 if the target is not found.
 */
export const binarySearch = <T>(array: T[], target: T): number => {
  if (array.length === 0) {
    return -1;
  }
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
