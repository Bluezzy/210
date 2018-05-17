function random(start, end) {
  start -= 1; // to include the start
  var gap = end - start;
  return Math.floor(Math.random() * gap + start + 1) // +1 to include the end
}

function teddyAge() {
  var number = String(random(20, 200))
  console.log('Teddy is ' + number + ' years old !')
}

function isAppearing() {
  var numbers = [];
  var range = ['1st', '2nd', '3rd', '4th', '5th'];
  var i = 0;
  var input;
  do {
    input = (Math.floor(Number(prompt('Enter the ' + range[i] + ' number'))));
    if (isNaN(input)) {
      console.log('wrong input. We expect a number')
    } else {
      numbers.push(input);
      i++;
    }
  } while (i < range.length)

  var checkingNumber = Math.floor(Number(prompt('Enter the last number')));
  for (i = 0; i < range.length; i++) {
    if (checkingNumber === numbers[i]) {
      console.log('The number ' + String(checkingNumber) + ' appears in [' + numbers.join(', ') + '].');
      return;
    }
  }
  console.log(String(checkingNumber) + ' does not appear in [' + numbers.join(', ') + '].')
}

function retirement() {
  var age = Math.floor(Number(prompt('What is your age?')));
  var desiredRetirementAge = Math.floor(Number(prompt('At what age would you like to retire?')));
  var today = new Date();
  var currentYear = today.getFullYear();
  var remainingWorkingYears = desiredRetirementAge - age;
  var retirementYear = currentYear + remainingWorkingYears;
  console.log ('It\'s ' + String(currentYear) + '. You will retire in ' + String(retirementYear) + '.');
  console.log('You have only ' + String(remainingWorkingYears) + ' years of work to go!');
}

function reversed(string) {
  var characters = string.split('');
  var result = "";
  var i;
  for (i = (characters.length - 1); i >= 0; i--) {
    result += characters[i];
  }
  return result;
}

function isPalindrome(string) {
  reversed(string) === string;
}

function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  var result = '';
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (isLetter(string[i]) || isNumber(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

function runningTotal(numbers) {
  var result = [];
  var count = 0;
  var i;
  for (i = 0; i < numbers.length; i++) {
    count += numbers[i];
    result.push(count);
  }
  return result;
}

function swapWord(word) {
  var characters = word.split('');
  var firstCharacter = characters[0];
  var lastCharacter = characters[characters.length - 1]
  characters[0] = lastCharacter;
  characters[characters.length - 1] = firstCharacter;
  return characters.join('');
}

function swap(string) {
  var words = string.split(' ');
  var result = [];
  var i;
  for (i = 0; i < words.length; i++) {
    result.push(swapWord(words[i]))
  }
  return result.join(' ');
}


// we have a string. we create a words array (substrings that are separated by spaces).
// we create an empty object that will show the number of words of different size
// we iterate over each index of each word.
//   for each word, we count the length. 
//    if that length already exists as a key in the object, we add 1 to the associated value. 
//    if not, we add the key with the associated value 1.
// we return the object.

function wordSizes(string) {
  var words = string.split(' ');
  var result = {};
  var i;
  var size;
  for (i = 0; i < words.length; i++) {
    size = realSize(words[i]);
    if (result[size] !== undefined) {
      result[size] += 1;
    } else {
      result[size] = 1;
    }
  }
  return result;
}

function realSize(word) {
  var count = 0;
  characters = word.split('');
  var i;
  for (i = 0; i < characters.length; i++) {
    if (isLetter(characters[i])) {
      count += 1;
    }
  }
  return count;
}

function isLetter(letter) {
  return (letter.toLowerCase() >= 'a' && letter.toLowerCase() <= 'z')
}

function dms(number) {
  var MINUTES_PER_DEGREE = 60;
  var SECONDS_PER_MINUTE = 60;
  var totalSeconds = number * MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;
  var degrees = Math.floor(totalSeconds / MINUTES_PER_DEGREE / SECONDS_PER_MINUTE);
  var remainingSeconds = totalSeconds - (degrees * MINUTES_PER_DEGREE * SECONDS_PER_MINUTE);
  var minutes = Math.floor(remainingSeconds / SECONDS_PER_MINUTE);
  remainingSeconds -= (minutes * SECONDS_PER_MINUTE);
  return String(degrees) + '\xb0' + String(minutes) + '\'' + String(remainingSeconds) + '"';
}

function copyNonDupsTo(resultArray, array) {
  array.forEach(function (value) {
                  if (resultArray.indexOf(value) === -1) {
                    resultArray.push(value);
                  }
                });
}

function union(array1, array2) {
  var newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}









//
