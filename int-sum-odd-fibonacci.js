/**
 * Given an int n, return sum of all odd fib nums
 * less than or equal to n
 * Algorithm: DO NOT create an extra fib() func
 * because to generate nth fib u need all previous
 * n-1 entries, therefore, on each kth iteration, all
 * previous k-1 fibs will be generated again, which is bad!
 * For sake of optimization, the fib generation will be embedded
 * into the problem solving!
 */
function sumFibs(num) {
    // handle edge cases
    if(num == 1 || num == 2) return 2;
    let fib_n_2 = 1;  //fib(n-2)  
    let fib_n_1 = 1;  //fib(n-1)
    let fib_n;  //fib(n)
    let sum = 2;  //after edge cases, sum starts with 2
    while(true){
      // generate nth fib
      fib_n = fib_n_1 + fib_n_2;
      fib_n_2 = fib_n_1;
      fib_n_1 = fib_n;
      //implicit break on term cond
      if(fib_n > num) return sum;
      // if odd, add to sum
      if(fib_n %2 == 1) sum += fib_n;
    }
  }

  console.log(sumFibs(75025));

