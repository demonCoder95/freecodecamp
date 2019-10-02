/**
 * In a given array of objects, return all that match the
 * given k/v pairs
 * @param {object[]} collection Array of objects to search
 * @param {object} source An object with k/v pairs to match
 */
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    let keys = Object.keys(source);
    arr = collection.filter((a)=>{
      for(let i=0; i<keys.length; i++){
        if (a[keys[i]] != source[keys[i]]){
            return false;
        }
      }
      return true;
    })
    // Only change code above this line
    return arr;
  }

  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));