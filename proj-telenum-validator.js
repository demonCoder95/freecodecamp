/**
 * Given a US telephone number as string
 * validate it given certain valid formats
 * String processing project, yay! Regex time!
 */
function telephoneCheck(str){
    let regex = /(^(1 ?)?\(\d{3}\)[ -]?\d{3}-\d{4}$)|(^\d{10}$)|(^(1 )?(?=\d{3}[- ])\d{3}[- ]\d{3}[ -]\d{4}$)/;
    return regex.test(str);
}

console.log(telephoneCheck("1 555 555 5555"));

