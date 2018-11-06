// 1234 => 10011010010 => split and count '1'.
// 10011010010 => 10000000000 => 2^10
//                   10000000 => 2^7
//                    1000000 => 2^6
//                      10000 => 2^4
//                         10 => 2^1

// Algorithm :
//  set allPowers to [];
//  set power to 0.
//  set currentRemainer to n.

// ------------ initial search for the biggest power --------------

//  while Math.pow(2, power) <= n,
  //    power ++
// power --
// allPowers.unshift(power)
// currentRemainder -= Math.pow(2, power) => currentRemainder : 212
//                                        => power : 10


// while currentRemainder > 0
  // while Math.pow(2, power) > currentRemainder
    // power--
  // currentRemainder -= Math.pow(2, power)
  // allPowers.push(power)


// ------ now we have the powers of 2 that decompose n : [1, 4, 6, 7, 10] ---------
//        they will serve as indexes for the bit representation where bit = '1'.

// bitLength = Math.max(...allPowers) + 1;
// bitRepresentation = '0'.repeat(bitLength).split('') => ['0', '0', '0', ..., '0']
// positions = allPowers.reverse()
// bitRepresentation = bitRepresentation.map : '0' turn to '1' if the index is in positions.
// bitRepresentation = Number(bitRepresentation.reverse.join('')):
// return bitRepresentation

function bitConversion(n) {
  if (n <= 0) { return 0; }
  
  var allPowersOf2 = getAllPowersOf2(n);
  var bitLength = Math.max(...allPowersOf2)+ 1;
  var bitRepresentation = '';
  var position;

  for (position = bitLength - 1; position >= 0; position--) {
    if (allPowersOf2.includes(position)) {
      bitRepresentation += '1';
    } else {
      bitRepresentation += '0';
    }
  }

  return Number(bitRepresentation);
}


function closestPowerOf2Below(n) {
  var currentPower = 0;
  while (Math.pow(2, currentPower) <= n) {
    currentPower++;
  }
  return currentPower - 1;
}

function getAllPowersOf2(n) {
  var currentPower = closestPowerOf2Below(n);
  var allPowersOf2 = [currentPower];
  var currentRemainder = n - Math.pow(2, currentPower);

  while (currentRemainder > 0) {
    while (Math.pow(2, currentPower) > currentRemainder) {
      currentPower--;
    }
    allPowersOf2.push(currentPower);
    currentRemainder -= Math.pow(2, currentPower);
  }

  return allPowersOf2;
}