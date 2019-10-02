/*
Find first element in the array that meets a 'truth'
that is provided as second argument, two ways to do
this, the lazy way and the smart way!
*/

function findElement(arr, func) {
    // the extremely smart way!
    // this works because the indexof function is lazy
    // and returns the first match index!
    return arr[arr.map(func).indexOf(true)];

    //the laziest way!
    // let temp = arr.map(func);
    // for(let i=0; i<temp.length; i++){
    //   if (temp[i] == true){
    //     return arr[i];
    //   }
    // }
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);