/*
Going to use the magic of recursion to do this one!
*/

function repeatStringNumTimes(str, num) {
    // base case to return empty string
    if(num <=0){
      return "";
    }else{
    //recursive step to concatenate a string with it's copy!
      return str += (repeatStringNumTimes(str, num-1));
    }
  }
  
  repeatStringNumTimes("abc", 3);