/*
The generic solution works for finding the max of each subarray of any number of arrays!
*/
function largestOfFour(arr) {
    return arr.map((a) => Math.max(...a));
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);