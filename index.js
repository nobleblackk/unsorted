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
};
// Driver Code
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
module.exports = unsorted;

// Contributed by NobleBlack
