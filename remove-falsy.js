/*
Remove all the 'falsy' values from array, which are
all values that evaluate as false in a statement
NaN, undefined, 0, "", false, null
*/
//using the arrow functions again, filter returns
// any element that matches the criteria given
// using map will return 'empty elements' since it
// is applied on each entry, so better to use filter
function bouncer(arr) {
    return arr.filter(a => {
      if(a){
        return a;
      }
    });
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));