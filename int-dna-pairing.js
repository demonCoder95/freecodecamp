/**
 * Return the other pair of DNA strand given the
 * knowledge of the pair of each element
 * @param {string} str Single DNA strand
 */
function pairElement(str) {
    return str.split("").map((a)=>{
      switch(a){
        case "C": return ["C", "G"]; break;
        case "G": return ["G", "C"]; break;
        case "A": return ["A", "T"]; break;
        case "T": return ["T", "A"]; break;
      }
    })
  }
  
  console.log(pairElement("GCG"));