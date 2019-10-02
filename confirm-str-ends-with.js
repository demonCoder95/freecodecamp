/*
Can use the RegExp object to convert a variable into a regex 
this works like a manually defined regex! regex.test(string)
and bingo! Just need the 'ends with' anchor added
*/

function confirmEnding(str, target) {
    let regex = new RegExp(target+"$");
    return regex.test(str);
  }
  
  confirmEnding("Bastian", "n");