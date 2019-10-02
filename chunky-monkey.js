/*
need to convert an array into 2d array of size-sized subarrays
Currently uses a loop, need to look for a better solution!
*/
function chunkArrayInGroups(arr, size) {
  let result = [];
  for(let i=0; i<arr.length/size; i++){
    result[i] = arr.slice(i*size,i*size+size);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);