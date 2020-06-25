const inputUtil = require("wait-console-input");
const unsorted = {
  sort: {
    // Worst Time-Complexity => O(n^2)
    bubbleSort(nums) {
      if (!Array.isArray(nums)) return -1; // --->if passed argument is not array
      if (nums.length < 2) return nums; // --->if array length is one or less

      let swapped = false;
      (temp = 0), (count = -1), (arrLength = 0);

      do {
        count++;
        swapped = false;
        arrLength = nums.length - 1 - count; //---> not loop through sorted items
        for (let i = 0; i <= arrLength; i++) {
          if (nums[i] > nums[i + 1]) {
            temp = nums[i + 1];
            nums[i + 1] = nums[i];
            nums[i] = temp;
            swapped = true;
          }
        }
      } while (swapped);
      return nums;
    },
    // Worst Time-Complexity => O(n^2)
    insertionSort(nums) {
      let n = nums.length;
      for (let i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        let current = nums[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while (j > -1 && current < nums[j]) {
          nums[j + 1] = nums[j];
          j--;
        }
        nums[j + 1] = current;
      }
      return nums;
    },
    // Worst Time-Complexity => O(n^2)
    selectionSort(nums) {
      let len = nums.length;
      for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
          if (nums[min] > nums[j]) {
            min = j;
          }
        }
        if (min !== i) {
          let tmp = nums[i];
          nums[i] = nums[min];
          nums[min] = tmp;
        }
      }
      return nums;
    },

    // Worst Time-Complexity => n*log(n)
    mergeSort(nums) {
      if (nums.length <= 1) return nums;
      let mid = Math.floor(nums.length / 2),
        left = this.mergeSort(nums.slice(0, mid)),
        right = this.mergeSort(nums.slice(mid));

      return this.merge(left, right);
    },
    merge(arr1, arr2) {
      let sorted = [];

      while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
        else sorted.push(arr2.shift());
      }

      return sorted.concat(arr1.slice().concat(arr2.slice()));
    },
    // Worst Time-Complexity => O(n^2)
    quickSort(arr, start, end) {
      //   console.log(arr);
      let pivot_index;
      if (start < end) {
        pivot_index = this.partition(arr, start, end);

        this.quickSort(arr, start, pivot_index - 1);
        this.quickSort(arr, pivot_index + 1, end);
      }
      return arr;
    },
    partition(arr, start, end) {
      let pivot = arr[end];
      let i = start - 1;
      for (let j = start; j < end; j += 1) {
        if (arr[j] < pivot) {
          i += 1;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
        i += 1;
        let temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        return i;
      }
    },
    heapSort(input) {
      array_length = input.length;

      for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        this.heap_root(input, i);
      }

      for (i = input.length - 1; i > 0; i--) {
        this.swap(input, 0, i);
        array_length--;

        this.heap_root(input, 0);
      }
      return input;
    },
    heap_root(input, i) {
      var left = 2 * i + 1;
      var right = 2 * i + 2;
      var max = i;

      if (left < array_length && input[left] > input[max]) {
        max = left;
      }

      if (right < array_length && input[right] > input[max]) {
        max = right;
      }

      if (max != i) {
        this.swap(input, i, max);
        this.heap_root(input, max);
      }
    },
    swap(input, index_A, index_B) {
      var temp = input[index_A];

      input[index_A] = input[index_B];
      input[index_B] = temp;
    },
    countingSort(arr) {
      let Max = Math.max(...arr);
      let count = Array(Max + 1).fill(0);
      for (let i = 0; i < arr.length; i += 1) {
        count[arr[i]] += 1;
      }
      for (let i = 1; i < Max + 1; i += 1) {
        count[i] += count[i - 1];
      }
      let res = Array(arr.length).fill(0);
      let i = arr.length - 1;
      while (i >= 0) {
        res[count[arr[i]] - 1] = arr[i];
        count[arr[i]] -= 1;
        i -= 1;
      }
      return res;
    },
  },
  array: {
    sum(arr) {
      return arr.reduce((acc, val) => {
        return acc + val;
      }, 0);
    },
    avg(arr) {
      return (
        arr.reduce((acc, val) => {
          return acc + val;
        }, 0) / (arr.length === 0 ? 1 : arr.length)
      );
    },
    max(arr) {
      return arr.reduce((acc, val) => {
        return Math.max(acc, val);
      });
    },
    min(arr) {
      return arr.reduce((acc, val) => {
        return Math.min(acc, val);
      });
    },
    set(arr) {
      let set = new Set(arr);
      return Array.from(set);
    },
    bisect(arr, val) {
      let idx;
      if (arr.length === 0) {
        return 0;
      }
      for (idx = 0; idx < arr.length; idx++) {
        if (val < arr[idx]) {
          return idx;
        }
      }
      return idx;
    },
    insert(arr, val, inPlace = true) {
      var idx = this.bisect(arr, val);
      if (inPlace) {
        arr.splice(idx, 0, val);
        return arr;
      }
      return arr.slice(0, idx).concat([val], arr.slice(idx));
    },
    dict(arr) {
      let hashMap = {};
      for (let i = 0; i < arr.length; i += 1) {
        hashMap[arr[i]] = hashMap[arr[i]] + 1 || 1;
      }
      return hasMap;
    },
  },
  string: {
    palindrome(string) {
      // Base case
      if (string.length < 2) return true;

      // Check outermost keys
      if (string[0] !== string[string.length - 1]) {
        return false;
      }

      return this.palindrome(string.slice(1, string.length - 1));
    },

    // Linear Complexity
    isAnagrams(stringA, stringB) {
      /*First, we remove any non-alphabet character using regex and convert
      convert the strings to lowercase. */
      stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
      stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

      //Get the character map of both strings
      const charMapA = this.getCharMap(stringA);
      const charMapB = this.getCharMap(stringB);

      /* Next, we loop through each character in the charMapA, 
        and check if it exists in charMapB and has the same value as
        in charMapA. If it does not, return false */
      for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
          return false;
        }
      }

      return true;
    },
    getCharMap(string) {
      // We define an empty object that will hold the key - value pairs.
      let charMap = {};

      /*We loop through each character in the string. if the character 
  already exists in the map, increase the value, otherwise add it 
  to the map with a value of 1 */
      for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1;
      }
      return charMap;
    },
    getFrequency(string) {
      if (string === "") {
        return -1;
      }
      return this.getCharMap(string);
    },
  },
  math: {
    fibonacci(nth) {
      const sequence = [];

      if (nth >= 1) sequence.push(1);
      if (nth >= 2) sequence.push(1);

      for (let i = 2; i < nth; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }

      return sequence;
    },

    sieveUtils(n) {
      /*
       * Calculates prime numbers till a number n
       * :param n: Number upto which to calculate primes
       * :return: A boolean list contaning only primes
       */
      const primes = new Array(n + 1);
      primes.fill(true); // set all as true initially
      primes[0] = primes[1] = false; // Handling case for 0 and 1
      const sqrtn = Math.ceil(Math.sqrt(n));
      for (let i = 2; i <= sqrtn; i++) {
        if (primes[i]) {
          for (let j = 2 * i; j <= n; j += i) {
            primes[j] = false;
          }
        }
      }
      return primes;
    },

    sieve(n) {
      const primes = this.sieveUtils(n);
      let res = [];
      for (let i = 2; i <= n; i++) {
        if (primes[i]) {
          res.push(i);
        }
      }
      return res;
    },
    lcm(num1, num2) {
      var maxNum;
      var l;
      // Check to see whether num1 or num2 is larger.
      if (num1 > num2) {
        maxNum = num1;
      } else {
        maxNum = num2;
      }
      l = maxNum;

      while (true) {
        if (l % num1 === 0 && l % num2 === 0) {
          break;
        }
        l += maxNum;
      }
      return l;
    },
    hcf(x, y) {
      // If the input numbers are less than 1 return an error message.
      if (x < 1 || y < 1) {
        return "Please enter values greater than zero.";
      }

      // If the input numbers are not integers return an error message.
      if (x !== Math.round(x) || y !== Math.round(y)) {
        return "Please enter whole numbers.";
      }

      // Now apply Euclid's algorithm to the two numbers.
      while (Math.max(x, y) % Math.min(x, y) !== 0) {
        if (x > y) {
          x %= y;
        } else {
          y %= x;
        }
      }

      // When the while loop finishes the minimum of x and y is the HCF.
      return Math.min(x, y);
    },
    permutation(string) {
      let permutations = [];
      let arr = string.split("");
      // console.log(permutations);
      this.permute(arr, 0, string.length - 1, permutations);
      return permutations;
    },
    permute(arr, l, r, res) {
      // console.log("initial", arr);
      if (l == r) {
        res.push(arr.slice());
      } else {
        for (let i = l; i < r + 1; i += 1) {
          let temp = arr[l];
          arr[l] = arr[i];
          arr[i] = temp;
          // console.log(arr);
          this.permute(arr, l + 1, r, res);
          let temp1 = arr[l];
          arr[l] = arr[i];
          arr[i] = temp1;
          // console.log(arr);
        }
      }
    },
    powerset(string) {
      res = [];
      this.powersetUtils(string, 0, "", res);
      return res;
    },
    powersetUtils(arr, index, string, res) {
      if (index == arr.length) {
        res.push(string.slice());
        return;
      }
      this.powersetUtils(arr, index + 1, string, res);
      this.powersetUtils(arr, index + 1, string + arr[index], res);
    },
    catalannumber(num) {
      if (num <= 1) {
        return 1;
      }
      let temp = 0;
      for (let i = 0; i < num; i += 1) {
        temp += this.catalannumber(i) * this.catalannumber(num - i - 1);
      }
      return temp;
    },
    newtonSquareRoot(number, iterations = 500) {
      let a = number;
      for (let i = 0; i < iterations; i += 1) {
        number = (number + a / number) / 2;
      }
      return number;
    },
    // Karatsuba algorithm for fast multiplication using Divide and Conquer algorithm
    // Using Divide and Conquer, we can multiply two integers in less time complexity. We divide the given numbers in two halves. Let the given numbers be X and Y.
    // X =  Xl*2n/2 + Xr    [Xl and Xr contain leftmost and rightmost n/2 bits of X]
    // Y =  Yl * 2n / 2 + Yr[Yl and Yr contain leftmost and rightmost n/ 2 bits of Y]
    // XY = (Xl*2n/2 + Xr)(Yl*2n/2 + Yr) = 2n XlYl + 2n / 2(XlYr + XrYl) + XrYr
    // the recurrence becomes T(n) = 3T(n/2) + O(n) and solution of this recurrence is O(n1.59).
    karatsubaMultiplication(x, y) {
      if (x.toFixed().length === 1 || y.toFixed().length === 1) {
        return x * y;
      }
      let n = parseInt(Math.max(x.toFixed().length, y.toFixed().length) / 2);
      let a = parseInt(x / Math.pow(10, n));
      let b = parseInt(x % Math.pow(10, n));
      let c = parseInt(y / Math.pow(10, n));
      let d = parseInt(y % Math.pow(10, n));
      let ac = this.karatsubaMultiplication(a, c);
      let bd = this.karatsubaMultiplication(b, d);
      let ad_bc = this.karatsubaMultiplication(a + b, c + d) - ac - bd;
      return ac * Math.pow(10, n * 2) + ad_bc * Math.pow(10, n) + bd;
    },
  },
  input: {
    // Reading Single Character
    readChar() {
      return inputUtil.readChar();
    },
    // Reading Number

    readNumber() {
      return inputUtil.readFloat();
    },
    // Reading Line

    readLine() {
      return inputUtil.readLine();
    },

    // Reading Numeric Array

    readNumberArray() {
      return inputUtil.readNumberArray();
    },

    // Reading Generic Array
    readArray() {
      return inputUtil.readArray();
    },

    // Reading Boolean

    readBoolean() {
      return inputUtil.readBoolean();
    },
  },
  search: {
    search(ar, searchNum) {
      var position = this.searchUtils(ar, searchNum);
      if (position !== -1) {
        // console.log(position + 1);
        return position + 1;
      } else {
        // console.log("The element not found");
        return -1;
      }
    },

    // Search “theArray” for the specified “key” value
    searchUtils(theArray, key) {
      for (var n = 0; n < theArray.length; n++) {
        if (theArray[n] === key) {
          return n;
        }
      }
      return -1;
    },

    /* The Jump Search algorithm allows to combine a linear search with a speed optimization.
     * This means that instead of going 1 by 1, we will increase the step of √n and increase that
     * step of √n which make the step getting bigger and bigger.
     * The asymptotic analysis of Jump Search is o(√n). Like the binary search, it needs to be sorted.
     * The advantage against binary search is that Jump Search traversed back only once.
     */
    jumpSearch(arr, value) {
      const length = arr.length;
      let step = Math.floor(Math.sqrt(length));
      let lowerBound = 0;
      while (arr[Math.min(step, length) - 1] < value) {
        lowerBound = step;
        step += step;
        if (lowerBound >= length) {
          return -1;
        }
      }

      const upperBound = Math.min(step, length);
      while (arr[lowerBound] < value) {
        lowerBound++;
        if (lowerBound === upperBound) {
          return -1;
        }
      }
      if (arr[lowerBound] === value) {
        return lowerBound;
      }
      return -1;
    },
    binarySearch(arr, target) {
      return this.binarySearchUtils(arr, 0, arr.length - 1, target);
    },
    binarySearchUtils(array, low, high, target) {
      //base condition
      // To exit the recursion, if array is empty or n = 1
      if (low > high) {
        return -1;
      }
      //calculate the midpoint of array
      let mid = Math.floor((low + high) / 2);
      if (target == array[mid]) {
        // console.log(mid);
        return mid;
      } else if (target < array[mid]) {
        //if the target is less the number at the midpoint of array
        //Search the 2nd half.
        return this.binarySearchUtils(array, low, mid - 1, target);
      } else {
        //if the target is larger number at the midpoint of array
        //Search the 1st half.
        return this.binarySearchUtils(array, mid + 1, high, target);
      }
    },
  },
  conversion: {
    intToHex(num) {
      switch (num) {
        case 10:
          return "A";
        case 11:
          return "B";
        case 12:
          return "C";
        case 13:
          return "D";
        case 14:
          return "E";
        case 15:
          return "F";
      }
      return num;
    },

    decimalToHex(num) {
      const hexOut = [];
      while (num > 15) {
        hexOut.push(this.intToHex(num % 16));
        num = Math.floor(num / 16);
      }
      return this.intToHex(num) + hexOut.join("");
    },
    decimalToBinary(num) {
      var bin = [];
      while (num > 0) {
        bin.unshift(num % 2);
        num >>= 1; // basically /= 2 without remainder if any
      }
      return bin.join("");
    },
  },
  algo: {
    NumberOfSubsetSum(array, sum) {
      const dp = []; // create an dp array where dp[i] denote number of subset with sum equal to i
      for (let i = 1; i <= sum; i++) {
        dp[i] = 0;
      }
      dp[0] = 1; // since sum equal to 0 is always possible with no element in subset

      for (let i = 0; i < array.length; i++) {
        for (let j = sum; j >= array[i]; j--) {
          if (j - array[i] >= 0) {
            dp[j] += dp[j - array[i]];
          }
        }
      }
      return dp[sum];
    },
    maximumNonAdjacentSum(nums) {
      /*
       * Find the maximum non-adjacent sum of the integers in the nums input list
       * :param nums: Array of Numbers
       * :return: The maximum non-adjacent sum
       */

      if (nums.length < 0) return 0;

      let maxIncluding = nums[0];
      let maxExcluding = 0;

      for (const num of nums.slice(1)) {
        const temp = maxIncluding;
        maxIncluding = maxExcluding + num;
        maxExcluding = Math.max(temp, maxExcluding);
      }

      return Math.max(maxExcluding, maxIncluding);
    },
    kadane(array) {
      let cummulativeSum = 0;
      let maxSum = 0;
      for (var i = 0; i < array.length; i++) {
        cummulativeSum = cummulativeSum + array[i];
        if (cummulativeSum < 0) {
          cummulativeSum = 0;
        } else if (maxSum < cummulativeSum) {
          maxSum = cummulativeSum;
        }
      }
      return maxSum;
      // This function returns largest sum contigous sum in a array
    },
  },
};
// Driver Code
// let a = unsorted.input.readArray();
// console.log(a);
// console.log(unsorted.sort.bubbleSort([3, 0, 2, 5, -1, 4, 1]));
// console.log(unsorted.sort.insertionSort([3, 0, 2, 5, -1, 4, 1]));
// console.log(unsorted.sort.selectionSort([3, 0, 2, 5, -1, 4, 1]));
// console.log(unsorted.sort.mergeSort([3, 0, 2, 5, -1, 4, 1]));
// console.log(unsorted.sort.quickSort([3, 0, 2, 5, -1, 4, 1], 0, 6));
// console.log(unsorted.sort.heapSort([3, 0, 2, 5, -1, 4, 1]));
// console.log(unsorted.array.insert([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(unsorted.math.permutation("123"));
// console.log(unsorted.math.powerset("abc"));
// console.log(unsorted.math.catalannumber(5));

// console.log(unsorted.sort.countingSort([1, 5, 3, 2, 11, 7, 4]));

// console.log(unsorted.math.newtonSquareRoot(5));
// console.log(unsorted.math.karatsubaMultiplication(12, 10000004355353525346));
// console.log(unsorted.math.lcm(12, 6));
// console.log(unsorted.math.sieve(55));

// console.log(unsorted.string.palindrome("mom"));

// console.log(unsorted.math.fibonacci(5));

// console.log(unsorted.search.binarySearch([1, 2, 4, 5], 1));

// console.log(
//   unsorted.search.jumpSearch([0, 0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90], 313)
// );

// console.log(
//   unsorted.search.search([0, 0, 4, 7, 10, 23, 34, 40, 55, 68, 77, 90], 90)
// );

// console.log(unsorted.algo.kadane([1, -11, 3, 4, -6]));

// console.log(unsorted.algo.maximumNonAdjacentSum([1, -11, 3, 4, -6]));

// console.log(unsorted.algo.NumberOfSubsetSum([1, 1, 2, 2, 3, 1, 1], 4));

// console.log(unsorted.conversion.decimalToBinary(3));

// console.log(unsorted.conversion.decimalToHex(123));

module.exports = unsorted;

// Contributed by NobleBlack
