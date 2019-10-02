/**
 * The algorithm is as follows:
 * Use the first char to determine starting offset
 * each successive letter needs to be at a diff of 1
 * if it's not, the char 'with' diff of 1 is the missing 
 * char! Can use this to detect multiple missing entries as well
 * String.fromCharCode(int) -> INT - ASCII conversion
 * String.charCodeAt(index) -> ASCII - INT conversion
 * This is the key to making this algorithm work, ints are easier
 * to form comparison/computations than strings are
 */
function fearNotLetter(str) {
    // make sure to go till length-1 otherwise going to z will output '{'
    // which is the next ASCII char in sequence
    for(let i=0; i<str.length-1; i++){
      if(str.charCodeAt(i+1)-str.charCodeAt(i) != 1){
        return String.fromCharCode(str.charCodeAt(i)+1);
      }
    }
    return undefined;
  }
    
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));