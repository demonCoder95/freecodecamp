/*
Magical ternary operator seems useful in this case, simple
truncate the string that is overflowing and append "..." 
otherwise return it nicely back to the caller!
*/

function truncateString(str, num) {
    // not num-1, because slice destination index is NOT INCLUSIVE!
    return str.length > num?str.slice(0,num)+"...":str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  