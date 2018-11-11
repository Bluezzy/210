
// ---------------------------------- HELPER METHODS ----------------------------------------

function elementCount(array, element) {
  return array.filter(function(el) {
    return el === element;
  }).length;
}

function isValidInput(walk) {
  if (Array.isArray(walk)) {
    if (walk.every(function(direction) {
      return ['n', 's', 'w', 'e'].includes(direction);
    })) {
      return true;
    }
  }
  return false;
}


// ----------------------------------------------------------------------------------------
// ------------------------------------ALGORITHMS------------------------------------------



// input :
//  - array of one-letter string, ['n', 's', 'w', 'e', 'w', 'w', 'e'].
// output conditions to return true :
// - it takes exactly 10 minutes => you walked 10 blocks in different directions => length of array must be 10.
// - you're back to the starting point => 
// coordinates of starting point : 
// startingPoint{
// n: 0,
// s: 0,
// w: 0,
// e: 0,
// }
// 

// Test Cases :
// isValidWalk(not an array) => false
// isValidWalk(an array with any element that are not 'n', 's', 'w' or 'e') => false
// isValidWalk([]) => false
// isValidWalk[0 to 9 elements in an array] => false
// isValidWalk['n', 's', 'n', 's', 'e', 'w', 'e', 'w', 'n', 's'] => true
// isValidWalk['n', 's', 'n', 's', 'e', 'w', 'e', 'w', 'n', 'n'] => false
// isValidWalK([more than 10 elements]) => false

// Algorithm :
// if the input is valid and has a length of exactly 10,
//    .create an object named arrivalPoint and set it to directions as keys and, as values :
//          - the number of time the key appears in the walk, meaning the length of a filtered array.
//          - if arrivalPoint['n'] - arrivalPoint['s'] === 0 and arrivalPoint['w'] - arrivalPoint['e'] === 0,
//                return true
// return false by default

function isValidWalk(walk) {
  var arrivalPoint = {};
  if (isValidInput(walk) && walk.length === 10) {
    arrivalPoint['n'] = elementCount(walk, 'n');
    arrivalPoint['s'] = elementCount(walk, 's');
    arrivalPoint['w'] = elementCount(walk, 'w');
    arrivalPoint['e'] = elementCount(walk, 'e');

    if (arrivalPoint['n'] - arrivalPoint['s'] === 0 && arrivalPoint['w'] - arrivalPoint['e'] === 0) {
      return true;
    }
  }
  return false;
}

// time: 36 minutes without validation, 42 minutes with validation of input.





// Algorithm2

// northSouth count : +1 if 'n', -1 if 's'
// eastWest count : + 1 if 'w', -1 if 'n'
// true if NorthSount count === 0 and eastWestCount === 0

function anotherIsValidWalk(walk) {
  var northSouthCount = 0;
  var eastWestCount = 0;
  var i;

  if (isValidInput(walk) && walk.length === 10) {
    for (i = 0; i < walk.length; i++) {
      if (walk[i] === 'n') {
        northSouthCount++;
      } else if (walk[i] === 's') {
        northSouthCount--;
      } else if (walk[i] === 'w') {
        northSouthCount++;
      } else {
        northSouthCount--;
      }
    }
    if (northSouthCount === 0 && eastWestCount === 0) {
      return true;
    }
  }

  return false;
}

var walk1 = ['n','s','n','s','n','s','n','s','n','s'];
var walk2 = ['w','e','w','e','w','e','w','e','w','e','w','e'];
var walk3 = ['w'];
var walk4 = ['n','n','n','s','n','s','n','s','n','s'];
var walk5 = ['s', 'e', 'n', 'w', 'w', 's', 'e', 'w', 'e', 'n'];
var walk6 = 'nsnsnsnsns';

