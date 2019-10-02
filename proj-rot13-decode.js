/**
 * In a given string, decode it using ROT-n Algorithm
 * Leave the special characters alone (might be a bad idea,
 * since that will make know-plaintext attack easier)
 * Algorithm: 
 * Create a string of all upper case letters
 * For each letter(use regex?), find it's index, and get
 * element at index (index+n)%26 where n is the
 * rotational decode value.
 * Required is ROT-13 but ROT-n is just as simple!
 */
let rot = 13;   //for ROT-13
function rot13(str){
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let rot13_str = "";
    str = str.toUpperCase();
    for(let i=0; i<str.length; i++){
        // ASCII 65 -> A and ASCII 90 -> Z
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            rot13_str += alphabets[(alphabets.indexOf(str[i])+rot)%26];
        }else{
            rot13_str += str[i]; //keep the non alphabets
        }
    }
    return rot13_str;
}

console.log(rot13("SERR PBQR PNZC"));