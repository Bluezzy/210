// input : integer
// output : integer

// RULES :
// Featured number : - odd
//                    - multiple of 7
//                    - each digit appear only once *
//

// * rules number 3 : given an array of string-digits, write a function that returns true if each digit appear once, false otherwise.
//                       - iterate over the digits.
//                             - at each step of iteration, iterate over the digits once again. c
//                       - compare the value at the outer iteration with each value from the most nested iteration, excluding
//                        when indexes are equal ( i === j )
//                       - returns false if it finds strict equality.
//                   At the end of all iterations, return .
//

function hasUniqueValues(array) {
  var i;
  var j;
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if ((j !== i) && (array[i] === array[j])) {
        return false;
      }
    }
  }

  return true;
}

function isFeatured(integer) {
  var digits = String(integer).split('');
  return isOddMultipleOf7(integer) && hasUniqueValues(digits); 
}

function isOddMultipleOf7(integer) {
  return (integer % 7 === 0) && (integer % 2 === 1);
}

// ** the max value can only be as large as 10 digits, so we need to find the first high number from 9999999999
// that is a featured number to find the maximum featured number

/* function maxFeatured() {
  var n;
  var max = 9999999999
  for (n = max; n > 0; n--) {
    if (isFeatured(n)) {
      return n;
    }
  }
}

*/
// But this process is too slow, we only need to try it out once to find the maxValue, and we get 9876543201.


function featured(integer) {
  var maxValue = 9876543201; // **
  if (integer >= maxValue) {
    console.log('The value is too high');
    return;
  }

  var n;
  for (n = integer + 1; n <= maxValue; n++) {
    if (isFeatured(n)) { return n; }
  }

  console.log('No featured number found');
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543201);   // The value is too high

