// input: uncleaned string
// output: boolean

// isLuhnValid('') => false
// isLuhnValid('irej') => false
// isLunhValid('1111") => false
// isLunhValid('8kokfr763') => true

// Lunh Formula :
// '8763' => [8, 7, 6, 3] => [3, 6, 7, 8] => [3, 12, 7, 16] => [3, 3, 7, 7] => 3 + 3 + 7 + 7 => 20

// Computing Algorithm :
// 1) Split the cleaned String into an array of digits, use map to transform them to numbrtd
// 2) reverse the array
// 3) use map to transform each element on odd indexes to its doubled value
// 4) use map again to transform each element that are equal or bigger than 10, by substracting 9
// 5) use reduce to return the sum of all digits of the resulting array

// isValid(lunhValue) Algorithm :
//  if the string  contain digits,
//     - Get the string's Luhn Value and store it into a variable named lunhValue.
//     - if the value is a multiple of 10, return true
// return false

function isLuhnValid(string) {
  var stringDigits = string.replace(/\D/gi, '');
  var luhnValue;
  if (stringDigits.length > 0) {
    luhnValue = computeLuhnValue(stringDigits);
    if (luhnValue % 10 === 0) {
      return true;
    }
  }
  return false;
}

function computeLuhnValue(stringDigits) {
  var digits = stringDigits.split('').map(Number);
  digits = digits.reverse();
  var computedDigits = digits.map(function(digit, index) {
    if (index % 2 === 1) {
      if (digit * 2 >= 10) {
        return (digit * 2) - 9;
      } else {
        return digit * 2;
      }
    } else {
      return digit;
    }
  });

  return computedDigits.reduce(function(a, b) {
    return a + b;
  });
}

console.log(isLuhnValid(''));
console.log(isLuhnValid('irej'));
console.log(isLuhnValid('1111'));
console.log(isLuhnValid('8kokfr763'));
