function unitDigitStringNumber(n) {
  if (n === 0) { return ''; }
  else if (n === 1) { return 'one'; }
  else if (n === 2) { return 'two'; }
  else if (n === 3) { return 'three'; }
  else if (n === 4) { return 'four'; }
  else if (n === 5) { return 'five'; }
  else if (n === 6) { return 'six'; }
  else if (n === 7) { return 'seven'; }
  else if (n === 8) { return 'eight'; }
  else if (n === 9) { return 'nine'; }
}

function dozenDigitStringNumber(n) {
  if (n === 0) { return ''; }
  else if (n === 1) { return ''; }
  else if (n === 2) { return 'twenty'; }
  else if (n === 3) { return 'thirty'; }
  else if (n === 4) { return 'forty'; }
  else if (n === 5) { return 'fifty'; }
  else if (n === 6) { return 'sixty'; }
  else if (n === 7) { return 'seventy'; }
  else if (n === 8) { return 'eighty'; }
  else if (n === 9) { return 'ninety'; }
}

function hundredDigitStringNumber(n) {
  if (n === 0) { return ''; }
  else if (n === 1) { return 'one hundred'; }
  else if (n === 2) { return 'two hundred'; }
  else if (n === 3) { return 'three hundred'; }
  else if (n === 4) { return 'four hundred'; }
  else if (n === 5) { return 'five hundred'; }
  else if (n === 6) { return 'six hundred'; }
  else if (n === 7) { return 'seven hundred'; }
  else if (n === 8) { return 'eight hundred'; }
  else if (n === 9) { return 'nine hundred'; }
}

function tenToNineteenStringNumber(unit) {
  if (unit === 0) { return 'ten'; }
  else if (unit === 1) { return 'eleven'; }
  else if (unit === 2) { return 'twelve'; }
  else if (unit === 3) { return 'thirteen'; }
  else if (unit === 4) { return 'fourteen'; }
  else if (unit === 5) { return 'fifteen'; }
  else if (unit === 6) { return 'sixteen'; }
  else if (unit === 7) { return 'seventeen'; }
  else if (unit === 8) { return 'eighteen'; }
  else if (unit === 9) { return 'nineteen'; }
}

function formatStringNumber(n) {
  var stringNumber = '0'.repeat(6 - String(n).length) + String(n);
  var digits = stringNumber.split('').map(Number);
  var firstHalf = digits.slice(0, 3);
  var secondHalf = digits.slice(3);
  return [firstHalf, secondHalf];
}

function format(result) {
  return result.filter(function(str) {
    return str.length > 0;
  }).join(' ');
}

function threeDigitsStringMechanism(threeDigitsArray) {
  var result = [];

  threeDigitsArray.forEach(function(digit, i) {
    if (i === 0) {
      result.push(hundredDigitStringNumber(threeDigitsArray[i]));
    } else if (i === 1) {
      result.push(dozenDigitStringNumber(threeDigitsArray[i]));
    } else if (i === 2) {
        if (threeDigitsArray[1] === 1) {
          result.push(tenToNineteenStringNumber(threeDigitsArray[i]));
        } else {
          result.push(unitDigitStringNumber(threeDigitsArray[i]));
        }
    }
  });

  return result;
}

function writeNumbers(n) {
  if (n === 0) { return 0; }
  var thousand = String(n).length > 3 ? true : false;
  var digits = formatStringNumber(n);
  var result = [];
  var firstHalf = digits[0];
  var secondHalf = digits[1];

  result = result.concat(threeDigitsStringMechanism(firstHalf));

  if (thousand) { result.push('thousand'); }

  result = result.concat(threeDigitsStringMechanism(secondHalf));

  return format(result);
}