/**
 * Given a string, convert to pig latin as follows:
 * if starts with a vowel, simply add 'way' at the end
 * else, take off all consecutive consonants from front
 * add them to the end and append 'ay' to the word
 * 
 * @param {string} str The string to convert
 */
function translatePigLatin(str) {
    return /^[aeiou]/.test(str)?str+"way":str.slice(str.split(/[aeiou]/)[0].length,str.length)+str.split(/[aeiou]/)[0]+"ay";
  }
  
  console.log(translatePigLatin("crzy"));