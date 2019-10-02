/*
Given str1 and str2, determine if str1 has all
characters of str2 or not i.e. str2 is a mutation
of str1 or not

Take str2, make lowercase, split to make an array
map it to get an array of boolean if it's present
in str1, reduce the boolean array with logical AND
convert the numberic output to boolean et voila!
*/

function mutation(arr) {
  return (arr[1].toLowerCase().split("").map(a => arr[0].toLowerCase().indexOf(a) != -1)).reduce((a,b) => a & b) == 0?false:true;
}
mutation(["hello", "hel"]);