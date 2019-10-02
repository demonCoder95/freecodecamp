/*
Use an Immediately Invoked Function Expression to bundle up mixins into an 'object'
very simple using ES6 arrow functons!
*/


let funModule = (
    // the IIFE
    ()=>{
      // simply returns the 'object'/module
      return {
        //each mixin as object methods
        isCuteMixin: (obj)=>{
          obj.isCute = ()=>{return true;};
        }, //end of isCuteMixin
        singMixin: (obj)=>{
          obj.sing = ()=>{console.log("Singing to an awesome tune");};
        }//end of singMixin
      }// end of return
    }//end of arrow func
  )();// end of IIFE