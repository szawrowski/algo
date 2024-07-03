// Copyright (c) 2024, Alexander Szawrowski
//
// This file is distributed under the MIT License.
// See LICENSE file for details.

#ifndef ALGO_SORT_BUBBLE_SORT_H_
#define ALGO_SORT_BUBBLE_SORT_H_

#include <vector>
#include <utility>

#include "algo/constraints/equality_operator.h"

namespace szawrowski {

// Bubble sort function sorts a vector of elements in non-decreasing order using
// the bubble sort algorithm.
//
// The template parameter T represents the type of elements in the vector.
//
// The function iterates through the vector multiple times,
// comparing each pair of adjacent elements and swapping them if they are
// in the wrong order. The process repeats until no swaps are needed, indicating 
// that the vector is sorted.
//
// Note: This function has a time complexity of O(n^2) in the worst and
// average cases, where `n` is the number of elements in the vector.
//
// Arguments:
// vec: A reference to the vector to be sorted.
template <typename T, typename = std::void_t<has_equality_operator<T>>>
void bubble_sort(std::vector<T>& vec) {
  // Iterates over each element in the vector.
  for (size_t i = 0; i < vec.size(); i++) {
    bool is_swapped{};

    // Performs pairwise comparisons and swaps if elements are
    // in the wrong order.
    for (size_t j = 0; j < vec.size() - 1 - i; j++) {
      if (vec[j] > vec[j + 1]) {
        std::swap(vec[j], vec[j + 1]);
        is_swapped = true;
      }
    }

    // If no elements were swapped, the vector is sorted and we can exit early.
    if (!is_swapped) {
      break;
    }
  }
}

}  // namespace szawrowski

#endif  // ALGO_SORT_BUBBLE_SORT_H_
