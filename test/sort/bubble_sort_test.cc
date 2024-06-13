#include <gtest/gtest.h>

#include "algo/sort/bubble_sort.h"

TEST(BubbleSortTest, EmptyVector) {
  std::vector<int> vec;
  algo::BubbleSort(vec);
  ASSERT_TRUE(vec.empty());
}

TEST(BubbleSortTest, SingleElement) {
  std::vector vec{1};
  const std::vector expected{1};
  algo::BubbleSort(vec);
  ASSERT_EQ(vec, expected);
}

TEST(BubbleSortTest, AlreadySorted) {
  std::vector vec{1, 2, 3, 4, 5};
  const std::vector expected{1, 2, 3, 4, 5};
  algo::BubbleSort(vec);
  ASSERT_EQ(vec, expected);
}

TEST(BubbleSortTest, UnsortedVector) {
  std::vector vec{5, 4, 3, 2, 1};
  const std::vector expected{1, 2, 3, 4, 5};
  algo::BubbleSort(vec);
  ASSERT_EQ(vec, expected);
}

TEST(BubbleSortTest, Duplicates) {
  std::vector vec{4, 2, 2, 4, 3, 1};
  const std::vector expected{1, 2, 2, 3, 4, 4};
  algo::BubbleSort(vec);
  ASSERT_EQ(vec, expected);
}
