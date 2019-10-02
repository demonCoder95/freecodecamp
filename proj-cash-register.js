/**
 * Implement a cash register that can contain certain types of change 
 * currencies (nickels, dimes, pennies, 5s 10s 20s etc) and maintain
 * balance and report a message upon every transaction that is executed
 * on the register.
 * IMPORTANT: Will multiply everything with 100 to avoid floating point
 * arithmetic problems. Divide with 100 before returning the result.
 * @param {number} price Purchase price of the item(s)
 * @param {number} cash Payment made 
 * @param {number} cid Cash-in-drawer, 2D array with $ in that change
 */
function checkCashRegister(price, cash, cid){
    let change = cash*100 - price*100;
    let total_cid = 0;

    function getTotal(arr){
        let total = 0;
        for(let i=0; i<arr.length; i++){
            total += arr[i][1]*100;
        }
        return total;
    }
    total_cid = getTotal(cid);
    // handle edge cases right away
    if(total_cid < change){
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    if(change == total_cid){
        return {status: "CLOSED", change: cid};
    }
    // Logic to compute change in non-edge cases
    let change_items = {1: 0, 5: 0, 10: 0, 25: 0, 100: 0, 500: 0, 1000: 0, 2000: 0, 10000: 0}; // keep track of change currency
    //can't iterate on change_items.keys() since keys aren't returned in any order,
    //and we need to ensure highest-lowest order in change 
    let change_types = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    let change_array = [];
    for(let i=0; i<change_types.length; i++){
        let iter_amount = (change-(change%change_types[i]))/change_types[i]*change_types[i]
        change_items[change_types[i]] += iter_amount > cid[change_types.length-1-i][1]*100?cid[change_types.length-1-i][1]*100:iter_amount;
        change -= iter_amount > cid[change_types.length-1-i][1]*100?cid[change_types.length-1-i][1]*100:iter_amount;
        // if change at any stage becomes less than total cash in register, it's bad!
        if(getTotal(cid.slice(0, change_types.length-1-i)) < change){
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }else if(change_items[change_types[i]]/100 >0){
            // cid[change_types.length-1-i][1] = (cid[change_types.length-1-i][1]*100 - change_items[change_types[i]])/100;
            change_array.push([cid[change_types.length-1-i][0], change_items[change_types[i]]/100]);
        }
    }
    return {status: "OPEN", change: change_array};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
