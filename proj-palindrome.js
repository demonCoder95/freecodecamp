/**
 * Given a string, determine if it's a palindrome
 * Filter off all non-alphanum chars and convert to lowercase
 * @param {string} str string to check for palindrome
 */
function palindrome(str) {
  // preprocess the string
  let str_filtered = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  // check for palindrome
  for(let i=0; i<str_filtered.length/2; i++){
    if(str_filtered[i] != str_filtered[str_filtered.length-i-1]) return false;
  }
  return true;
}

console.log(palindrome("e)).,\\$%ye_="));