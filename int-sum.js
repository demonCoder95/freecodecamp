/**
 * Given an array of two integers, return sum of all ints between them
 * Important to sort the numbers since order in input can be reversed
 * It's a simple arithmetic series, so the summation formula is used n*(a1+an)/2
 * 
 * @param {arr} arr Array of two integers
 */
function sumAll(arr) {
    let s_arr = arr.sort((a,b)=>(a-b));
    console.log(s_arr);
    return (s_arr[0]+s_arr[1])*(s_arr[1]-s_arr[0]+1)/2;
  }
  
  console.log(sumAll([5,10]));