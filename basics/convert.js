function stringToInteger(string) {
  var allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // => [characters['0']
  var lastIndex = string.length - 1;
  var j;
  var characters = string.split('');
  var result = 0; 
  var digits = [];

  for (i = lastIndex; i >= 0; i--) {
    digits.push(allDigits[characters[i]])
  }

  for (i = 0; i < digits.length; i++) {
    result += (digits[i] * Math.pow(10, i))
  }

  return result;
}

function isSigned(string) {
  return (string.startsWith("+") || string.startsWith("-"));
}

function stringToSignedInteger(string) {
  var cleanedString = string;
  if (string.startsWith("+") || string.startsWith("-")) {
    cleanedString = string.slice(1);
  }

  result = stringToInteger(cleanedString);

  if (result < 0) { result *= -1 };
  return result;
}

function integerToString(value) {
  var digits = integerToDigits(value);
  var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var result = "";
  var i;

  for (i = 0; i < digits.length; i++) {
    result += characters[digits[i]];
  }

  return result;
}

function integerToDigits(value) {
  var divisor = 1;
  var i;
  var digits = [];
  while (value >= divisor) {
    divisor *= 10;
  }
  if (divisor == 1) {
    return [0];
  } else {
    divisor /= 10;
  }

  for (divisor = divisor; divisor >= 1; value = Math.floor(value % divisor), divisor /= 10) {
    digits.push(Math.floor(value / divisor))
  }
  return digits;
}

function signedIntegerToString(integer) {
  if (integer < 0) {
    return ('-' + integerToString(-integer));
  } else if (integer > 0) {
    return ('+' + integerToString(integer));
  } else {
    return integerToString(integer);
  }
}
// 4352
// 1000;