function getCurrentRoundSwitchesPositions(iterationStep, end) {
  var allNumbers = [];
  var i;
  for (i = iterationStep; i <= end; i += iterationStep) {
    allNumbers.push(i);
  }
  return allNumbers;
}

function initializeBankOfSwitches(nbOfSwitches) {
  var i;
  var bank = {};
  for (i = 1; i <= nbOfSwitches; i++) {
    bank[i] = 'off'
  };
  return bank;
}

function toggleSwitch(bank, switchPosition) {
  if (bank[switchPosition] === 'off') {
    bank[switchPosition] = 'on';
  } else if (bank[switchPosition] === 'on') {
    bank[switchPosition] = 'off';
  } else {
    console.log('no switch on that position')
  }
  return bank;
}

function lightsOn(nbOfSwitches) {
  var bank = initializeBankOfSwitches(nbOfSwitches);
  var nbOfRounds = nbOfSwitches;
  var currentRoundSwitchesPositions;
  var step;

  for (step = 1; step <= nbOfRounds; step++) {
    currentRoundSwitchesPositions = getCurrentRoundSwitchesPositions(step, nbOfSwitches);
    currentRoundSwitchesPositions.forEach(function(position) {
      toggleSwitch(bank, position);
    });
  }

  return Object.keys(bank).filter(function(switchPosition) {
    return bank[switchPosition] === 'on';
  }).map(Number);
}

// input : number of switches
// output : array with switches that are on

// We initialize a bank of switches with state 'off'
// We iterate from index = 1 to index = nbOfRounds
//   Each step of the iteration (each round):
//     - we find all the positions of the switches we have to toggle with  currentRoundSwitchesPositions(index, end)
//     - we iterate over the currentRoundSwitches :
//         - We use each value as a key to access the main bank switch in order to toggle that switch.

// We filter the bank based on a switch state criteria, and collect the keys of the resulting object.
// We return those keys.
// 

// Iteration mecanism for each round :
// [1, 2, 3, ... ]
// [2, 4, 6, ... 
// ...
// [n-1, ..]
// [n]