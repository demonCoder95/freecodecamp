/* Implement card counting algorithm for blackjack*/
var count = 0;

function cc(card) {
  switch(card){
    case 2: case 3: case 4: case 5: case 6: count++; break;
    case 7: case 8: case 9: break;
    case 10: case 'J': case 'Q': case 'K': case 'A': count--; break;
    
  }
  if (count > 0){
    return count + " Bet";
  }else{
    return count + " Hold";
  }
}