/**
 * Replace before with after in str. If before is capitalized
 * make sure after is also capitalized
 * @param {string} str String to perform replacement in
 * @param {string} before Substr to search
 * @param {string} after Substr to replace with
 */
function myReplace(str, before, after) {
  
    return str.replace(before, /^[A-Z]/.test(before)?after[0].toUpperCase()+after.slice(1,after.length):after);
  }
  
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));