// Alternative solution from dices.js

function rules(diceCount) {
	if (equal(diceCount, [1, 1])) { return  100; }    
	if (equal(diceCount, [1, 5])) { return   50; }
	if (equal(diceCount, [3, 1])) { return 1000; }
  if (equal(diceCount, [3, 2])) { return  200; }
	if (equal(diceCount, [3, 3])) { return  300; }
	if (equal(diceCount, [3, 4])) { return  400; }
	if (equal(diceCount, [3, 5])) { return  500; }
	if (equal(diceCount, [3, 6])) { return  600; }
	return 0;
}

function score(dices) {
	return dicesCount(dices).reduce(function(res, diceCount) {
		return res + rules(diceCount);
	}, 0);
}

function count(dices, value) {
	var length = dices.filter(function(dice) { return dice === value; }).length;
	return length > 3 ? 3 : length;
}

function dicesCount(dices) {
	return unique(dices).map(function(dice) {
		return [count(dices, dice), dice];
	});
}

function unique(arr) {
	return arr.filter(function(el, index) {
		return arr.indexOf(el) === index;
	});
}

function equal(dicecount1, dicecount2) {
	return dicecount1[0] === dicecount2[0] && dicecount1[1] === dicecount2[1];
}