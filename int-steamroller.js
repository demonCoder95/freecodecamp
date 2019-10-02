/**
 * 
 * Given a multidimensional array of irregular size,
 * flatten it into a 1d array. Keep empty objects but
 * remove empty arrays
 * Algorithm: Iterate on the whole array, in one iteration
 * replace an array with it's element. The #iterations depends
 * on the level of nesting of the most nested array in the parent
 * array.
 * #iters = depth + 1 (the 1 is for ensuring no arrays left)
 * @param {[]} arr Array of arrays
 */
function steamrollArray(arr){
    let flat_array;
    let flag;
    while(true){
        flat_array = [];    //start with an empty flat array on each iteration
        flag = false;       //flag to see if a flattening was done
    
        for(let i=0; i<arr.length; i++){
            if(arr[i] instanceof Array){
                flat_array = flat_array.concat(arr[i]); //concat the elements if it's array
                flag = true;
            }else{
                flat_array.push(arr[i]);    //otherwise, just push the element
            }
        }
        arr = flat_array;   //now arr is 1 level shallower
        if(!flag) break;    //break loop if no level of nesting was found
    }
    return flat_array;
}

// flat_array = flat_array.concat(arr.slice(0, i).concat([...arr[i]]).concat(arr.slice(i)))

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([[["a"]], [["b"]]]));



//recursion based solution, problem with maintaining persistence 
// in each iteration :(
// function steamrollArray(arr){
    //     let flat_array = [];
    //    for(let i=0; i<arr.length; i++){
    //        if(arr[i] instanceof Array){
    //            steamrollArray(arr[i]);
    //        }else{
    //            console.log(arr[i]);
    //        }
    //    }
    //     return flat_array;
    // }