// Write a card counting function. It will receive a cardparameter, 
// which can be a number or a string, and increment or decrement the global countvariable according to the card's value (see table). 
// The function will then return a string with the current count and the string Betif the count is positive, or Hold
// if the count is zero or negative. The current count and the player's decision (Betor Hold) should be separated by a single space.

var count = 0;
function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1; // add one to count total
      break;
    case 7:
    case 8:
    case 9:
      break;  // no change to count
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1; // subtract one from count total
      break;
  }
  return count;
}

