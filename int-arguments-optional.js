/**
 * A function that sums two args. If only one given, returns
 * a function that accepts 1 arg and sums this with the original
 * number given. If numbers aren't valid 'number' type, return 
 * 'undefined'.
 * Assumptions: func will always get 1 or 2 params. This helps
 * optimize the code.
 * @param {number[]} args Arguments passed to the function
 */
function addTogether(...args) {
    switch(args.length){
      case 1: return typeof args[0] == "number"?(a)=>(typeof a == "number"?a+args[0]:undefined):undefined;break;
      case 2: return typeof args[0] == "number" & typeof args[1] == "number"?args[0]+args[1]:undefined;break;
      default: return undefined;  // undefined on #args!=1,2
    }
  }
  addTogether(2,3);