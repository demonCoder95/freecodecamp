/**
 * Need to create a person with private properties
 * that are operated using set/get functions ONLY
 * 
 */
var Person = function(firstAndLast) {
    //using closures to implement private variables
    // a little trick in vector assignment to save 1 line of code   
    var [firstName,lastName] = firstAndLast.split(" ");
  
    // get functions
    this.getFirstName = ()=> {return firstName};
    this.getLastName = () => {return lastName};
    this.getFullName = () => {return [firstName,lastName].join(" ")};
    
    // set functions
    this.setFirstName = (a) => {firstName = a};
    this.setLastName = (a) => {lastName = a};
    this.setFullName = (a) => {
      firstName = a.split(" ")[0];
      lastName = a.split(" ")[1];
    }
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');