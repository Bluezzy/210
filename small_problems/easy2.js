function crunch(string) {
	var newStr = '';
	var i;
	for (i = 0; i < string.length; i++) {
		if (string[i] !== string[i - 1]) {
			newStr += string[i];
		}
	}
	return newStr;
}

function logInBox(string) {
	var length = string.length;
	var border = "+-" + "-".repeat(length) + "-+";
	var emptyLine = "| " + " ".repeat(length) + " |";
	var mediumLine = "| " + string + " |";

	console.log(border);
	console.log(emptyLine);
	console.log(mediumLine);
	console.log(emptyLine);
	console.log(border);
}

function stringy(value) {
	if (!Number.isInteger(value)) {
		return 'wrong input'
	}

	var i;
	var str = "";

	for (i = 1; i <= value; i++) {
		if ( i % 2 == 1 ) {
			str += "1";
		} else {
			str += "0"
		}
	}

	return str;
}

function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

 function triangle(length) {
 	var nbOfStars = 1;
 	var nbOfSpaces = (length - 1);
 	while (nbOfStars <= length) {
 		console.log(" ".repeat(nbOfSpaces) + "*".repeat(nbOfStars));
 		nbOfStars++;
 		nbOfSpaces--;
 	}
 }

 function madLib() {
 	var noun = prompt('Enter a noun:');
	var verb = prompt('Enter a verb:');
	var adjective = prompt('Enter an adjective:');
	var adverb = prompt('Enter an adverb:');

	var sentence = 'Do you ' + verb + ' your ' + adjective + ' ' + 
                 	noun + ' ' + adverb + "? That's hilarious!";

  console.log(sentence);
 }

function isDoubleDouble(number) {
	var string = String(number);
	var middle = string.length / 2;
	if (string.length % 2 == 0) {
		var str1 = string.substr(0, middle);
		var str2 = string.substr(middle);
		return (str1 === str2);
	}
	return false;
}

function twice(number) {
	if (isDoubleDouble(number)) {
		return number;
	} else {
		return number * 2;
	}
}

function getGrade(grade1, grade2, grade3) {
  var average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

function cleanUp(text) {
  var cleanText = '';
  var i;

  for (i = 0; i < text.length; i += 1) {
    if (isLowerCaseLetter(text[i]) || isUpperCaseLetter(text[i])) {
      cleanText += text[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

function century(year) {
  var centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  var lastDigit;

  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}


