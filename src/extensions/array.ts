/**
 * @fileoverview Extensions for standard array methods.
 * @author szawrowski
 * @license MIT
 */

Array.prototype.swapElements = function <T>(i1: number, i2: number): T[] {
  if (i1 < 0 || i1 >= this.length || i2 < 0 || i2 >= this.length) {
    throw new Error('Index out of bounds');
  }
  [this[i1], this[i2]] = [this[i2], this[i1]];
  return this;
};
