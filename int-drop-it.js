/**
 * Starting from index 0, chop off entries until a given 
 * condition is met, as soon as it is, return the remaining
 * array
 * @param {number[]} arr array of integers to operate on
 * @param {function} func condition to test on each element
 */
function dropElements(arr, func) {
    // Drop them elements.
    while(arr.length >0){
      if(func(arr[0]))  return arr;
      else arr.splice(0,1);
    }
    return [];  //reaches here if there was no match
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));