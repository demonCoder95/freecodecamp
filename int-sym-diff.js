/**
 * Given two arrays, return the symmetric difference of the two 
 * i.e. elements that are in each array but NOT in both
 * Array elements are NOT just integers
 * Assumption: Common element doesn't appear twice in any of the
 * arrays.
 * If want to adopt to multiple occurances, remove the break and 
 * use delete instead of splice on the array and filter out
 * 'undefined' values from the result
 */
function diffArray(arr1, arr2){
    let newArr = [];    // the answer
    let matched = false;    // flag to check for matched element

    for(let i=0; i<arr1.length; i++){
        matched = false;
    
        for(let j=0; j<arr2.length; j++){
            //if a match was found, shrink arr2 and break the loop
            if (arr2[j] == arr1[i]){
                arr2.splice(j,1);   // this is to ensure the length parameter is modified
                matched = true;
                break;
            }
        }
        // if the element was unique, append
        if(!matched){
            newArr.push(arr1[i]);
        }
    }
    // must also return whatever was left in arr2
    return [...newArr, ...arr2];
}
console.log(diffArray([1, 2, 3, 4], [1, 2, 3, 4, 5]));