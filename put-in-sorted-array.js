/*
Given a number, return the index in which it needs to be
inserted in an array(after soring the array) which maintains
the sorting nature of the array
*/
//after sorting the array, get all elements less than the given
//number and get the length of this subarray!
function getIndexToIns(arr, num) {
    return arr.sort().filter(a=>a<num).length;
  }
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));