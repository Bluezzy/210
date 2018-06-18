function rotateArray(arr) {
  if (arr.length === 0) {
    return [];
  } else if (!Array.isArray(arr)) {
    return undefined;
  }

  return arr.slice(1).concat(arr[0]);
}


// Input :
// Both argument should be positive integers >= 0.

// We turn the first argument ( a number ) to an array of string-digits.


// Output:
// join the digits and turn the resulting string to a number.

function rotateRightmostDigits(number, n) {
  if ((typeof(number) !== 'number') || (typeof(n) !== 'number') 
     || (number <= 0) || (n <= 0)
     || (Math.floor(number) !== number) || (Math.floor(n) !== n)) {
    return 'wrong input';
  }

  var digits = String(number).split('');
  if (digits.length < n) { return 'not enough digits to rotate' }

  var unchangedPart = digits.slice(0, digits.length - n);
  var changingPart = digits.slice(digits.length - n);

  changingPart = rotateArray(changingPart);

  return Number(unchangedPart.concat(changingPart).join(''));
}

// 735291 => 321579

// n = number.length;
// result = number;

// LOOP
// n--
// result = rotateRightmostDigits(result, n)
// ....
// until n == 2 included

function maxRotation(number) {
  var n = String(number).length;
  var result = number;
  var i;

  for (i = n; i >= 2; i--) {
    result = rotateRightmostDigits(result, i)
  }

  return result;
}

function minilang(instructions) {
  var tokens = instructions.split(' ');
  var register = 0;
  var stack = [];

  tokens.forEach(function(token) {
    if (isValue(token)) {
      register = Number(token);
    } else if (token === 'PUSH') {
      stack.push(register);
    } else if (token === 'ADD') {
      register += stack.pop();
    } else if (token === 'SUB') {
      register -= stack.pop();
    } else if (token === 'MULT') {
      register *= stack.pop();
    } else if (token === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (token === 'MOD') {
      register = Math.floor(register % stack.pop());
    } else if (token === 'POP') {
      register = stack.pop();
    } else if (token === 'PRINT') {
      console.log(String(register));
    }
  });
}

function isValue(value) {
  return !isNaN(Number(value));
}

function wordToDigit(string) {
  var wordNumbersRegex = /\b(one|two|three|four|five|six|seven|eight|nine)\b/gi;
  return string.replace(wordNumbersRegex, function(wordNumber) {
    return correspondingDigit(wordNumber);
  });
}

function correspondingDigit(wordNumber) {
  switch (wordNumber.toLowerCase()) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
    }
}

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}



// input : any string
// Ouput : string with number words turned into their corresponding digit characters
// use a regex to search for sequence of characters that are word digits. store it in a regex variable
// use that regex variable as an argument to the replace function, the second argument should be a function :
//  - that returns the corresponding digit character of the word to be replaced.






