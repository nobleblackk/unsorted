# Unsorted Module

A simple module to help in Competitive-Programming. User can simply leverage by using pre-defined functions and boilerplate codes.

## How to Install

# npm install unsorted@version_name

```javascript
## Instruction
const unsorted = require('unsorted');
```

# Modules:

# 1.Sorting =>

const {sort} = require("unsorted");

## BubbleSort

Sort all the elements using BubbleSort.
e.g. console.log(sort.bubbleSort([3, 0, 2, 5, -1, 4, 1]));

## SelectionSort

Sort all the elements using SelectionSort.
e.g. console.log(sort.selectionSort([3, 0, 2, 5, -1, 4, 1]));

## InsertionSort

Sort all the elements using InsertionSort.
e.g. console.log(sort.insertionSort([3, 0, 2, 5, -1, 4, 1]));

## MergeSort

Sort all the elements using MergeSort.
e.g. console.log(sort.mergeSort([3, 0, 2, 5, -1, 4, 1]));

## QuickSort

Sort all the elements using QuickSort.
e.g. console.log(sort.quickSort([3, 0, 2, 5, -1, 4, 1],0,6));

## HeapSort

Sort all the elements using HeapSort.
e.g. console.log(sort.heapSort([3, 0, 2, 5, -1, 4, 1]));

# 2.Array-Operations =>

const {array} = require("unsorted");

## Sum

Return sum of all the elements of array.
e.g. console.log(array.sum([3, 0, 2, 5, -1, 4, 1]));

## Average

Return average of all the elements of array.
e.g. console.log(array.avg([3, 0, 2, 5, -1, 4, 1]));

## Max-Element

Return maximum element of all the elements of array.
e.g. console.log(array.max([3, 0, 2, 5, -1, 4, 1]));

## Min-Element

Return minimum element of all the elements of array.
e.g. console.log(array.min([3, 0, 2, 5, -1, 4, 1]));

## Set

Return unique elements from all the elements of array.
e.g. console.log(array.set([3, 0, 2, 5, -1, 4, 1]));

## Bisect

Return the index postion to insert element in array.
e.g. console.log(array.bisect([3, 0, 2, 5, -1, 4, 1], 3));

## Insert-Element

Return updated array with the exact position of new element.
e.g. console.log(array.insert([3, 0, 2, 5, -1, 4, 1], 3));

## Create HashMap

Return hash map object of all the elements of array.
e.g. console.log(array.dict([3, 0, 2, 5, -1, 4, 1]));

# 3.String-Operations =>

const {string} = require("unsorted");

## isAnagrams

Return boolean value whether two strings are anagrams or not.
e.g. console.log(string.isAnagrams(stringA, stringB));

## getCharMap

Return char map of given string.
e.g. console.log(string.getCharMap(string));

## getFrequency

Return frequency of all chars of given string.
e.g. console.log(string.getFrequency(string));

# 4.Math-Operations =>

const {math} = require("unsorted");

## Permutations

Return all permutations of given string.
e.g. console.log(math.permutation(string));

## PowerSet

Return Power Set of given string.
e.g. console.log(math.powerset(string));

## Catalan Number

Return Catalan Sequence of given number.
e.g. console.log(math.catalannumber(num));

#Contributed by NobleBlack
