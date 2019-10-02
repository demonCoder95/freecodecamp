/**
 * Sum all primes less than or equal to the given num
 * Algorithm:
 * Since every prime > 2 is odd, can only loop on odd integers
 * Can reduce space further by checking 3->sqrt(n)
 */
function sumPrimes(num) {
    if (num <2) return undefined;   // handle edge cases
    let sum = 2;  // the base case
    // will only check for odd integers
    for(let i=3; i<=num; i+=2){
      if(isPrime(i)) sum += i;
    }
    return sum;
  }
  
  // simplest case of checking prime number
  function isPrime(n){
    if (n<=1) return false; //handle edge cases
    for(let i=2; i<=Math.floor(Math.sqrt(n)); i++){
      if (n%i == 0) return false;   // an optimization
    }
    return true;
  }
  
  console.log(sumPrimes(977));
