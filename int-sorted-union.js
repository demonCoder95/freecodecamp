/**
 * Given certain number of arrays, create a union
 * keeping the original order intact but avoiding repetition
 * Algorithm:
 * while adding the entry in the final array, can use the
 * Array.indexOf() function to determine if an entry already
 * exists in the array. Bingo!
 */
function uniteUnique(...arr) {
    let result = [];
    for(let i=0; i<arr.length; i++){
      //very bad functional programming, but works! :D
      // can also use Array.forEach() for this with same callback
        arr[i].map((a)=>{
        if(result.indexOf(a) == -1) result.push(a);
      });
    }
    return result;
  }
  
  uniteUnique([1, 3, 2], [1, [5]], [2, [4]])