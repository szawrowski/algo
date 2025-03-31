/**
 * @fileoverview Type definitions for extended array methods.
 * @author szawrowski
 * @license MIT
 */

declare global {
  interface Array<T> {
    /**
     * Swaps two elements in an array at the specified indices.
     *
     * @template T The type of elements in the array.
     * @param i1 The index of the first element to swap.
     * @param i2 The index of the second element to swap.
     * @throws {Error} If either index is out of bounds.
     * @returns The modified array with the elements swapped.
     */
    swapElements(i1: number, i2: number): T[];
  }
}

export {};
