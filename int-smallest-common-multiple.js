/**
 * Given a set of two ints find SCM of these number that also
 * divides every int between them
 */
function smallestCommons(arr){
    if(arr.length != 2) return undefined;   //handle undef
    if(arr[0] < 1 || arr[1] < 1) return undefined; // handle undef

    if(arr[0] == arr[1]) return arr[0]; //edge case
    
    let n1 = arr[0] < arr[1]?arr[0]:arr[1]; //smaller num
    let n2 = arr[0] > arr[1]?arr[0]:arr[1]; //larger num

    // infinitely looping on multiples of n2
    let flag = true;
    
    for(let i=n2; true; i+=n2){
        // check if j|i for all n1<=j<=n2-1
        for(let j=n1; j<=n2-1; j++){
            if(i%j != 0){
                flag = false;
                break;
            }else{
              flag = true;
            }
        }
        if(flag) return i;
    }
}

console.log(smallestCommons([23,18]));