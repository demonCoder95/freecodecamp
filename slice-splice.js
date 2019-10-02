/*
Copy arr1 in order at nth index on arr2. The best way to do it
is the commented statement at the end. But the platform forces 
to use the slice/splice funtions to accomplish this, which isn't
a good approach, since it uses a loop, that is not necessary!
*/
function frankenSplice(arr1, arr2, n) {
    let arr2_copy = arr2.slice();
    for(let i=0; i<arr1.length; i++){
      arr2_copy.splice(n, 0, arr1[i]);
      n++;
    }

    return arr2_copy;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

// return [arr2.slice(0,n), ...arr1, arr2.slice(n,n+arr1.length)];