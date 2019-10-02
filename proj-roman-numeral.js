/**
 * Given an integer, return it's Roman Numeral 
 * representation.
 * Algorithm: 
 * Use the 'subtractive' notation in which 4 is 
 * IV and not IIII
 * No letter is repeated more than 3 times
 * I V X L C D M -> 1 5 10 50 100 500 1000
 * In this notation, 3999 is the largest integer
 * that can be represented.
 * 
 * @param {num} num The integer to convert to roman numeral string
 */
function convertToRoman(num){
    if(num < 1 || num > 3999) return undefined; // handle undef

    let roman_str = "";
    for(let i=0; i<4 && num > 0; i++){
        // num%10 gets the digit on each iteration
        // *Math.pow() gets the place value added to it
        // each successive iteration has to be prepended to the string
        roman_str = roman_encode[(num % 10)*Math.pow(10,i)] + roman_str;
        num = Math.floor(num/10);   //floor is necessary for loop termination
    }
    return roman_str;
 }

// 0: "" is important!
let roman_encode = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX",
    10: "X", 20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 
    100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800:"DCCC", 900: "CM",
    1000: "M", 2000: "MM", 3000: "MMM", 0: ""
  }

 console.log(convertToRoman(501));
  