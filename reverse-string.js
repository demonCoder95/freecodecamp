/*
A little messy, need to look for a better algorithm than this one!
*/
function reverseString(str) {
    let arr = str.split("");
    let arr_r = [];
    for(let i=0; i<arr.length; i++){
      arr_r[arr.length-1-i] = arr[i];
    }
    str = arr_r.join("");
    return str;
  }
  
  reverseString("hello");