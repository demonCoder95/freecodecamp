/*
Split the given string on space to get all the words
map the length function to get length of every word
use the ES6 spread operator to easily use Math.max
to get the maximum value from the array, which is the
legnth of the longest word!
*/

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(((a)=>a.length)));
  }