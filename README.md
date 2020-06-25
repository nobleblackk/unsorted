# Unsorted Module

**A simple module to help in Competitive-Programming. User can simply leverage by using pre-defined functions and boilerplate code.** ✨

[![Build Status](https://travis-ci.org/Gr8manish/CompetitiveProgramming.js.svg?branch=master)](https://github.com/nobleblackk/unsorted) [![dependencies Status](https://david-dm.org/Gr8manish/CompetitiveProgramming.js/status.svg)](https://github.com/nobleblackk/unsorted/blob/master/package.json) [![devDependencies Status](https://david-dm.org/Gr8manish/CompetitiveProgramming.js/dev-status.svg)](https://github.com/nobleblackk/unsorted/blob/master/package.json) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Goal 🎯

- Here to Help you in Code Less, Think More!:
  _ To start writing code taking leverage by using pre-defined functions and boilerplate code
  _ To debug the code easily by providing input through terminal one by one and check output instantly

## Installation

1. First, install the package globally :
   ```
   npm install -g unsorted
   ```
   **Why?** Global package will let you use **unsorted module** anywhere in your workspace
2. Now install it locally in the project :
   - Initialize the project (If it's not already NPM project)
     `npm init -y`
   - Installing the package
     `npm install --save unsorted`

## Features 🎯

1. Write the code which use **input** utility provided by this npm package.
   - this package helps in reading input from terminal one by one.
   - For example **input.readNumber()** will wait for user input and return provided input.
2. Now simple global command is provided by this package which convert the code, written using **input**, into the code which is submittable on websites like codeforces, codechef, topcoder, hackerrank, hackerearth etc.
3. Use Various Functions which are frequently used for Competitive-Programming Purpose, e.g. **Sorting**, **Searching**, **Number-Conversion**, **Most Used Algos** etc.

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

## CountingSort

Sort all the elements using CountingSort.
e.g. console.log(sort.countingSort([3, 0, 2, 5, -1, 4, 1]));

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

## Palindrome

Return boolean value after checking whether given string is palindrome or not.
e.g. console.log(string.palindrome(string));

# 4.Math-Operations =>

const {math} = require("unsorted");

## Newton's Square Root Method

Return square root using Newton's Square Root Method.
e.g. console.log(math.newtonSquareRoot(num));

## karatsuba Multiplication (O(n^1.59))

Return multiplication of two numbers using karatsuba Multiplication Method.
e.g. console.log(math.karatsubaMultiplication(x,y));

## Permutations

Return all permutations of given string.
e.g. console.log(math.permutation(string));

## PowerSet

Return Power Set of given string.
e.g. console.log(math.powerset(string));

## Catalan Number

Return Catalan Sequence of given number.
e.g. console.log(math.catalannumber(num));

## HCF

Return HCF of given number.
e.g. console.log(math.hcf(a,b));

## LCM

Return LCM of given number.
e.g. console.log(math.lcm(a,b));

## Sieve of Eratosthenes

Return Sieve of EratosThenes on given number.
e.g. console.log(math.sieve(num));

## Fibonacci Series

Return Fibonacci Sequence for given number.
e.g. console.log(math.fibonacci(num));

# 5.Searching =>

const {search} = require("unsorted");

## Linear Search => O(n)

Return position of number else -1.
e.g. console.log(search.search(arr, num));

## Binary Search => O(logn)

Return position of number else -1.
e.g. console.log(search.binarySearch(arr, num));

## Jump Search => complexity of this algorithm lies in between linear search (O(n)) and binary search (O(log n))

Return position of number else -1.
e.g. console.log(search.jumpSearch(arr, num));

# 6.algo =>

const {algo} = require("unsorted");

## NumberOfSubsetSum => return no of subsets having exact sum

Return NumberOfSubsetSum.
e.g. console.log(algo.NumberOfSubsetSum(array, sum));

## Kadane's Algorithm

Return Maximum Sum Subarray.
e.g. console.log(algo.kadane(array));

## maximumNonAdjacentSum

Return maximumNonAdjacentSum.
e.g. console.log(algo.maximumNonAdjacentSum(nums));

# 7.conversion =>

const {conversion} = require("unsorted");

## decimalToBinary

Return decimalToBinary Conversion.
e.g. console.log(conversion.decimalToBinary(num));

## decimalToHex

Return decimalToHex Conversion.
e.g. console.log(conversion.decimalToHex(num));

# 8.Input =>

const {input} = require("unsorted");

## Read Array

Generic Array Input.
e.g. console.log(input.readArray());

## Read Boolean Value

Input Boolean Value.
e.g. console.log(input.readBoolean());

## Read Single Character

Input Single Character.
e.g. console.log(input.readChar());

## Read Line

Input Line.
e.g. console.log(input.readLine());

## Read Numeric Array

Input Numeric Array.
e.g. console.log(input.readNumberArray());

## Used technologies :

- **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility

#Contributed by NobleBlack

# License

MIT © Abhishek Sharma
