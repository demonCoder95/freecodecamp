/**
 * Given an array of objects each with a name(satellite)
 * and distance(in km) from Earth's surface, compute the
 * orbital period (in s). Transform the object to replace
 * avgAlt property with the orbitalPeriod property.
 * Tried using map statement, didn't work, presumably because
 * those use 'pass by value' and therefore the updated copy is
 * not returned to the calling function. Hence, making it an 
 * 'undefined' behavior.
 * 
 */
function orbitalPeriod(arr) {
    var GM = 398600.4418;   //gravitational parameter
    var earthRadius = 6367.4447;    //for getostat-sats it's needed
    var getPeriod = (a)=>{
      return Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+a,3)/GM));
    }
    for(let i=0; i<arr.length; i++){
      arr[i]['orbitalPeriod'] = getPeriod(arr[i]['avgAlt']);
      delete arr[i]['avgAlt'];
    }
    return arr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));