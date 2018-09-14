
// input : string with unique digits separated by dots
// output : integer
// Rules : comparing 2 string versions numbers requires comparing their relative computed values based on some rules.

// 1.3  => 1.3.0.0.0 => compute a value based on some rules => 1 * 10^4 + 3 * 3^3 + ... 
// A powerbase computation makes sure that no matter the length of the version numbers,
// the value resulting from computing the number to a digit will always be larger than sum of all values computed on the right :
// (example: 2.0.0.0 => 1.9.9.9). for that matter, it's useful to use digits * 10^i model.

// Data Structure : transform string into an array of integer-digits.

// Algorithm :
// 1 ) Transform the 2 string into arrays of their corresponding digits, store them into versionDigits1 and versionDigits2.
// 2 ) store the *biggest array-length* into a avariable named 'powerBase'
//    make both arrays with same length
// 3 ) *compute* the arrays sum based on a decreasing power on each digit =>
// 4 ) return 1 if the result of computation versionDigits1 is bigger than computation of versionDigits2
//    - return -1 if ....................................... is lower than 
//    - return 0 if ......................................... is equal to .............................
//

// * PowerCompute algorithm
// 0) define a variable called sum.
// 1) loop through the reversed digits array
// 2) if the digit is a number between 1 and 9 included.
// 3) return the sum.


function compareVersions(version1, version2) {
  var digits1 = getDigits(version1);
  var digits2 = getDigits(version2);
  var powerBase = Math.max(digits1.length, digits2.length);

  var version1value = compute(digits1, powerBase);
  var version2value = compute(digits2, powerBase);

  return compare(version1value, version2value);
}

function getDigits(version) {
  return version.split('.').map(function(stringDigit) {
    return Number(stringDigit);
  });
}

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

function compute(digits, powerBase) {
  digits.length = powerBase;
  digits = digits.reverse();
  var sum = 0;
  var i;

  for (i = 0; i < powerBase; i++) {
    if (isBetween1and9(digits[i])) {
      sum += digits[i] * Math.pow(10, i);
    }
  }

  return sum;
}

function isBetween1and9(input) {
  if (typeof(input) !== 'number') {
    return false;
  }

  return (input >= 1 && input <= 9);
}