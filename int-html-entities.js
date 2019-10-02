/**
 * Convert special characters to HTML entites.
 * However, HTML entites are a more generic concept
 * and can encode EVERY unicode character.
 * Note: Displaying the result in the browser will actually
 * display the decoded characters, so need to debug the code 
 * properly!
 * @param {string} str String to perform encoding on
 */
function convertHTML(str) {
    //for this problem, can simply map all the entites
    // however, for more robust implementation, should use numeric versions
    // which can easily be coded into an algorithm rather than a 
    //lookup table
    let encoder = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&apos;"
    }
    // return str.split("").map((a)=>/[&<>"']/.test(a)?encoder[a]:a).join("");
    return str.replace(/[&<>"']/g, (match)=>encoder[match]);
  }
  
  console.log(convertHTML("Dolce & Gabbana"));