/**
 * Given an array and values, remove all instaces from that array
 * Assumption: 1 or more argument will always be given after the array
 * @param  {...any} args   Array along with elements to remove 
 */
function destroyer(...args){
    let arr = args[0];
    let vals = args.slice(1,args.length);   //slice is non-inclusive

    for(let j=0; j<vals.length; j++){
        for(let i=0; i<arr.length; i++){
            if(arr[i] == vals[j]){
                delete arr[i];  // this will not change the length property, which is desired!
                // will not break the loop, to catch all instances
            }
        }
    }
    //filter all non-deleted entries
    return arr.filter((a)=>(typeof a != undefined));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));