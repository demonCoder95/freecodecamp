/**
 * Check if a given predicate, is true for all objects in the collection.
 * Truth is defined as in 'true value' when evaluated as a Boolean.
 * 
 */
function truthCheck(collection, pre) {
    return collection.map((a)=>(a[pre]?true:false)).reduce((a,b)=>(a&b))?true:false;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");