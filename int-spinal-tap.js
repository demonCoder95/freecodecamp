/**
 * Take a string and convert it to spinal-tap case
 * which is all lowercase with dashes in between
 * String can be: Camelcase string with no spaces
 * Underscore separated words
 * Some part is dash separated
 * @param {string} str String to operate on
 */
function spinalCase(str) {
    return str.replace(/[A-Z]/g, (match)=>(" " + match)).trim()
    .replace(/[_-]/g," ").toLowerCase().split(/\s+/).join("-");
}

console.log(spinalCase("This is just a TESTING string"));