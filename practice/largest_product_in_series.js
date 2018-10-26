/*
Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240
The input string always has more than five digits.

*/


// input : string number of length > 5
// output : number

// "123879583" => split and map [1, 2, 3, 8, 7, 9, 5, 8, 3]
//  length: 9
//  indexesRanges : (0, 4) (1, 5) (2, 6) (3, 7) (4, length - 1)
// j starts with 4 and stop increasing at length - 1
// i starts with 0
// 

// ALGORITHM :
// 1. transform the string into an array of digits (split and map). store it in a var named digits.
// 2. initialize a variable named maxValue and set it to 1.
// 3. initialize a variable named currentValue and set it to 1.
// 4. declare i and j variables.
//
// 5. set a loop : - initialization : j = 4
//                 - condition : j < length
//                 - final expression : increase j.
//     a) set an inside loop : - initialization : i = j - 4, currentValue = 1
//                            - condition : i <= j
//                            - final expression : increase i.
//          - at each step of iteration, multiply currentValue by digits[i]
//

function greatestProduct(stringSeries) {
  var digits = stringSeries.split('').map(Number);
  var maxValue = 1;
  var currentValue;
  var i;
  var j;

  for (j = 4; j < digits.length; j++) {
    for (i = j - 4, currentValue = 1; i <= j; i++) {
      currentValue *= digits[i];
    }
    maxValue = currentValue > maxValue ? currentValue : maxValue;
  }

  return maxValue;
}