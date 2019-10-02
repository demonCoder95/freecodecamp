// Need to compute square of only positive integers
// filter the positive integers from the array with filter function
// apply the square arrow function on the result to get an array of all squares

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter(
    (num)=>Number.isInteger(num) && num > 0
  ).map((num)=>num*num);
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

