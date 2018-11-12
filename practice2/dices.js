// 1. set variable throw with dicevalues as keys, and their count as values
// 2. create a variable named score and set it to 0.
// 3. iterate throw the throw keys, and add compute(throwkey, throwvaue) at each step, to sum.
// 4. return score.

// see dices2.js for alternative solution

function score(dices) {
  var diceCount = getCount(dices);
  var score = 0;
  dices = Object.keys(diceCount).map(Number);
  var i;
  var dice;
  
  for (i = 0; i < dices.length; i++) {
    dice = dices[i];
    score += computeScore(dice, diceCount[dice]);
  }
  
  return score;
}

function getCount(dices) {
  var count = {};
  var i;
  
  for (i = 0; i < dices.length; i++) {
    if (count.hasOwnProperty(dices[i])) {
      count[dices[i]] += 1;
    } else {
      count[dices[i]] = 1;
    }
  }
  
  return count;
}

function computeScore(diceValue, diceCount) {
  if (diceCount >= 3) {
    if (diceValue === 1) {
      return 1000 + (diceCount - 3) * singleScore(diceValue);
    } else {
      return diceValue * 100 + (diceCount - 3) * singleScore(diceValue);
    }
  } 
  return diceCount * singleScore(diceValue);
}

function singleScore(diceValue) {
  if (diceValue === 1) { return 100; }
  if (diceValue === 5) { return 50; }
  return 0;
}