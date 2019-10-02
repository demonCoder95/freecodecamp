/*
The objective is to capitalize the string with 
every word's first char in uppercase and all
remaining chars in lowercase!
Simply splitting the string on space, using
arrow function to form new string with first 
char uppercase remaining lowercase, join it back
et voila!
*/

function titleCase(str) {
    return str.split(" ").map((a) => a[0].toUpperCase()+a.slice(1,a.length).toLowerCase()).join(" ");
  }
  
  titleCase("I'm a little tea pot");