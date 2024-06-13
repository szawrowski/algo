// Copyright (c) 2024, Alexander Szawrowski
//
// This file is distributed under the MIT License.
// See LICENSE file for details.

#ifndef ALGO_CONSTRAINTS_EQUALITY_OPERATOR_H_
#define ALGO_CONSTRAINTS_EQUALITY_OPERATOR_H_

#include <type_traits>

namespace algo {

template <typename, typename = std::void_t<>>
struct HasEqualityOperator : std::false_type {};

template <typename T>
struct HasEqualityOperator<
    T, std::void_t<decltype(std::declval<T>() == std::declval<T>())>>
    : std::true_type {};

}  // namespace algo

#endif  // ALGO_CONSTRAINTS_EQUALITY_OPERATOR_H_
