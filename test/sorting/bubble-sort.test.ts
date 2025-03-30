import { assertEquals } from "@std/assert";
import { bubbleSort } from "@algo/sorting/bubble-sort.ts";

Deno.test("bubbleSort sorts an array of numbers", () => {
  assertEquals(bubbleSort([5, 3, 8, 4, 2]), [2, 3, 4, 5, 8]);
  assertEquals(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  assertEquals(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

Deno.test("bubbleSort handles an empty array", () => {
  assertEquals(bubbleSort([]), []);
});

Deno.test("bubbleSort handles an array with one element", () => {
  assertEquals(bubbleSort([42]), [42]);
});

Deno.test("bubbleSort handles repeated elements", () => {
  assertEquals(bubbleSort([4, 2, 2, 4, 1]), [1, 2, 2, 4, 4]);
});

Deno.test("bubbleSort works with negative numbers", () => {
  assertEquals(bubbleSort([-3, -1, -4, -2]), [-4, -3, -2, -1]);
});

Deno.test("bubbleSort works with strings", () => {
  assertEquals(bubbleSort(["banana", "apple", "cherry"]), ["apple", "banana", "cherry"]);
});

Deno.test("bubbleSort handles already sorted array", () => {
  assertEquals(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  assertEquals(bubbleSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

Deno.test("bubbleSort handles all identical elements", () => {
  assertEquals(bubbleSort([7, 7, 7, 7, 7]), [7, 7, 7, 7, 7]);
});

Deno.test("bubbleSort handles large arrays", () => {
  const array = Array.from({ length: 1000 }, (_, i) => 1000 - i);
  const sortedArray = Array.from({ length: 1000 }, (_, i) => i + 1);
  assertEquals(bubbleSort(array), sortedArray);
});

Deno.test("bubbleSort works with objects by custom sorting", () => {
  const array = [{ val: 3 }, { val: 1 }, { val: 2 }];
  const sortedArray = [{ val: 1 }, { val: 2 }, { val: 3 }];
  assertEquals(bubbleSort(array.map(o => o.val)), sortedArray.map(o => o.val));
});
